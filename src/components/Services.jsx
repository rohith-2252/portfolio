import React, { useEffect, useRef } from "react";
import "./style/Services.css";

/* ---------- config ---------- */
const FACES = 36;                       // slices per ring (more = smoother cylinder)
const RADIUS = 460;                     // ring radius in px
const FACE_W = Math.ceil(2 * RADIUS * Math.tan(Math.PI / FACES)) + 1;
const STRIP_W = FACE_W * FACES;         // full unrolled circumference
const PHONE_LAYERS = 12;                // stacked layers = rounded phone thickness
const LAYER_GAP = 2.4;                  // px between layers (phone thickness ~ 29px)
const PHONE_START = 204;                // 180 = black screen faces you (+24 for a slight angle)
const START_ROT = -90;                  // rotates each ring so its word faces the viewer at load

/* tiny pixel-art icons (# = filled pixel) */
const ICONS = {
  layers: ["....#....", "...###...", "..##.##..", ".##...##.", "....#....", "...###...", "..##.##..", ".##...##.", "........."],
  spark: ["....#....", "....#....", "...###...", "##.###.##", "#########", "##.###.##", "...###...", "....#....", "....#...."],
  chip: ["..#.#.#..", ".#######.", "##.....##", ".#.###.#.", "##.###.##", ".#.###.#.", "##.....##", ".#######.", "..#.#.#.."],
};

/* each ring = a big word + a mix of small components, laid out as two groups (A, B) */
const RINGS = [
  {
    word: "FULLSTACK", y: -212, speed: 1, fs: 104,
    a: [
      { t: "word" }, { t: "bar" }, { t: "icon", n: "layers" },
      { t: "tags", v: ["REACT + NEXT", "NODE APIS", "DATABASES"] },
      { t: "para", v: "FROM PIXEL-PERFECT INTERFACES TO SCALABLE BACKENDS. ONE TEAM, SHIPPING END TO END." },
    ],
    b: [
      { t: "num", v: "01." }, { t: "ghost" },
      { t: "chips", v: ["REACT", "NODE", "SQL", "AWS"] }, { t: "bar" },
    ],
  },
  {
    word: "ARTIFICIAL INTELLIGENCE", y: 0, speed: 1.25, fs: 84,
    a: [
      { t: "word" }, { t: "bar" }, { t: "icon", n: "spark" },
      { t: "tags", v: ["LLM APPS", "AI AGENTS", "AUTOMATION"] },
    ],
    b: [
      { t: "para", v: "CHATBOTS, COPILOTS AND SMART WORKFLOWS THAT PLUG AI INTO REAL PRODUCTS AND REAL DATA." },
      { t: "num", v: "02." }, { t: "chips", v: ["RAG", "AGENTS", "VISION"] }, { t: "bar" },
    ],
  },
  {
    word: "SOFTWARE DEVELOPMENT", y: 212, speed: 1.5, fs: 92,
    a: [
      { t: "word" }, { t: "bar" }, { t: "icon", n: "chip" },
      { t: "tags", v: ["WEB + MOBILE", "CLOUD", "DEVOPS"] },
    ],
    b: [
      { t: "para", v: "CLEAN, TESTED, MAINTAINABLE CODE. FROM FIRST COMMIT TO PRODUCTION AND BEYOND." },
      { t: "num", v: "03." }, { t: "chips", v: ["IOS", "ANDROID", "CI/CD"] }, { t: "bar" },
    ],
  },
];

function PixelIcon({ name }) {
  const g = ICONS[name];
  let d = "";
  g.forEach((row, y) => [...row].forEach((c, x) => { if (c === "#") d += `M${x} ${y}h1v1h-1z`; }));
  return (
    <svg className="ring__icon" viewBox={`0 0 ${g[0].length} ${g.length}`} shapeRendering="crispEdges" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

function Item({ it, word }) {
  switch (it.t) {
    case "word":  return <span className="ring__word">{word}</span>;
    case "ghost": return <span className="ring__ghost">{word}</span>;
    case "bar":   return <span className="ring__bar" />;
    case "icon":  return <PixelIcon name={it.n} />;
    case "num":   return <span className="ring__num">{it.v}</span>;
    case "para":  return <p className="ring__para">{it.v}</p>;
    case "tags":  return <ul className="ring__tags">{it.v.map((x) => <li key={x}>{x}</li>)}</ul>;
    case "chips": return <div className="ring__chips">{it.v.map((x) => <span key={x}>[ {x} ]</span>)}</div>;
    default:      return null;
  }
}

/* ---------- one cylinder of rotating content ---------- */
function Ring({ word, a, b, fs, innerRef }) {
  const content = (
    <>
      <div className="ring__group">{a.map((it, k) => <Item key={k} it={it} word={word} />)}</div>
      <div className="ring__group">{b.map((it, k) => <Item key={k} it={it} word={word} />)}</div>
    </>
  );
  return (
    <div className="ring" ref={innerRef} style={{ "--fs": fs + "px" }}>
      {Array.from({ length: FACES }).map((_, i) => (
        <div
          className="ring__face"
          key={i}
          style={{
            width: FACE_W,
            marginLeft: -FACE_W / 2,
            transform: `rotateY(${(i * 360) / FACES}deg) translateZ(${RADIUS}px)`,
          }}
        >
          {/* every face shows its own slice of one long strip */}
          <div className="ring__strip" style={{ width: STRIP_W, left: -i * FACE_W }}>{content}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------- 3D phone: iPhone-style, white glass back, black glass front ---------- */
function Phone({ innerRef }) {
  const half = (PHONE_LAYERS - 1) / 2;
  const zFront = -half * LAYER_GAP;   // screen side
  const zBack = half * LAYER_GAP;     // white back side
  return (
    <div className="phone" ref={innerRef}>
      {Array.from({ length: PHONE_LAYERS }).map((_, k) => (
        <div
          key={k}
          className={`phone__layer ${k === PHONE_LAYERS - 1 ? "phone__layer--back" : ""} ${k === 0 ? "phone__layer--front" : ""}`}
          style={{ transform: `translateZ(${(k - half) * LAYER_GAP}px)${k === 0 ? " rotateY(180deg)" : ""}` }}
        >
          {k === 0 && (
            <div className="phone__screen">
              <span className="phone__island"><i /></span>
              <span className="phone__reflect" />
              <span className="phone__homebar" />
            </div>
          )}
        </div>
      ))}

      {/* side buttons (real 3D slabs) */}
      <span className="btn btn--action" />
      <span className="btn btn--volup" />
      <span className="btn btn--voldn" />
      <span className="btn btn--power" />

      {/* camera plateau sits slightly above the white glass */}
      <div className="phone__camera" style={{ transform: `translateZ(${zBack + 2.5}px)` }}>
        <div className="lens lens--a"><i /></div>
        <div className="lens lens--b"><i /></div>
        <div className="lens lens--c"><i /></div>
        <span className="flash" />
        <span className="lidar" />
        <span className="mic" />
      </div>
      <div className="phone__mark" style={{ transform: `translateZ(${zBack + 0.6}px)` }} />
    </div>
  );
}

export default function Services() {
  const sceneRef = useRef(null);
  const stickyRef = useRef(null);
  const ringRefs = useRef([]);
  const phoneRef = useRef(null);
  const glowRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cur = 0;
    let idle = 0;
    let raf;

    const frame = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const target = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      cur += (target - cur) * 0.08;                // smooth follow
      if (!reduce) idle += 0.12;

      // fit the whole composition to the viewport
      // ONE layout for every screen: the same scene, scaled to fit the viewport.
      // Perspective is scaled too, so mobile looks exactly like desktop.
      const w = window.innerWidth, h = window.innerHeight;
      const s = Math.min(w / 1000, h / 900, 1);
      if (stickyRef.current) stickyRef.current.style.perspective = `${1500 * s}px`;
      if (sceneRef.current) sceneRef.current.style.transform = `scale3d(${s}, ${s}, ${s})`;

      // TEXT RINGS: rotate + travel DOWN while scrolling
      RINGS.forEach((r, i) => {
        const el = ringRefs.current[i];
        if (!el) return;
        const y = r.y + cur * (560 + i * 150);
        const rot = START_ROT + cur * 540 * r.speed + idle * (i % 2 ? -1 : 1);
        el.style.transform = `translateY(${y}px) rotateX(-2deg) rotateY(${rot}deg)`;
        // far side of the cylinder = blurred, like glass seen from behind
        const kids = el.children;
        for (let f = 0; f < kids.length; f++) {
          const back = Math.cos(((f * 360) / FACES + rot) * Math.PI / 180) < 0;
          if (kids[f]._b !== back) { kids[f]._b = back; kids[f].classList.toggle("is-back", back); }
        }
      });

      // PHONE: rotate (opposite way) + travel UP while scrolling
      if (phoneRef.current) {
        const y = -cur * 620;
        const rot = PHONE_START - cur * 720 + idle * 0.4;
        phoneRef.current.style.transform = `translateY(${y}px) rotateX(-6deg) rotateY(${rot}deg)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translateY(${-cur * 620}px)`;
        glowRef.current.style.opacity = String(1 - cur * 0.6);
      }
      if (dotRef.current) dotRef.current.style.transform = `translateY(${-cur * 120}px)`;

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="services-page" id="services">
      <section className="services-stage" aria-label="Services">
        <div className="services-stage__sticky" ref={stickyRef}>
          <div className="dots" />
          <div className="glow" ref={glowRef} />

          <div className="scene" ref={sceneRef}>
            <Phone innerRef={phoneRef} />
            {RINGS.map((r, i) => (
              <Ring key={r.word} {...r} innerRef={(el) => (ringRefs.current[i] = el)} />
            ))}
          </div>

          <div className="hint">
            <span className="hint__circle" />
            <span>SCROLL</span>
          </div>
          <span className="dot" ref={dotRef} />
        </div>
      </section>
    </div>
  );
}
