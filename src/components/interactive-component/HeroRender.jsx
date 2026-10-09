import { useEffect, useRef } from "react";
import person from "../../assets/rohith.png";
import "./HeroRender.css";

const PROJECT_CARDS = [
  { id: 1, title: "", tag: "", src: "/render/14.png", dark: true },
  { id: 2, title: "AI Fluency", tag: "Digital", src: "/render/1.png", dark: false },
  { id: 3, title: "Face Attendance", tag: "Product", src: "/render/2.png", dark: true },
  { id: 4, title: "Bonafide Studio", tag: "Brand System", src: "/render/3.png", dark: false },
  { id: 5, title: "Career Guidance", tag: "Web App", src: "/render/4.png", dark: true },
  { id: 6, title: "Chatbot Studio", tag: "AI Experience", src: "/render/5.png", dark: false },
  { id: 7, title: "Everest Spatial", tag: "Creative", src: "/render/6.png", dark: true },
  { id: 8, title: "Neural Space", tag: "Interface", src: "/render/7.png", dark: false },
  { id: 9, title: "Vision Tech", tag: "System", src: "/render/8.png", dark: true },
  { id: 10, title: "Aurel Vance", tag: "Editorial", src: "/render/9.png", dark: false },
  { id: 11, title: "Guidance UX", tag: "Platform", src: "/render/10.png", dark: true },
  { id: 12, title: "Cognitive AI", tag: "Interface", src: "/render/11.png", dark: false },
  { id: 13, title: "Design Systems", tag: "Branding", src: "/render/12.png", dark: true },
  { id: 14, title: "Identity Lab", tag: "Selected", src: "/render/13.png", dark: false },
];

const Ticker = () => (
  <>
    {[0, 1, 2, 3].map((k) => (
      <span key={k} style={{ display: "contents" }}>
        <span>{k % 2 ? "Creative Director" : "Turning complexity into clarity"}</span>
        <b>▪ ▪</b>
      </span>
    ))}
  </>
);

export default function Hero({ onBack }) {
  const root = useRef(null);
  const cards = useRef([]);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    let W = 1, H = 1, portrait = false, raf = 0;
    const t0 = performance.now();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const N = PROJECT_CARDS.length;

    const measure = () => {
      W = el.clientWidth || 1;
      H = el.clientHeight || 1;
      portrait = W < H;
      el.dataset.layout = portrait ? "portrait" : "landscape";
      const cw = portrait
  ? W * 0.20
  : Math.min(W * 0.075, H * 0.13);
      cards.current.forEach((c) => {
        if (!c) return;
        c.style.width = cw + "px";
        c.style.height = cw * 1.25 + "px";
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);

    const loop = (now) => {
      // Pause RAF if page is transitioning to prevent frame drops
      if (el.closest('.pixel-swap')?.dataset?.transitioning === 'true') {
        raf = requestAnimationFrame(loop);
        return;
      }

      // Smooth orbit speed: 1 full rotation every ~28s
      const speed = reduce ? 0 : ((now - t0) / 1000) * ((Math.PI * 2) / 28);

      // Model center (Rohith is aligned right in landscape, centered in portrait)
      const cx = portrait ? W * 0.50 : W * 0.77;
      const cy = portrait ? H * 0.70 : H * 0.58;

      // Orbit radii: wide ellipse around the model
      const rx = portrait ? W * 0.40 : W * 0.26;
      const ry = portrait ? H * 0.11 : H * 0.13;
      // Sloped diagonal band wrapping across the model's torso
      const slope = portrait ? H * 0.05 : H * 0.08;

      cards.current.forEach((c, i) => {
        if (!c) return;
        const angle = (i / N) * Math.PI * 2 + speed;
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle); // +1 = front of model (chest), -1 = behind model

        // 3D elliptical trajectory around model
        const x = cx + cosA * rx;
        const y = cy + sinA * ry - cosA * slope;
        const z = sinA * 260; // depth in 3D space

        // 3D orientation: cards tangent along cylindrical ring
        const rotY = -cosA * 65; // yaw facing tangent to ribbon
        const rotZ = -cosA * 15 + sinA * 2; // banking along the ribbon tilt
        const rotX = 10 - sinA * 12; // tilt towards camera

        // Depth effects: front cards are larger, crisp; back cards shrink into distance
        const depth = sinA; // [-1, 1]
        const scale = depth > 0
  ? 0.72 + depth * 0.16
  : 0.55 + (depth + 1) * 0.18;
        const opacity = depth > 0 ? 0.88 + depth * 0.12 : 0.35 + (depth + 1) * 0.45;

        // Occlusion layering relative to model (.hero__person is at z-index 5):
        // Front cards (depth > 0) are in front of model (z-index: 10..18)
        // Back cards (depth <= 0) pass BEHIND the model (z-index: 1..4)
        const zIdx = depth > 0 ? 10 + Math.round(depth * 8) : 1 + Math.round((depth + 1) * 3);

        c.style.opacity = Math.min(1, Math.max(0.2, opacity));
        c.style.zIndex = zIdx;
        c.style.transform = `translate3d(${x}px,${y}px,${z}px) translate(-50%,-50%) rotateZ(${rotZ}deg) rotateY(${rotY}deg) rotateX(${rotX}deg) scale(${scale})`;
      });

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <section
      className="hero"
      ref={root}
      data-layout="landscape"
      onClick={onBack}
      onTouchEnd={onBack}
      role="button"
      tabIndex={0}
      title="Touch anywhere to pixelate back to logo"
    >
      {/* Person model cutout - z-index: 5 */}
      <img className="hero__person" src={person} alt="Rohith" decoding="async" />

      {/* Headline & intro content (z-index: 20) */}
      <div className="hero__content">
        <h1 className="hero__title">
          <span className="l1">Work that</span>
          <span className="l2"><span>Begins</span><span>with</span></span>
          <span className="l3">Strategy.</span>
        </h1>

        <p className="hero__desc">
          A selection of identity systems, digital experiences, and creative direction developed for
          founders, startups, and established businesses across diverse industries.
        </p>

        <div className="hero__actions">
          <button className="hero__btn a">[ Explore Projects ]</button>
          <button className="hero__btn b">[ Start a Project ]</button>
        </div>
      </div>

      {/* 3D Orbit cards: direct children so z-index naturally interleaves with person */}
      {PROJECT_CARDS.map((c, i) => (
        <div
          key={c.id || i}
          ref={(n) => (cards.current[i] = n)}
          className={"hero__card" + (c.dark ? " dark" : "")}
        >
          {c.src ? (
            <img src={c.src} alt={c.title || ""} loading="lazy" />
          ) : (
            <div className="hero__card-placeholder">
              <i style={{ left: "8%", top: "8%", width: "40%", height: "6%" }} />
              <i style={{ left: "8%", top: "20%", width: "55%", height: "32%", opacity: 0.85 }} />
              <i style={{ left: "8%", top: "60%", width: "84%", height: "3%" }} />
            </div>
          )}
        </div>
      ))}

      {/* Marquee Ticker at the bottom */}
      <div className="hero__ticker">
        <div className="hero__marquee"><Ticker /><Ticker /></div>
      </div>
    </section>
  );
}
