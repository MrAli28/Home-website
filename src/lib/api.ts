import { Booking, User, Provider } from './store';

// Base URL for the API - would be replaced with actual backend URL
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://api.homefix-uk.com'
  : 'http://localhost:3000/api';

// Helper function for handling API responses
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    // Get error message from the response body
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || `API Error: ${response.status}`);
  }
  return response.json();
};

// Helper function to include auth token in requests
const getAuthHeaders = () => {
  const token = localStorage.getItem('homefix-auth-storage') 
    ? JSON.parse(localStorage.getItem('homefix-auth-storage') || '{}')?.state?.token
    : null;
  
  return {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {})
  };
};

// Auth API endpoints
export const authApi = {
  login: async (email: string, password: string) => {
    // In a real app, this would be an actual API call
    console.log('Login attempt for:', email);
    
    // Simulate successful API response
    return {
      user: {
        id: '1',
        firstName: 'Jane',
        lastName: 'Doe',
        email: email,
        role: 'customer',
      },
      token: 'mock-jwt-token'
    };
  },
  
  signup: async (userData: Partial<User>, password: string) => {
    // In a real app, this would be an actual API call
    console.log('Signup attempt with data:', { ...userData, password: '****' });
    
    // Simulate successful API response
    return {
      user: {
        id: `user-${Math.floor(Math.random() * 1000)}`,
        firstName: userData.firstName || '',
        lastName: userData.lastName || '',
        email: userData.email || '',
        role: 'customer',
      },
      token: 'mock-jwt-token'
    };
  },
  
  updateProfile: async (userId: string, userData: Partial<User>) => {
    // In a real app, this would be an actual API call
    console.log('Update profile for user:', userId, 'with data:', userData);
    
    // Simulate successful API response
    return {
      ...userData,
      id: userId
    };
  },
  
  forgotPassword: async (email: string) => {
    // In a real app, this would be an actual API call
    console.log('Password reset requested for:', email);
    
    // Simulate successful API response
    return { success: true, message: 'If an account exists, a password reset link has been sent' };
  },
  
  resetPassword: async (token: string, newPassword: string) => {
    // In a real app, this would be an actual API call
    console.log('Reset password with token:', token);
    
    // Simulate successful API response
    return { success: true, message: 'Password successfully reset' };
  },
};

// Bookings API endpoints
export const bookingsApi = {
  getBookings: async (userId: string) => {
    // In a real app, this would be an actual API call
    console.log('Fetching bookings for user:', userId);
    
    // Simulate successful API response with mock data
    return [
      {
        id: 'B001',
        customerId: userId,
        providerId: 'P001',
        service: 'Plumbing',
        date: '2025-05-15',
        time: '10:00 AM',
        address: '10 Downing Street',
        postcode: 'SW1A 1AA',
        status: 'confirmed',
        price: 85,
        createdAt: '2025-05-01T10:30:00Z',
      },
      {
        id: 'B002',
        customerId: userId,
        providerId: 'P002',
        service: 'Electrical',
        date: '2025-05-05',
        time: '02:30 PM',
        address: '15 Baker Street',
        postcode: 'NW1 6XE',
        status: 'completed',
        price: 120,
        rating: 4,
        feedback: 'Great service, very professional',
        createdAt: '2025-04-28T14:15:00Z',
      },
      {
        id: 'B003',
        customerId: userId,
        providerId: 'P003',
        service: 'AC Repair',
        date: '2025-05-20',
        time: '09:15 AM',
        address: '22 Oxford Street',
        postcode: 'W1D 1BS',
        status: 'pending',
        price: 150,
        createdAt: '2025-05-02T09:45:00Z',
      },
    ];
  },
  
  createBooking: async (bookingData: Partial<Booking>) => {
    // In a real app, this would be an actual API call
    console.log('Creating booking with data:', bookingData);
    
    // Simulate successful API response
    return {
      id: `B${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
      ...bookingData,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
  },
  
  cancelBooking: async (bookingId: string) => {
    // In a real app, this would be an actual API call
    console.log('Cancelling booking:', bookingId);
    
    // Simulate successful API response
    return { success: true, message: 'Booking successfully cancelled' };
  },
  
  rateBooking: async (bookingId: string, rating: number, feedback?: string) => {
    // In a real app, this would be an actual API call
    console.log('Rating booking:', bookingId, 'with rating:', rating, 'and feedback:', feedback);
    
    // Simulate successful API response
    return { success: true, message: 'Rating submitted successfully' };
  },
};

// Services API endpoints
export const servicesApi = {
  getServices: async () => {
    // In a real app, this would be an actual API call
    console.log('Fetching services');
    
    // Simulate successful API response
    return [
      {
        id: 'ac',
        name: 'Air Conditioning',
        description: 'Installation, repair, and maintenance of AC units',
        icon: 'AirVent',
        basePrice: 120,
        category: 'Cooling & Heating',
      },
      {
        id: 'plumbing',
        name: 'Plumbing',
        description: 'Repairs, installations, and maintenance for all plumbing systems',
        icon: 'Droplets',
        basePrice: 85,
        category: 'Repairs',
      },
      {
        id: 'electrical',
        name: 'Electrical',
        description: 'Electrical repairs, installations, and inspections',
        icon: 'Zap',
        basePrice: 95,
        category: 'Repairs',
      },
      {
        id: 'painting',
        name: 'Painting',
        description: 'Interior and exterior painting services',
        icon: 'Paintbrush',
        basePrice: 200,
        category: 'Home Improvement',
      },
      {
        id: 'cleaning',
        name: 'Cleaning',
        description: 'Professional cleaning services for homes and offices',
        icon: 'Sparkles',
        basePrice: 70,
        category: 'Maintenance',
      },
      {
        id: 'gardening',
        name: 'Gardening',
        description: 'Lawn care, landscaping, and garden maintenance',
        icon: 'Flower',
        basePrice: 65,
        category: 'Outdoors',
      },
      {
        id: 'carpentry',
        name: 'Carpentry',
        description: 'Custom woodwork, repairs, and furniture assembly',
        icon: 'Hammer',
        basePrice: 110,
        category: 'Home Improvement',
      }
    ];
  },
  
  getServiceDetails: async (serviceId: string) => {
    // In a real app, this would be an actual API call
    console.log('Fetching details for service:', serviceId);
    
    // For demo purposes, find the service in our mock data
    const services = await servicesApi.getServices();
    const service = services.find(s => s.id === serviceId);
    
    if (!service) {
      throw new Error('Service not found');
    }
    
    // Add more detailed information for the specific service
    return {
      ...service,
      subServices: [
        {
          id: `${serviceId}-installation`,
          name: 'Installation',
          description: `Professional ${service.name} installation services`,
          price: service.basePrice * 1.2,
          duration: '2-3 hours'
        },
        {
          id: `${serviceId}-repair`,
          name: 'Repair',
          description: `Expert ${service.name} repair services`,
          price: service.basePrice,
          duration: '1-2 hours'
        },
        {
          id: `${serviceId}-maintenance`,
          name: 'Maintenance',
          description: `Regular ${service.name} maintenance services`,
          price: service.basePrice * 0.8,
          duration: '1 hour'
        }
      ],
      faqs: [
        {
          question: `How much does a typical ${service.name} service cost?`,
          answer: `Our ${service.name} services start from £${service.basePrice}. The final price depends on the complexity of the job and any materials required.`
        },
        {
          question: `How long does a ${service.name} service take?`,
          answer: `Most ${service.name} services take between 1-3 hours, depending on the specific requirements.`
        },
        {
          question: `Are your ${service.name} professionals certified?`,
          answer: `Yes, all our ${service.name} professionals are fully certified, insured, and have undergone thorough background checks.`
        }
      ]
    };
  }
};

// Providers API endpoints
export const providersApi = {
  getProviders: async (serviceId?: string) => {
    // In a real app, this would be an actual API call
    console.log('Fetching providers', serviceId ? `for service: ${serviceId}` : '');
    
    // Mock data for providers
    const providers = [
      {
        id: 'P001',
        userId: 'U001',
        name: 'John Smith',
        services: ['plumbing', 'electrical'],
        experience: '10+ years',
        rating: 4.8,
        reviewCount: 124,
        location: 'London',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
      },
      {
        id: 'P002',
        userId: 'U002',
        name: 'Sarah Johnson',
        services: ['cleaning', 'gardening'],
        experience: '5+ years',
        rating: 4.9,
        reviewCount: 87,
        location: 'Manchester',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
      },
      {
        id: 'P003',
        userId: 'U003',
        name: 'Michael Thompson',
        services: ['ac', 'electrical'],
        experience: '8+ years',
        rating: 4.7,
        reviewCount: 56,
        location: 'Birmingham',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
      },
      {
        id: 'P004',
        userId: 'U004',
        name: 'Emily Wilson',
        services: ['painting', 'carpentry'],
        experience: '7+ years',
        rating: 4.6,
        reviewCount: 42,
        location: 'Glasgow',
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
      },
      {
        id: 'P005',
        userId: 'U005',
        name: 'David Brown',
        services: ['plumbing', 'carpentry'],
        experience: '15+ years',
        rating: 4.9,
        reviewCount: 210,
        location: 'Liverpool',
        avatar: 'https://randomuser.me/api/portraits/men/5.jpg'
      }
    ];
    
    // Filter by service if specified
    return serviceId 
      ? providers.filter(p => p.services.includes(serviceId))
      : providers;
  },
  
  getProviderDetails: async (providerId: string) => {
    // In a real app, this would be an actual API call
    console.log('Fetching details for provider:', providerId);
    
    // For demo purposes, find the provider in our mock data
    const providers = await providersApi.getProviders();
    const provider = providers.find(p => p.id === providerId);
    
    if (!provider) {
      throw new Error('Provider not found');
    }
    
    // Add more detailed information
    return {
      ...provider,
      bio: `Professional ${provider.services.join(' and ')} specialist with ${provider.experience} of experience in the industry. Committed to providing high-quality service and customer satisfaction.`,
      certifications: [
        'City & Guilds Certified',
        'Professional Trade Association Member',
        'Fully Insured'
      ],
      availability: {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        hours: {
          start: '08:00',
          end: '18:00'
        }
      },
      reviews: [
        {
          id: 'R001',
          customerId: 'C001',
          customerName: 'Alex Taylor',
          rating: 5,
          date: '2025-04-20',
          comment: 'Excellent service. Very professional and completed the job quickly.'
        },
        {
          id: 'R002',
          customerId: 'C002',
          customerName: 'Jamie Williams',
          rating: 4,
          date: '2025-04-15',
          comment: 'Good work, arrived on time and was very knowledgeable.'
        },
        {
          id: 'R003',
          customerId: 'C003',
          customerName: 'Sam Robinson',
          rating: 5,
          date: '2025-04-10',
          comment: 'Fantastic job! Will definitely use again for future projects.'
        }
      ]
    };
  },
  
  becomeProvider: async (providerData: Partial<Provider>) => {
    // In a real app, this would be an actual API call
    console.log('Provider signup request with data:', providerData);
    
    // Simulate successful API response
    return {
      success: true,
      message: 'Your application has been submitted successfully and is under review.'
    };
  }
};

// Location/service area API
export const locationApi = {
  getServiceAreas: async () => {
    // In a real app, this would be an actual API call
    console.log('Fetching service areas');
    
    // Simulate successful API response
    return [
      {
        city: 'London',
        postcodes: ['E1', 'EC1', 'W1', 'SW1', 'NW1', 'SE1', 'N1']
      },
      {
        city: 'Manchester',
        postcodes: ['M1', 'M2', 'M3', 'M4', 'M5']
      },
      {
        city: 'Birmingham',
        postcodes: ['B1', 'B2', 'B3', 'B4', 'B5']
      },
      {
        city: 'Liverpool',
        postcodes: ['L1', 'L2', 'L3', 'L4', 'L5']
      },
      {
        city: 'Glasgow',
        postcodes: ['G1', 'G2', 'G3', 'G4', 'G5']
      }
    ];
  },
  
  checkPostcodeAvailability: async (postcode: string) => {
    // In a real app, this would be an actual API call
    console.log('Checking availability for postcode:', postcode);
    
    // Get the postcode prefix (the part before the space)
    const postcodePrefix = postcode.split(' ')[0];
    
    // Get the service areas
    const areas = await locationApi.getServiceAreas();
    
    // Check if the postcode prefix is in any of the service areas
    const isAvailable = areas.some(area => 
      area.postcodes.some(p => postcodePrefix.startsWith(p))
    );
    
    return { 
      available: isAvailable,
      message: isAvailable 
        ? 'Service is available in your area' 
        : 'Sorry, we don\'t currently service this area'
    };
  }
};

// Payment API (would integrate with Stripe or other payment processor)
export const paymentApi = {
  getPaymentMethods: async (userId: string) => {
    // In a real app, this would fetch payment methods from Stripe or similar
    console.log('Fetching payment methods for user:', userId);
    
    // Simulate successful API response
    return [
      {
        id: 'pm_1',
        type: 'card',
        brand: 'visa',
        last4: '4242',
        expMonth: 12,
        expYear: 2025,
        isDefault: true
      },
      {
        id: 'pm_2',
        type: 'card',
        brand: 'mastercard',
        last4: '5555',
        expMonth: 10,
        expYear: 2026,
        isDefault: false
      }
    ];
  },
  
  addPaymentMethod: async (userId: string, paymentDetails: any) => {
    // In a real app, this would create a payment method in Stripe or similar
    console.log('Adding payment method for user:', userId, 'with details:', paymentDetails);
    
    // Simulate successful API response
    return {
      id: 'pm_3',
      type: 'card',
      brand: paymentDetails.brand || 'visa',
      last4: paymentDetails.last4 || '1234',
      expMonth: paymentDetails.expMonth || 1,
      expYear: paymentDetails.expYear || 2030,
      isDefault: false
    };
  },
  
  removePaymentMethod: async (userId: string, paymentMethodId: string) => {
    // In a real app, this would remove a payment method in Stripe or similar
    console.log('Removing payment method:', paymentMethodId, 'for user:', userId);
    
    // Simulate successful API response
    return { success: true, message: 'Payment method removed successfully' };
  },
  
  setDefaultPaymentMethod: async (userId: string, paymentMethodId: string) => {
    // In a real app, this would update the default payment method in Stripe or similar
    console.log('Setting payment method', paymentMethodId, 'as default for user:', userId);
    
    // Simulate successful API response
    return { success: true, message: 'Default payment method updated successfully' };
  },
  
  processPayment: async (bookingId: string, paymentMethodId: string, amount: number) => {
    // In a real app, this would process a payment through Stripe or similar
    console.log('Processing payment for booking:', bookingId, 'with payment method:', paymentMethodId, 'for amount:', amount);
    
    // Simulate successful API response
    return {
      success: true,
      transactionId: `tx_${Math.floor(Math.random() * 1000000)}`,
      amount: amount,
      currency: 'GBP',
      status: 'success',
      date: new Date().toISOString()
    };
  }
};

// Notifications API
export const notificationsApi = {
  getNotifications: async (userId: string) => {
    // In a real app, this would be an actual API call
    console.log('Fetching notifications for user:', userId);
    
    // Simulate successful API response
    return [
      {
        id: 'n1',
        userId: userId,
        type: 'booking_confirmation',
        message: 'Your booking for Plumbing service has been confirmed.',
        relatedId: 'B001',
        createdAt: '2025-05-01T14:30:00Z',
        read: false
      },
      {
        id: 'n2',
        userId: userId,
        type: 'provider_assigned',
        message: 'John Smith has been assigned to your Electrical booking.',
        relatedId: 'B002',
        createdAt: '2025-04-28T16:45:00Z',
        read: true
      },
      {
        id: 'n3',
        userId: userId,
        type: 'booking_reminder',
        message: 'Reminder: Your AC Repair service is scheduled for tomorrow at 09:15 AM.',
        relatedId: 'B003',
        createdAt: '2025-05-19T09:00:00Z',
        read: false
      }
    ];
  },
  
  markAsRead: async (notificationId: string) => {
    // In a real app, this would be an actual API call
    console.log('Marking notification as read:', notificationId);
    
    // Simulate successful API response
    return { success: true };
  },
  
  sendTestNotification: async (type: 'email' | 'sms', destination: string, template: string) => {
    // In a real app, this would send an actual email or SMS
    console.log(`Sending test ${type} to ${destination} using template: ${template}`);
    
    // Simulate successful API response
    return { 
      success: true, 
      message: `Test ${type} sent successfully to ${destination}` 
    };
  }
};

// Reviews API
export const reviewsApi = {
  getReviews: async (type: 'provider' | 'service', id: string) => {
    // In a real app, this would be an actual API call
    console.log(`Fetching reviews for ${type}:`, id);
    
    // Simulate successful API response with mock data
    return [
      {
        id: 'R001',
        customerId: 'C001',
        customerName: 'Alex Taylor',
        rating: 5,
        date: '2025-04-20',
        comment: 'Excellent service. Very professional and completed the job quickly.'
      },
      {
        id: 'R002',
        customerId: 'C002',
        customerName: 'Jamie Williams',
        rating: 4,
        date: '2025-04-15',
        comment: 'Good work, arrived on time and was very knowledgeable.'
      },
      {
        id: 'R003',
        customerId: 'C003',
        customerName: 'Sam Robinson',
        rating: 5,
        date: '2025-04-10',
        comment: 'Fantastic job! Will definitely use again for future projects.'
      }
    ];
  },
  
  submitReview: async (bookingId: string, rating: number, comment: string) => {
    // In a real app, this would be an actual API call
    console.log('Submitting review for booking:', bookingId, 'with rating:', rating, 'and comment:', comment);
    
    // Simulate successful API response
    return {
      id: `R${Math.floor(Math.random() * 1000)}`,
      bookingId,
      rating,
      comment,
      date: new Date().toISOString(),
      status: 'published'
    };
  }
};

// Chat API (for live chat support)
export const chatApi = {
  getConversations: async (userId: string) => {
    // In a real app, this would be an actual API call
    console.log('Fetching conversations for user:', userId);
    
    // Simulate successful API response
    return [
      {
        id: 'chat1',
        participants: [userId, 'support1'],
        lastMessage: {
          id: 'msg1',
          senderId: 'support1',
          content: 'Is there anything else I can help you with?',
          timestamp: '2025-05-05T14:32:00Z'
        },
        unreadCount: 1,
        status: 'active'
      }
    ];
  },
  
  getMessages: async (conversationId: string) => {
    // In a real app, this would be an actual API call
    console.log('Fetching messages for conversation:', conversationId);
    
    // Simulate successful API response
    return [
      {
        id: 'msg1',
        conversationId,
        senderId: 'user1',
        content: 'Hello, I need help with my booking.',
        timestamp: '2025-05-05T14:30:00Z'
      },
      {
        id: 'msg2',
        conversationId,
        senderId: 'support1',
        content: 'Hi there! I\'d be happy to help. Could you please provide your booking reference?',
        timestamp: '2025-05-05T14:31:00Z'
      },
      {
        id: 'msg3',
        conversationId,
        senderId: 'user1',
        content: 'It\'s B001. I need to reschedule.',
        timestamp: '2025-05-05T14:31:30Z'
      },
      {
        id: 'msg4',
        conversationId,
        senderId: 'support1',
        content: 'Is there anything else I can help you with?',
        timestamp: '2025-05-05T14:32:00Z'
      }
    ];
  },
  
  sendMessage: async (conversationId: string, senderId: string, content: string) => {
    // In a real app, this would be an actual API call
    console.log('Sending message to conversation:', conversationId, 'from sender:', senderId, 'with content:', content);
    
    // Simulate successful API response
    return {
      id: `msg${Math.floor(Math.random() * 1000)}`,
      conversationId,
      senderId,
      content,
      timestamp: new Date().toISOString()
    };
  },
  
  startConversation: async (userId: string, initialMessage: string) => {
    // In a real app, this would be an actual API call
    console.log('Starting new conversation for user:', userId, 'with message:', initialMessage);
    
    // Simulate successful API response
    const conversationId = `chat${Math.floor(Math.random() * 1000)}`;
    
    return {
      id: conversationId,
      participants: [userId, 'support1'],
      lastMessage: {
        id: `msg${Math.floor(Math.random() * 1000)}`,
        senderId: userId,
        content: initialMessage,
        timestamp: new Date().toISOString()
      },
      unreadCount: 0,
      status: 'active'
    };
  }
};
