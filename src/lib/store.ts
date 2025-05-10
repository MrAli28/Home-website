import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  postcode?: string;
  role: 'customer' | 'provider' | 'admin';
};

export type Booking = {
  id: string;
  customerId: string;
  providerId?: string;
  service: string;
  date: string;
  time: string;
  address: string;
  postcode: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  price?: number;
  notes?: string;
  createdAt: string;
  rating?: number;
  feedback?: string;
};

export type Provider = {
  id: string;
  userId: string;
  serviceTypes: string[];
  experience: string;
  bio: string;
  availability: {
    days: string[];
    hours: {
      start: string;
      end: string;
    }
  }[];
  rating?: number;
  totalJobs?: number;
};

type AuthStore = {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
  login: (email: string, password: string) => Promise<User>;
  signup: (userData: Partial<User>, password: string) => Promise<User>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => Promise<User>;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      token: null,
      login: async (email: string, password: string) => {
        // This would be replaced with actual API call
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Mock user for demo
          const mockUser: User = {
            id: '1',
            firstName: 'Jane',
            lastName: 'Doe',
            email: email,
            role: 'customer',
          };
          
          const mockToken = 'mock-jwt-token';
          
          set({ 
            user: mockUser, 
            isAuthenticated: true,
            token: mockToken
          });
          
          return mockUser;
        } catch (error) {
          console.error('Login failed:', error);
          throw new Error('Invalid credentials');
        }
      },
      signup: async (userData: Partial<User>, password: string) => {
        // This would be replaced with actual API call
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Mock user creation
          const mockUser: User = {
            id: '1',
            firstName: userData.firstName || '',
            lastName: userData.lastName || '',
            email: userData.email || '',
            role: 'customer',
          };
          
          const mockToken = 'mock-jwt-token';
          
          set({ 
            user: mockUser, 
            isAuthenticated: true,
            token: mockToken
          });
          
          return mockUser;
        } catch (error) {
          console.error('Signup failed:', error);
          throw new Error('Could not create account');
        }
      },
      logout: () => {
        set({ 
          user: null, 
          isAuthenticated: false,
          token: null
        });
      },
      updateProfile: async (userData: Partial<User>) => {
        // This would be replaced with actual API call
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          set((state) => ({
            user: state.user ? { ...state.user, ...userData } : null
          }));
          
          return userData as User;
        } catch (error) {
          console.error('Profile update failed:', error);
          throw new Error('Could not update profile');
        }
      },
    }),
    {
      name: 'homefix-auth-storage',
      // Only persist these values
      partialize: (state) => ({ 
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        token: state.token
      }),
    }
  )
);

type BookingStore = {
  bookings: Booking[];
  loading: boolean;
  error: string | null;
  fetchUserBookings: () => Promise<Booking[]>;
  createBooking: (bookingData: Partial<Booking>) => Promise<Booking>;
  cancelBooking: (bookingId: string) => Promise<boolean>;
  rateBooking: (bookingId: string, rating: number, feedback?: string) => Promise<Booking>;
};

export const useBookingStore = create<BookingStore>((set, get) => ({
  bookings: [],
  loading: false,
  error: null,
  fetchUserBookings: async () => {
    try {
      set({ loading: true, error: null });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock bookings data
      const mockBookings: Booking[] = [
        {
          id: 'B001',
          customerId: '1',
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
          customerId: '1',
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
          customerId: '1',
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
      
      set({ bookings: mockBookings, loading: false });
      return mockBookings;
    } catch (error) {
      set({ error: 'Failed to fetch bookings', loading: false });
      throw error;
    }
  },
  createBooking: async (bookingData: Partial<Booking>) => {
    try {
      set({ loading: true, error: null });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate booking with mock data
      const newBooking: Booking = {
        id: `B${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
        customerId: useAuthStore.getState().user?.id || '1',
        service: bookingData.service || '',
        date: bookingData.date || '',
        time: bookingData.time || '',
        address: bookingData.address || '',
        postcode: bookingData.postcode || '',
        status: 'pending',
        createdAt: new Date().toISOString(),
      };
      
      set((state) => ({
        bookings: [...state.bookings, newBooking],
        loading: false
      }));
      
      return newBooking;
    } catch (error) {
      set({ error: 'Failed to create booking', loading: false });
      throw error;
    }
  },
  cancelBooking: async (bookingId: string) => {
    try {
      set({ loading: true, error: null });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      set((state) => ({
        bookings: state.bookings.map(booking => 
          booking.id === bookingId 
            ? { ...booking, status: 'cancelled' } 
            : booking
        ),
        loading: false
      }));
      
      return true;
    } catch (error) {
      set({ error: 'Failed to cancel booking', loading: false });
      throw error;
    }
  },
  rateBooking: async (bookingId: string, rating: number, feedback?: string) => {
    try {
      set({ loading: true, error: null });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      let updatedBooking: Booking | undefined;
      
      set((state) => {
        const updatedBookings = state.bookings.map(booking => {
          if (booking.id === bookingId) {
            updatedBooking = { 
              ...booking, 
              rating, 
              feedback 
            };
            return updatedBooking;
          }
          return booking;
        });
        
        return { 
          bookings: updatedBookings,
          loading: false
        };
      });
      
      if (!updatedBooking) {
        throw new Error('Booking not found');
      }
      
      return updatedBooking;
    } catch (error) {
      set({ error: 'Failed to rate booking', loading: false });
      throw error;
    }
  }
}));

type ServiceStore = {
  services: {
    id: string;
    name: string;
    description: string;
    icon: string;
    basePrice: number;
    category: string;
  }[];
  loading: boolean;
  error: string | null;
  fetchServices: () => Promise<void>;
  getServiceById: (id: string) => any;
};

export const useServiceStore = create<ServiceStore>((set, get) => ({
  services: [],
  loading: false,
  error: null,
  fetchServices: async () => {
    try {
      set({ loading: true, error: null });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Mock services data
      const mockServices = [
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
      
      set({ services: mockServices, loading: false });
    } catch (error) {
      set({ error: 'Failed to fetch services', loading: false });
      throw error;
    }
  },
  getServiceById: (id: string) => {
    return get().services.find(service => service.id === id);
  },
}));

// Location store for managing service areas
type LocationStore = {
  availableLocations: {
    city: string;
    postcodes: string[];
  }[];
  selectedLocation: string | null;
  loading: boolean;
  error: string | null;
  fetchLocations: () => Promise<void>;
  setSelectedLocation: (location: string) => void;
  checkPostcodeAvailability: (postcode: string) => boolean;
};

export const useLocationStore = create<LocationStore>((set, get) => ({
  availableLocations: [],
  selectedLocation: null,
  loading: false,
  error: null,
  fetchLocations: async () => {
    try {
      set({ loading: true, error: null });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 600));
      
      // Mock location data
      const mockLocations = [
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
      
      set({ availableLocations: mockLocations, loading: false });
    } catch (error) {
      set({ error: 'Failed to fetch locations', loading: false });
      throw error;
    }
  },
  setSelectedLocation: (location: string) => {
    set({ selectedLocation: location });
  },
  checkPostcodeAvailability: (postcode: string) => {
    const postcodePrefix = postcode.split(' ')[0];
    return get().availableLocations.some(location => 
      location.postcodes.some(p => postcodePrefix.startsWith(p))
    );
  }
}));
