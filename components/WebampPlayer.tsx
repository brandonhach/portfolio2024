'use client';

import { TRACK_GIFS, tracks } from '@/config/site-config';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { toast } from 'sonner';

interface WebampPlayerProps {
  /** Height of the container. Defaults to 420px on xl, 340px on lg, auto otherwise */
  className?: string;
}

const BREAKPOINT_HEIGHTS: Record<string, number> = {
  xl: 420,
  lg: 340,
};

const WebampPlayer = ({ className = '' }: WebampPlayerProps) => {
  const currentToastId = useRef<string | number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const webampRef = useRef<any>(null);

  useEffect(() => {
    // Never mount on small screens
    //if (window.innerWidth < 640) return;

    let disposed = false;

    const initWebamp = async () => {
      const Webamp = (await import('webamp')).default;

      if (disposed) return;

      const instance = new Webamp({
        initialTracks: tracks,
        __initialWindowLayout: {
          main:      { position: { x: 0, y: 0   } },
          equalizer: { position: { x: 0, y: 116 } },
          playlist:  { position: { x: 0, y: 232 } },
        },
      } as any);

      webampRef.current = instance;

      instance.onTrackDidChange((track: any) => {
        if (!track) return;

        const title = track.metaData?.title;
        const gif   = TRACK_GIFS[title];

        if (gif) {
          if (currentToastId.current) {
            toast.dismiss(currentToastId.current);
          }
          currentToastId.current = toast.custom(
            () => (
              <div className="w-[20rem] h-48 flex flex-col items-center bg-black border border-neutral-700 rounded-2xl shadow-xl overflow-hidden animate-fadeInOut z-50">
                <Image
                  fill
                  src={gif}
                  alt={title}
                  className="object-cover rounded-2xl"
                />
              </div>
            ),
            { duration: 12000, position: 'bottom-right' },
          );
        }
      });

      const container = document.getElementById('webamp-root');
      if (!container || disposed) return;

      await instance.renderWhenReady(container);

      if (disposed) {
        instance.dispose();
        return;
      }

      // Inject scoped overrides
      const style = document.createElement('style');
      style.id    = 'webamp-styles';
      style.textContent = `
        #webamp #eject                { display: none !important; }
        #webamp .playlist-add-button  { display: none !important; }
        #webamp li.add                { display: none !important; }
        #webamp { position: absolute !important; top: 0 !important; left: 0 !important; }
        
        /* Disable title-bar dragging */
        #webamp .title-bar           { cursor: default !important; pointer-events: none !important; }
        /* But keep buttons inside title bars clickable */
        #webamp .title-bar button,
        #webamp .title-bar .button   { pointer-events: auto !important; }

        /* Never allow text selection inside Webamp itself */
        #webamp * {
          user-select: none !important;
          -webkit-user-select: none !important;
        }

        /* While dragging, suppress selection on the entire page */
        body.webamp-dragging,
        body.webamp-dragging * {
          user-select: none !important;
          -webkit-user-select: none !important;
        }
        
      `;
      document.head.appendChild(style);

      // Prevent accidental drag-out of the container
      document.querySelectorAll('#webamp .title-bar').forEach((el) => {
        el.addEventListener(
          'mousedown',
          (e) => {
            if ((e.target as HTMLElement).closest('button')) return;
            e.stopPropagation();
            e.preventDefault();
          },
          true,
        );
      });
    };

    initWebamp();

    return () => {
      disposed = true;
      if (currentToastId.current) toast.dismiss(currentToastId.current);
      webampRef.current?.dispose?.();
      webampRef.current = null;
      document.getElementById('webamp-styles')?.remove();
    };
  }, []);

  return (
    /**
     * Responsive height strategy:
     *  - xl  (≥1280px) : 420px — full 3-panel view (main + EQ + playlist)
     *  - lg  (≥1024px) : 340px — main + EQ only
     *  - below lg      : hidden entirely (Webamp is not mobile-friendly)
     *
     * The outer div is `relative` so Webamp's `position:absolute` child
     * stays clipped inside the column.
     */
    <div
      ref={containerRef}
      id="webamp-root"
      className={[
        'relative w-full',
        'h-[340px] xl:h-[420px]',   // responsive heights
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    />
  );
};

export default WebampPlayer;
