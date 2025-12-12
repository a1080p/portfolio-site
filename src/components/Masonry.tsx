'use client';

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

import './Masonry.css';

const useMedia = (queries: string[], values: number[], defaultValue: number) => {
  const get = () => {
    if (typeof window === 'undefined') return defaultValue;
    return values[queries.findIndex(q => matchMedia(q).matches)] ?? defaultValue;
  };

  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    // Set initial value
    setValue(get());

    const handler = () => setValue(get());
    queries.forEach(q => matchMedia(q).addEventListener('change', handler));
    return () => queries.forEach(q => matchMedia(q).removeEventListener('change', handler));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries]);

  return value;
};

const useMeasure = (): [React.RefObject<HTMLDivElement>, { width: number; height: number }] => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size];
};

const loadImageDimensions = (src: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.onerror = () => {
      resolve({ width: 400, height: 400 }); // fallback
    };
  });
};

interface MasonryItem {
  id: string;
  img: string;
  url: string;
  height: number;
}

interface GridItem extends MasonryItem {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface MasonryProps {
  items: MasonryItem[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'random';
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
  onFullscreenChange?: (isFullscreen: boolean) => void;
}

const Masonry = ({
  items,
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.05,
  animateFrom = 'bottom',
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
  onFullscreenChange
}: MasonryProps) => {
  const columns = useMedia(
    ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
    [4, 3, 2, 1],
    1
  );

  const [containerRef, { width }] = useMeasure();
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [imageDimensions, setImageDimensions] = useState<Map<string, { width: number; height: number }>>(new Map());
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const imageRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    onFullscreenChange?.(fullscreenImage !== null);
  }, [fullscreenImage, onFullscreenChange]);

  const getInitialPosition = (item: GridItem) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;

    if (animateFrom === 'random') {
      const directions = ['top', 'bottom', 'left', 'right'] as const;
      direction = directions[Math.floor(Math.random() * directions.length)];
    }

    switch (direction) {
      case 'top':
        return { x: item.x, y: -200 };
      case 'bottom':
        return { x: item.x, y: window.innerHeight + 200 };
      case 'left':
        return { x: -200, y: item.y };
      case 'right':
        return { x: window.innerWidth + 200, y: item.y };
      case 'center':
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  };

  const grid = useMemo(() => {
    if (!width) return { items: [], height: 0 };

    const colHeights = new Array(columns).fill(0);
    const columnWidth = width / columns;
    const gap = 4; // Small gap between items

    const gridItems = items.map(child => {
      const dims = imageDimensions.get(child.img);
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = columnWidth * col;

      // Calculate height based on actual image aspect ratio or use estimated height
      let height = columnWidth;
      if (dims) {
        const aspectRatio = dims.height / dims.width;
        height = columnWidth * aspectRatio;
      } else {
        // Use estimated aspect ratio from item height property
        height = columnWidth * 1.2; // Default aspect ratio while loading
      }

      const y = colHeights[col];
      colHeights[col] += height + gap;

      return { ...child, x, y, w: columnWidth, h: height };
    });

    const maxHeight = Math.max(...colHeights);
    return { items: gridItems, height: maxHeight };
  }, [columns, items, width, imageDimensions]);

  const hasMounted = useRef(false);

  // Lazy load images as they come into view
  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target.getAttribute('data-src');
              if (img) {
                // Load the image dimensions and mark as loaded
                loadImageDimensions(img).then((dims) => {
                  setImageDimensions((prevDims) => {
                    const newMap = new Map(prevDims);
                    newMap.set(img, dims);
                    return newMap;
                  });
                  setLoadedImages((prev) => {
                    const newSet = new Set(prev);
                    newSet.add(img);
                    return newSet;
                  });
                });
              }
            }
          });
        },
        {
          rootMargin: '400px', // Start loading 400px before item enters viewport
          threshold: 0.01
        }
      );
    }

    // Observe all current refs
    const currentObserver = observerRef.current;
    imageRefs.current.forEach((ref) => {
      if (ref && currentObserver) {
        currentObserver.observe(ref);
      }
    });

    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [grid.items]);

  useLayoutEffect(() => {
    grid.items.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animationProps = {
        x: item.x,
        y: item.y,
        width: item.w,
        height: item.h
      };

      if (!hasMounted.current) {
        const initialPos = getInitialPosition(item);
        const initialState = {
          opacity: 0,
          x: initialPos.x,
          y: initialPos.y,
          width: item.w,
          height: item.h,
          ...(blurToFocus && { filter: 'blur(10px)' })
        };

        gsap.fromTo(selector, initialState, {
          opacity: 1,
          ...animationProps,
          ...(blurToFocus && { filter: 'blur(0px)' }),
          duration: 0.8,
          ease: 'power3.out',
          delay: index * stagger
        });
      } else {
        gsap.to(selector, {
          ...animationProps,
          duration: duration,
          ease: ease,
          overwrite: 'auto'
        });
      }
    });

    hasMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grid, stagger, animateFrom, blurToFocus, duration, ease]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, item: GridItem) => {
    const element = e.currentTarget;
    const selector = `[data-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: hoverScale,
        duration: 0.3,
        ease: 'power2.out'
      });
    }

    if (colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay');
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0.3,
          duration: 0.3
        });
      }
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>, item: GridItem) => {
    const element = e.currentTarget;
    const selector = `[data-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }

    if (colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay');
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3
        });
      }
    }
  };

  return (
    <>
      <div ref={containerRef} className="list" style={{ height: grid.height || 'auto' }}>
        {grid.items.map(item => {
          const isLoaded = loadedImages.has(item.img);
          return (
            <div
              key={item.id}
              data-key={item.id}
              data-src={item.img}
              className="item-wrapper"
              ref={(el) => {
                if (el) imageRefs.current.set(item.id, el);
              }}
              onClick={() => setFullscreenImage(item.img)}
              onMouseEnter={e => handleMouseEnter(e, item)}
              onMouseLeave={e => handleMouseLeave(e, item)}
            >
              <div className="item-img">
                {isLoaded ? (
                  <img
                    src={item.img}
                    alt={`Gallery item ${item.id}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '4px'
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        border: '3px solid rgba(200,255,150,0.3)',
                        borderTop: '3px solid rgba(200,255,150,0.8)',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }}
                    />
                  </div>
                )}
                {colorShiftOnHover && (
                  <div
                    className="color-overlay"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(45deg, rgba(255,0,150,0.5), rgba(0,150,255,0.5))',
                      opacity: 0,
                      pointerEvents: 'none',
                      borderRadius: '8px'
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setFullscreenImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 transition-colors z-[10000]"
            onClick={() => setFullscreenImage(null)}
          >
            ×
          </button>
          <img
            src={fullscreenImage}
            alt="Fullscreen view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Masonry;
