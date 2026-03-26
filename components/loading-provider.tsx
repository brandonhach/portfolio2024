'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface LoadingContextValue {
  isReady: boolean;
}

const LoadingContext = createContext<LoadingContextValue>({ isReady: false });

export const useLoading = () => useContext(LoadingContext);

/**
 * Waits for:
 *  1. document.readyState === 'complete'  (all resources: images, scripts, fonts)
 *  2. A minimum display time so the screen never just flashes
 *
 * Then flips `isReady` to true, which triggers the exit animation in LoadingScreen.
 */
export const LoadingProvider = ({
  children,
  minDuration = 1800, // ms — feel free to tune
}: {
  children: ReactNode;
  minDuration?: number;
}) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const start = Date.now();

    const markReady = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, minDuration - elapsed);
      setTimeout(() => setIsReady(true), remaining);
    };

    if (document.readyState === 'complete') {
      markReady();
    } else {
      window.addEventListener('load', markReady, { once: true });
      return () => window.removeEventListener('load', markReady);
    }
  }, [minDuration]);

  return (
    <LoadingContext.Provider value={{ isReady }}>
      {children}
    </LoadingContext.Provider>
  );
};
