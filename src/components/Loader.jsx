import { useEffect, useRef, useState } from 'react';
import './style/Loader.css';

/**
 * Loading element: a glowing symbol + progress. Not interactive.
 * Pure CSS/SVG (no WebGL, no `ogl`) so it stays smooth on phones.
 *
 * <GlowLoader onDone={() => setReady(true)} />
 *
 * Props
 *  - src        symbol image (png/svg, transparent bg, SAME-ORIGIN or data: URI).
 *               Default = lightning bolt
 *  - duration   ms for the fake progress to reach 100%     (default 4200)
 *  - progress   0-100 -> follow your own loading value instead of the timer
 *  - color      bright core colour   (default #ecc7ff)
 *  - glowColor  glow colour          (default #9e09eb)
 *  - onDone     called after the fade-out has finished
 */
const BOLT = './logo.png'

const STATUS = [
  'INITIALIZING CORE',
  'CHARGING CAPACITORS',
  'SYNCING NEURAL LINK',
  'COMPILING SHADERS',
  'ALL SYSTEMS ONLINE',
];

export default function Loader({
  src = BOLT,
  duration = 4200,
  progress,
  color = '#ecc7ff',
  glowColor = '#9e09eb',
  onDone,
}) {
  const rootRef = useRef(null);
  const numRef = useRef(null);
  const barRef = useRef(null);
  const statusRef = useRef(null);
  const shown = useRef(-1);
  const finished = useRef(false);
  const timers = useRef([]);
  const onDoneRef = useRef(onDone);
  const [done, setDone] = useState(false);
  const controlled = typeof progress === 'number';

  useEffect(() => { onDoneRef.current = onDone; });

  /* Updates the DOM directly -> React does NOT re-render 60x per second */
  const paint = p => {
    if (barRef.current) barRef.current.style.transform = `scaleX(${p / 100})`;
    const pct = Math.round(p);
    if (pct !== shown.current) {
      shown.current = pct;
      if (numRef.current) numRef.current.textContent = String(pct).padStart(3, '0');
      if (statusRef.current) {
        statusRef.current.textContent = STATUS[Math.min(STATUS.length - 1, Math.floor((p / 100) * STATUS.length))];
      }
      rootRef.current?.setAttribute('aria-valuenow', String(pct));
    }
    if (p >= 100 && !finished.current) {
      finished.current = true;
      timers.current.push(setTimeout(() => setDone(true), 500));
      timers.current.push(setTimeout(() => onDoneRef.current && onDoneRef.current(), 1300));
    }
  };

  /* timer-driven progress */
  useEffect(() => {
    if (controlled) return undefined;
    let raf;
    let start;
    const tick = now => {
      if (start === undefined) start = now;
      const t = Math.min(1, (now - start) / duration);
      paint(100 * (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [duration, controlled]); // eslint-disable-line

  /* app-driven progress */
  useEffect(() => {
    if (controlled) paint(Math.max(0, Math.min(100, progress)));
  }, [progress, controlled]); // eslint-disable-line

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  return (
    <div
      ref={rootRef}
      className={`gloader ${done ? 'is-done' : ''}`}
      role="progressbar"
      aria-label="Loading"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={0}
      style={{ '--core': color, '--glow': glowColor, '--logo': `url("${src}")` }}
    >
      <div className="gloader__symbol" aria-hidden="true">
        <i className="gloader__halo" />
        <i className="gloader__layer gloader__bloom" />
        <i className="gloader__layer gloader__edge" />
        <i className="gloader__layer gloader__core" />
      </div>

      <div className="gloader__hud">
        <div className="gloader__num">
        </div>
        <div className="gloader__bar"><span ref={barRef} /></div>
        <div ref={statusRef} className="gloader__status">{STATUS[0]}</div>
      </div>
    </div>
  );
}
