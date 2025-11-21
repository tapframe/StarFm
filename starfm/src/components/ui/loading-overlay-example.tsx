/**
 * LoadingOverlay - Usage Examples
 *
 * This file demonstrates how to use the LoadingOverlay component
 * in various scenarios throughout your application.
 */

/* eslint-disable react-refresh/only-export-components */

import { useState, useEffect } from 'react';
import { LoadingOverlay } from './loading-overlay';

// Example 1: Simple loading state
export function Example1_SimpleLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <div>
      <LoadingOverlay isLoading={isLoading} />
      <h1>Your Content Here</h1>
    </div>
  );
}

// Example 2: Loading with message
export function Example2_LoadingWithMessage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <div>
      <LoadingOverlay 
        isLoading={isLoading} 
        message="Loading your data..." 
      />
      <h1>Your Content Here</h1>
    </div>
  );
}

// Example 3: API call loading
export function Example3_APICallLoading() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // Replace with your actual API call
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <LoadingOverlay 
        isLoading={isLoading} 
        message="Fetching latest updates..." 
      />
      <button onClick={fetchData}>Fetch Data</button>
      {data && <div>Data: {JSON.stringify(data)}</div>}
    </div>
  );
}

// Example 4: Route transition loading
export function Example4_RouteTransition() {
  const [isLoading, setIsLoading] = useState(false);

  // Use this with your router
  const handleNavigation = () => {
    setIsLoading(true);
    // Simulate route change
    setTimeout(() => {
      // Navigate to new route
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div>
      <LoadingOverlay 
        isLoading={isLoading} 
        message="Navigating..." 
      />
      <button onClick={handleNavigation}>Go to Dashboard</button>
    </div>
  );
}

// Example 5: Global loading context (recommended for app-wide loading)
import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  loadingMessage?: string;
  setLoadingMessage: (message?: string) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState<string>();

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
    if (!loading) {
      setLoadingMessage(undefined);
    }
  };

  return (
    <LoadingContext.Provider
      value={{ isLoading, setLoading, loadingMessage, setLoadingMessage }}
    >
      <LoadingOverlay isLoading={isLoading} message={loadingMessage} />
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider');
  }
  return context;
}

// Usage of the context:
// 
// 1. Wrap your app with LoadingProvider in main.tsx:
//    <LoadingProvider>
//      <App />
//    </LoadingProvider>
//
// 2. Use the hook anywhere in your app:
//    const { setLoading, setLoadingMessage } = useLoading();
//    
//    const handleAction = async () => {
//      setLoading(true);
//      setLoadingMessage('Processing...');
//      await someAsyncOperation();
//      setLoading(false);
//    };

