"use client";

import React, { createContext, useContext, useState } from 'react';

// Create a context for tracking redirection state
const RedirectContext = createContext({
  isRedirecting: false,
  setIsRedirecting: () => {},
});

// Provider component that wraps the app
export function RedirectProvider({ children }) {
  const [isRedirecting, setIsRedirecting] = useState(false);

  return (
    <RedirectContext.Provider value={{ isRedirecting, setIsRedirecting }}>
      {children}
    </RedirectContext.Provider>
  );
}

// Custom hook to use the redirect context
export function useRedirect() {
  return useContext(RedirectContext);
}
