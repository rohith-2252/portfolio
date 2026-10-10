import { Fragment, useLayoutEffect, useRef, useState } from "react";
import "./style/Achievements.css";

const DESIGN_W = 1520;
const DESIGN_H = 806;
const STACK_BELOW = 1024; // px: under this width the cards stack vertically

const CARDS = [
  { cls: "card--accent card--1", num: "01", label: "->", title: "LeetCode",
    lines: ["Problem-solving progress and ", "streaks on LeetCode"], tape: "tape--gray tape--left" ,link: "https://leetcode.com/u/Rohith_Rohan/"},
  { cls: "card--paper card--2", num: "01", label: "<-", title: "GitHub Contributions",
    lines: ["Consistent contributions and ", "open-source activity."], tape: "tape--gray tape--mid" ,link: "https://github.com/rohith-2252"},
  { cls: "card--accent card--3", num: "01", label: "<>", title: "Awards",
    lines: ["Recognitions and awards", " earned along the way."], tape: "tape--yellow tape--left",link:" https://drive.google.com/drive/folders/1KPkFRgruO_o49jbuSs4gDVjy5po7IYMs?usp=sharing"},
  { cls: "card--paper card--4", num: "04", label: "><", title: "Coding Achievements",
    lines: ["Milestones across competitive"," programming platforms. "], tape: "tape--gray tape--mid",link:" https://drive.google.com/drive/folders/1KPkFRgruO_o49jbuSs4gDVjy5po7IYMs?usp=sharing" },
];

function Connector({ flip }) {
  return (
    <svg className="np__connector" viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true">
      <path
        d={flip ? "M72 0 C72 30 28 30 28 60" : "M28 0 C28 30 72 30 72 60"}
        fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="7 5" strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
export default function Achievements(){
  const wrapRef = useRef(null);
  const [width, setWidth] = useState(DESIGN_W);

  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    setWidth(el.getBoundingClientRect().width);
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const stack = width < STACK_BELOW;
  const scale = width / DESIGN_W;

  return (
    <div className="np my-16 md:my-28" id="achievements" ref={wrapRef} style={stack ? undefined : { height: DESIGN_H * scale }}>
      <div
        className={`np__stage${stack ? " np__stage--stack" : ""}`}
        style={stack ? undefined : { transform: `scale(${scale})` }}
      >
        <div className="np__grid" />

        <h1 className="np__title">
          Creativity is just <br />
          <span className="np__hl">
            <svg className="np__ring" viewBox="0 0 520 110" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <filter id="np-rough" x="-10%" y="-30%" width="120%" height="160%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="4" />
                  <feDisplacementMap in="SourceGraphic" scale="6" />
                </filter>
              </defs>
              <g filter="url(#np-rough)" fill="none" strokeLinecap="round">
                <ellipse cx="258" cy="56" rx="246" ry="42" transform="rotate(-1 258 56)" className="np__ring-a" />
                <ellipse cx="262" cy="53" rx="240" ry="39" transform="rotate(1 262 53)" className="np__ring-b" />
              </g>
            </svg>
            Connecting Things
          </span>
        </h1>

        <p className="np__note">
          Building things that people love is the ultimate compiler success.
        </p>
        <div className="np__rule" />

        {!stack && (
          <svg className="np__links" viewBox="0 0 1520 806" aria-hidden="true">
            <g fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="7 5" strokeLinecap="round">
              <path d="M388 446 Q412 450 408 500 L408 520 Q406 538 428 543" />
              <path d="M751 551 Q782 548 784 520 L784 440 Q784 394 816 391" />
              <path d="M1141 406 Q1172 410 1172 440 L1172 545 Q1172 585 1148 590 Q1144 610 1180 620" />
            </g>
          </svg>
        )}

        <div className="np__list">
          {CARDS.map((c, i) => (
            <Fragment key={c.title}>
              <a href = {c.link}><div className={`card ${c.cls}`}>
                <div className="card__holes">
                  {Array.from({ length: 8 }).map((_, k) => <i key={k} />)}
                </div>
                <div className={`tape ${c.tape}`} />
                <div className="card__num">{c.num}</div>
                <div className="card__label">{c.label}</div>
                <div className="card__dash" />
                <div className="card__title">{c.title}</div>
                <div className="card__desc">
                  {c.lines[0]}<br />{c.lines[1]}
                </div>
              </div>
              </a>
              {stack && i < CARDS.length - 1 && <Connector flip={i % 2 === 1} />}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
