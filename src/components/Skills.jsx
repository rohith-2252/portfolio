import "./style/DevSoul.css";
import { useState } from "react";

/* ---------- background "development" illustrations (inline SVG, no image files needed) ---------- */
const Art = ({ id, children }) => (
  <svg className="ds-art" viewBox="0 0 480 810" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#12001d" />
        <stop offset="1" stopColor="#9e09eb" />
      </linearGradient>
      <pattern id={`p-${id}`} width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M40 0H0V40" fill="none" stroke="#ffffff" strokeOpacity=".08" />
      </pattern>
    </defs>
    <rect width="480" height="810" fill={`url(#g-${id})`} />
    <rect width="480" height="810" fill={`url(#p-${id})`} />
    {children}
  </svg>
);

const ArtDesign = () => (
  <Art id="d">
    <rect x="60" y="110" width="360" height="450" rx="16" fill="#ffffff" fillOpacity=".12" stroke="#ffffff" strokeOpacity=".7" />
    <path d="M60 158H420" stroke="#ffffff" strokeOpacity=".5" />
    {[84, 106, 128].map((x) => <circle key={x} cx={x} cy="134" r="6" fill="#ffffff" fillOpacity=".7" />)}
    <rect x="86" y="184" width="308" height="120" rx="8" fill="#ffffff" fillOpacity=".22" />
    <rect x="86" y="326" width="96" height="96" rx="8" fill="#ffffff" fillOpacity=".16" />
    <rect x="198" y="326" width="96" height="96" rx="8" fill="#ffffff" fillOpacity=".16" />
    <rect x="310" y="326" width="84" height="96" rx="8" fill="#ffffff" fillOpacity=".16" />
    <rect x="86" y="448" width="220" height="10" rx="5" fill="#ffffff" fillOpacity=".5" />
    <rect x="86" y="472" width="160" height="10" rx="5" fill="#ffffff" fillOpacity=".3" />
    <rect x="86" y="506" width="90" height="32" rx="16" fill="#ffffff" fillOpacity=".8" />
    <path d="M70 700C160 600 290 800 410 660" fill="none" stroke="#ffffff" strokeWidth="3" />
    <g stroke="#ffffff" strokeOpacity=".6" strokeDasharray="4 4">
      <path d="M70 700L130 640" /><path d="M410 660L350 735" />
    </g>
    <g fill="#0b0b0d" stroke="#ffffff" strokeWidth="2">
      <rect x="62" y="692" width="16" height="16" /><rect x="402" y="652" width="16" height="16" />
      <circle cx="130" cy="640" r="6" /><circle cx="350" cy="735" r="6" />
    </g>
    {["#ffffff", "#c77dff", "#0b0b0d", "#9e09eb"].map((c, i) => (
      <circle key={c} cx={90 + i * 52} cy="766" r="16" fill={c} stroke="#ffffff" strokeOpacity=".6" />
    ))}
  </Art>
);

const CODE = [
  [["#c77dff", "const "], ["#ffffff", "build = "], ["#c77dff", "async "], ["#ffffff", "() => {"]],
  [["#ffffff", "  "], ["#c77dff", "const "], ["#ffffff", "ui = "], ["#c77dff", "await "], ["#d4d4d9", "design"], ["#ffffff", "();"]],
  [["#ffffff", "  "], ["#c77dff", "return "], ["#d4d4d9", "scale"], ["#ffffff", "(ui);"]],
  [["#ffffff", "};"]],
];

const ArtExecute = () => (
  <Art id="e">
    <rect x="40" y="100" width="400" height="430" rx="16" fill="#0b0b0d" fillOpacity=".85" stroke="#ffffff" strokeOpacity=".5" />
    {[78, 100, 122].map((x, i) => <circle key={x} cx={x} cy="128" r="6" fill={["#c77dff", "#d4d4d9", "#ffffff"][i]} />)}
    <path d="M40 152H440" stroke="#ffffff" strokeOpacity=".25" />
    <g fontFamily="'Space Mono', ui-monospace, monospace" fontSize="15">
      {CODE.map((line, i) => (
        <text key={i} x="84" y={196 + i * 30} xmlSpace="preserve">
          <tspan x="60" fill="#ffffff" fillOpacity=".35">{i + 1}</tspan>
          {line.map(([c, t], j) => (
            <tspan key={j} fill={c} xmlSpace="preserve">{t}</tspan>
          ))}
        </text>
      ))}
    </g>
    {[0, 1, 2, 3, 4].map((i) => (
      <rect key={i} x="84" y={332 + i * 30} width={[260, 180, 220, 120, 200][i]} height="9" rx="4.5" fill="#ffffff" fillOpacity={i % 2 ? ".2" : ".32"} />
    ))}
    <rect className="ds-cursor" x="84" y="486" width="9" height="20" fill="#ffffff" />
    <rect x="40" y="570" width="400" height="150" rx="16" fill="#050507" fillOpacity=".9" stroke="#ffffff" strokeOpacity=".4" />
    <g fontFamily="'Space Mono', ui-monospace, monospace" fontSize="15">
      <text x="64" y="614" fill="#ffffff">$ npm run build</text>
      <text x="64" y="646" fill="#d4d4d9">✓ compiled in 1.2s</text>
      <text x="64" y="676" fill="#d4d4d9">✓ bundle 48 kb</text>
    </g>
  </Art>
);

const TESTS = ["unit tests · 128 passed", "e2e flows · 24 passed", "lighthouse · 98 / 100", "type check · 0 errors"];

const ArtVerify = () => (
  <Art id="v">
    <rect x="50" y="110" width="380" height="330" rx="16" fill="#ffffff" fillOpacity=".12" stroke="#ffffff" strokeOpacity=".6" />
    {TESTS.map((t, i) => (
      <g key={t} transform={`translate(80 ${160 + i * 66})`}>
        <circle cx="16" cy="16" r="16" fill="#ffffff" />
        <path d="M8 16l6 6 11-12" fill="none" stroke="#9e09eb" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="50" y="22" fill="#ffffff" fontSize="16" fontFamily="'Space Mono', ui-monospace, monospace">{t}</text>
      </g>
    ))}
    <rect x="50" y="480" width="380" height="14" rx="7" fill="#ffffff" fillOpacity=".2" />
    <rect x="50" y="480" width="380" height="14" rx="7" fill="#ffffff" />
    <text x="50" y="530" fill="#ffffff" fontSize="15" fontFamily="'Space Mono', ui-monospace, monospace">deploy → production · 100%</text>
    <g stroke="#ffffff" strokeWidth="3" fill="none">
      <path d="M70 640H410" />
      <path d="M170 640C190 640 190 700 220 700H330C350 700 350 640 370 640" />
    </g>
    {[70, 170, 370, 410].map((x) => <circle key={x} cx={x} cy="640" r="9" fill="#0b0b0d" stroke="#ffffff" strokeWidth="3" />)}
    <circle cx="275" cy="700" r="9" fill="#ffffff" />
  </Art>
);

/* ---------- content ---------- */
const COLUMNS = [
  { letter: "D", word: "DESIGN", tagline: "Think twice, code once.", Art: ArtDesign },
  { letter: "E", word: "EXECUTE", tagline: "Write clean, scale fast.", Art: ArtExecute },
  { letter: "V", word: "VERIFY", tagline: "Ship early, improve always.", Art: ArtVerify },
];


export default function Skills() {
    const [active, setActive] = useState(null);
  return (
    <section className="ds my-12 md:my-20" id="skills">
      <div className="ds-stage">
        <svg className="ds-logo" viewBox="0 0 40 40" aria-label="Logo" role="img">
          <path d="M20 2l5 11 11-5-5 11 9 5-11 4 2 12-11-8-11 8 2-12-11-4 9-5-5-11 11 5z" fill="none" stroke="#0b0b0d" strokeWidth="1.6" strokeLinejoin="round" />
          <circle cx="20" cy="21" r="4" fill="#0b0b0d" />
        </svg>

        <button className="ds-menu" aria-label="Open menu">
          <span /><span /><span />
        </button>

        <div className="ds-cols">
          {COLUMNS.map(({ letter, word, tagline, Art: Scene }, i) => (
            <div
              key={letter}
              className={`ds-col ds-col--${letter.toLowerCase()}${active === i ? " is-active" : ""}`}
              tabIndex={0}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              onClick={() => setActive(i)}
            >
              <div className="ds-bg"><Scene /></div>
              <div className="ds-tint" />
              <span className="ds-letter" aria-hidden="true">{letter}</span>
              <div className="ds-caption">
                <strong>{word}</strong>
                <span>“{tagline}”</span>
                <em aria-hidden="true">↙</em>
              </div>
              <span className="ds-num">{String(i + 1).padStart(2, "0")}</span>
            </div>
          ))}
        </div>

        <span className="ds-copy">COPYRIGHT © 2026</span>
      </div>
    </section>
  );
}
