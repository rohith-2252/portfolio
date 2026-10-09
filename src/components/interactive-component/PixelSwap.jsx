'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import './PixelSwap.css';

export default function PixelSwap({
  firstContent,
  secondContent,
  active = false,
  onComplete,
  className = '',
  style,
}) {
  const [shown, setShown] = useState(active ? 1 : 0);
  const [transitioning, setTransitioning] = useState(false);
  const [phase, setPhase] = useState('idle'); // 'idle' | 'enter' | 'exit'
  const isTransitioningRef = useRef(false);

  // Number of columns and rows for a crisp, modern pixel grid
  const COLS = 14;
  const ROWS = 9;

  // Pre-calculate tiles with concentric distance from center for ripple wave
  const tiles = useMemo(() => {
    const list = [];
    const maxDist = Math.hypot(0.5, 0.5);
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const nx = c / (COLS - 1) - 0.5;
        const ny = r / (ROWS - 1) - 0.5;
        const dist = Math.hypot(nx, ny) / maxDist;
        list.push({
          id: `${r}-${c}`,
          r,
          c,
          dist,
          // Staggered concentric delay from center outward + subtle digital jitter
          delay: Math.round(dist * 180 + ((r * 7 + c * 13) % 5) * 6),
        });
      }
    }
    return list;
  }, [COLS, ROWS]);

  useEffect(() => {
    const target = active ? 1 : 0;
    if (target === shown || isTransitioningRef.current) return;

    isTransitioningRef.current = true;
    setTransitioning(true);
    setPhase('enter');

    // Phase 1: Pixels expand outward from center, veiling the screen in ~300ms
    const midTimer = setTimeout(() => {
      setShown(target); // Seamlessly swap the underlying view while fully veiled
      setPhase('exit'); // Pixels dissolve outward to unveil the new view
    }, 320);

    // Phase 2: Pixels disperse, revealing new view in ~280ms
    const endTimer = setTimeout(() => {
      setTransitioning(false);
      setPhase('idle');
      isTransitioningRef.current = false;
      onComplete?.(active);
    }, 620);

    return () => {
      clearTimeout(midTimer);
      clearTimeout(endTimer);
      isTransitioningRef.current = false;
    };
  }, [active, shown, onComplete]);

  return (
    <div className={`pixel-swap ${className}`.trim()} style={style}>
      {/* Underlying Layers: Never cloned! Rendered exactly once with 60 FPS performance */}
      <div
        className="pixel-swap__layer"
        style={{
          zIndex: shown === 0 ? 2 : 1,
          opacity: shown === 0 ? 1 : 0,
          pointerEvents: shown === 0 ? 'auto' : 'none',
        }}
        aria-hidden={shown !== 0}
      >
        {firstContent}
      </div>

      <div
        className="pixel-swap__layer"
        style={{
          zIndex: shown === 1 ? 2 : 1,
          opacity: shown === 1 ? 1 : 0,
          pointerEvents: shown === 1 ? 'auto' : 'none',
        }}
        aria-hidden={shown !== 1}
      >
        {secondContent}
      </div>

      {/* High-Performance GPU Pixel Wave Overlay */}
      {transitioning && (
        <div className="pixel-grid-overlay" aria-hidden="true">
          {tiles.map((tile) => (
            <div
              key={tile.id}
              className={`pixel-tile ${phase === 'enter' ? 'pixel-tile--enter' : 'pixel-tile--exit'}`}
              style={{
                left: `${(tile.c / COLS) * 100}%`,
                top: `${(tile.r / ROWS) * 100}%`,
                width: `calc(${100 / COLS}% + 1px)`,
                height: `calc(${100 / ROWS}% + 1px)`,
                animationDelay: `${tile.delay}ms`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
