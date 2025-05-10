import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useAuthStore, useBookingStore, useServiceStore, useLocationStore } from './store';

// Type for the AppContext
type AppContextType = {
  isInitialized: boolean;
  isLoading: {
    auth: boolean;
    services: boolean;
    bookings: boolean;
    locations: boolean;
  };
  errors: {
    auth?: string | null;
    services?: string | null;
    bookings?: string | null;
    locations?: string | null;
  };
};

// Create context with default values
const AppContext = createContext<AppContextType>({
  isInitialized: false,
  isLoading: {
    auth: false,
    services: false,
    bookings: false,
    locations: false,
  },
  errors: {}
});

// Create a provider component
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Access the different stores
  const { isAuthenticated, user } = useAuthStore();
  const { 
    services, 
    loading: servicesLoading, 
    error: servicesError,
    fetchServices 
  } = useServiceStore();
  
  const { 
    bookings, 
    loading: bookingsLoading, 
    error: bookingsError,
    fetchUserBookings 
  } = useBookingStore();
  
  const { 
    availableLocations,
    loading: locationsLoading,
    error: locationsError,
    fetchLocations
  } = useLocationStore();

  // Initialize app data
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Fetch services regardless of authentication status
        if (services.length === 0) {
          await fetchServices();
        }
        
        // Fetch locations data
        if (availableLocations.length === 0) {
          await fetchLocations();
        }
        
        // Fetch user-specific data if authenticated
        if (isAuthenticated && user) {
          // Load bookings data if user is authenticated
          await fetchUserBookings();
        }
        
        setIsInitialized(true);
      } catch (error) {
        console.error("Failed to initialize app:", error);
      }
    };
    
    initializeApp();
  }, [
    isAuthenticated, 
    user, 
    services.length, 
    availableLocations.length,
    fetchServices,
    fetchLocations,
    fetchUserBookings
  ]);

  // Context value
  const contextValue: AppContextType = {
    isInitialized,
    isLoading: {
      auth: false, // Auth loading is managed directly in useAuthStore
      services: servicesLoading,
      bookings: bookingsLoading,
      locations: locationsLoading,
    },
    errors: {
      services: servicesError,
      bookings: bookingsError,
      locations: locationsError,
    }
  };
  
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useApp = () => useContext(AppContext);
