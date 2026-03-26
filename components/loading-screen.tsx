'use client';

import { useLoading } from '@/components/loading-provider';
import { useEffect, useState } from 'react';

/**
 * Retro loading screen that matches the Winamp / bento aesthetic.
 *
 * Lifecycle:
 *  isReady=false → screen is fully visible
 *  isReady=true  → exit animation plays (800ms), then component unmounts
 */
export const LoadingScreen = () => {
  const { isReady } = useLoading();
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  // Simulate a progress bar that fills to ~85% on its own,
  // then snaps to 100% the moment isReady flips.
  useEffect(() => {
    if (isReady) {
      setProgress(100);
      const timer = setTimeout(() => setVisible(false), 800); // match CSS transition
      return () => clearTimeout(timer);
    }

    // Organic-feeling increments that slow down near the end
    const intervals = [
      { target: 30,  delay: 120 },
      { target: 55,  delay: 180 },
      { target: 72,  delay: 250 },
      { target: 85,  delay: 400 },
    ];

    let i = 0;
    const tick = () => {
      if (i >= intervals.length) return;
      const { target, delay } = intervals[i++];
      setTimeout(() => {
        setProgress(target);
        tick();
      }, delay);
    };

    tick();
  }, [isReady]);

  if (!visible) return null;

  return (
    <div
      className={[
        'fixed inset-0 z-[9999] flex flex-col items-center justify-center',
        'bg-[#0a0a0a]',
        'transition-opacity duration-700 ease-in-out',
        isReady ? 'opacity-0 pointer-events-none' : 'opacity-100',
      ].join(' ')}
    >
      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)',
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-6 select-none">

        {/* Winamp-style logo text */}
        <div className="flex flex-col items-center gap-1">
          <span
            className="text-[10px] tracking-[0.4em] uppercase font-mono text-neutral-600"
          >
            loading
          </span>
          <span
            className="text-2xl font-mono font-bold tracking-tight text-white"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            Brandon's Portfolio
            <span className="text-neutral-500">.exe</span>
          </span>
        </div>

        {/* Progress bar — Winamp-style segmented */}
        <div className="flex flex-col items-center gap-2 w-48">
          <div className="w-full h-3 bg-neutral-900 border border-neutral-700 rounded-sm overflow-hidden">
            <div
              className="h-full bg-[#00c3ff] transition-all duration-500 ease-out"
              style={{
                width: `${progress}%`,
                boxShadow: '0 0 8px rgba(0,195,255,0.6)',
                backgroundImage:
                  'repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.25) 3px, rgba(0,0,0,0.25) 4px)',
              }}
            />
          </div>
          <span className="text-[10px] font-mono text-neutral-600 tabular-nums">
            {progress.toString().padStart(3, '0')}%
          </span>
        </div>

        {/* Status line */}
        <span className="text-[9px] font-mono text-neutral-700 tracking-widest uppercase animate-pulse">
          {progress < 40
            ? 'INITIALIZING COMPONENTS...'
            : progress < 75
            ? 'LOADING ASSETS...'
            : progress < 100
            ? 'ALMOST READY...'
            : 'LAUNCHING'}
        </span>
      </div>
    </div>
  );
};
