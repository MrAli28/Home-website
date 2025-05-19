from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, authenticate
from django.contrib import messages
from django.http import JsonResponse
from .models import Service, Booking, Provider, ServiceArea, Review
from .forms import BookingForm, UserRegistrationForm, UserProfileForm, ProviderRegistrationForm, ReviewForm

def home(request):
    """Home page view"""
    services = Service.objects.all()
    service_areas = ServiceArea.objects.all()
    return render(request, 'services/home.html', {
        'services': services,
        'service_areas': service_areas,
    })

def about(request):
    """About page view"""
    return render(request, 'services/about.html')

def services_list(request):
    """Services listing page"""
    services = Service.objects.all()
    return render(request, 'services/services.html', {'services': services})

def service_detail(request, service_id):
    """Service detail page"""
    service = get_object_or_404(Service, id=service_id)
    providers = Provider.objects.filter(service_types=service)
    return render(request, 'services/service_detail.html', {
        'service': service,
        'providers': providers,
    })

def contact(request):
    """Contact page view"""
    services = Service.objects.all()  # Pass services for the dropdown in contact form
    return render(request, 'services/contact.html', {'services': services})

def provider_detail(request, provider_id):
    """Provider detail page"""
    provider = get_object_or_404(Provider, id=provider_id)
    reviews = Review.objects.filter(booking__provider=provider)
    return render(request, 'services/provider_detail.html', {
        'provider': provider,
        'reviews': reviews,
    })

def book_service(request, service_id=None):
    """Booking form page"""
    service = None
    if service_id:
        service = get_object_or_404(Service, id=service_id)
    
    # Get all services for the dropdown
    services = Service.objects.all()
    
    if request.method == 'POST':
        form = BookingForm(request.POST)
        if form.is_valid():
            booking = form.save(commit=False)
            # Associate with user if logged in
            if request.user.is_authenticated:
                booking.customer = request.user
                # Pre-fill email from user account if not provided
                if not booking.email and request.user.email:
                    booking.email = request.user.email
            booking.save()
            # Store booking ID in session for the success page
            request.session['booking_id'] = booking.id
            return redirect('booking_success')
    else:
        initial_data = {}
        if service:
            initial_data['service'] = service
        # Pre-fill email from user account if logged in
        if request.user.is_authenticated and request.user.email:
            initial_data['email'] = request.user.email
        form = BookingForm(initial=initial_data)
    
    return render(request, 'services/book.html', {
        'form': form,
        'service': service,
        'services': services,
    })

def booking_success(request):
    """Booking success page"""
    booking_id = request.session.get('booking_id')
    booking = None
    if booking_id:
        booking = get_object_or_404(Booking, id=booking_id)
    
    return render(request, 'services/booking_success.html', {
        'booking': booking
    })

@login_required
def dashboard(request):
    """User dashboard view"""
    user = request.user
    bookings = Booking.objects.filter(customer=user)
    upcoming_bookings = bookings.filter(status__in=['pending', 'confirmed'])
    past_bookings = bookings.filter(status__in=['completed', 'cancelled'])
    
    return render(request, 'services/dashboard.html', {
        'user': user,
        'upcoming_bookings': upcoming_bookings,
        'past_bookings': past_bookings,
    })

@login_required
def cancel_booking(request, booking_id):
    """Cancel a booking"""
    booking = get_object_or_404(Booking, id=booking_id, customer=request.user)
    
    if request.method == 'POST':
        booking.status = 'cancelled'
        booking.save()
        messages.success(request, 'Booking cancelled successfully')
        return redirect('dashboard')
    
    return render(request, 'services/cancel_booking.html', {'booking': booking})

@login_required
def rate_booking(request, booking_id):
    """Rate a completed booking"""
    booking = get_object_or_404(Booking, id=booking_id, customer=request.user, status='completed')
    
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            review = form.save(commit=False)
            review.booking = booking
            review.save()
            
            # Update booking with rating
            booking.rating = review.rating
            booking.feedback = review.comment
            booking.save()
            
            # Update provider rating
            provider = booking.provider
            if provider:
                provider_bookings = Booking.objects.filter(provider=provider, rating__isnull=False)
                avg_rating = provider_bookings.aggregate(models.Avg('rating'))['rating__avg']
                provider.rating = avg_rating
                provider.total_jobs = Booking.objects.filter(provider=provider, status='completed').count()
                provider.save()
            
            messages.success(request, 'Thank you for your review!')
            return redirect('dashboard')
    else:
        form = ReviewForm()
    
    return render(request, 'services/rate_booking.html', {
        'booking': booking,
        'form': form,
    })

def register(request):
    """User registration view"""
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, 'Registration successful!')
            return redirect('dashboard')
    else:
        form = UserRegistrationForm()
    
    return render(request, 'services/register.html', {'form': form})

@login_required
def profile(request):
    """User profile view"""
    if request.method == 'POST':
        form = UserProfileForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            messages.success(request, 'Profile updated successfully')
            return redirect('profile')
    else:
        form = UserProfileForm(instance=request.user)
    
    return render(request, 'services/profile.html', {'form': form})

def become_provider(request):
    """Provider registration view"""
    if request.method == 'POST':
        form = ProviderRegistrationForm(request.POST)
        if form.is_valid():
            provider = form.save(commit=False)
            provider.user = request.user
            provider.save()
            form.save_m2m()  # Save many-to-many relationships
            messages.success(request, 'You are now registered as a service provider!')
            return redirect('dashboard')
    else:
        form = ProviderRegistrationForm()
    
    return render(request, 'services/become_provider.html', {'form': form})

def check_postcode(request):
    """AJAX view to check if a postcode is in service area"""
    postcode = request.GET.get('postcode', '')
    if not postcode:
        return JsonResponse({'valid': False})
    
    # Check if postcode is in any service area
    service_areas = ServiceArea.objects.all()
    for area in service_areas:
        postcodes = area.get_postcodes_list()
        for code in postcodes:
            if postcode.upper().startswith(code.upper()):
                return JsonResponse({'valid': True, 'area': area.city})
    
    return JsonResponse({'valid': False})
