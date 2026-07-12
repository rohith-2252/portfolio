import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, FILTERS } from "../data";
import { SectionHeading } from "./Education";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.tags.includes(filter)),
    [filter]
  );

  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          subtitle="A curated gallery of applications spanning AI, full stack, and core software engineering."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === f
                  ? "bg-gradient-to-r from-sky-400 to-sky-600 text-ink-950 shadow-[0_0_18px_-2px_rgba(56,189,248,0.6)]"
                  : "glass text-slate-300 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: y * -8, ry: x * 8 });
  };
  const onMouseLeave = () => setTilt({ rx: 0, ry: 0 });

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
      }}
      className="group relative overflow-hidden rounded-3xl glass transition-shadow duration-300 hover:shadow-[0_0_45px_-10px_rgba(56,189,248,0.5)]"
    >
      <div className="relative h-56 overflow-hidden">
        <ProjectVisual variant={project.image} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-ink-950/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
            <GitHubIcon /> Code
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-sky-400 to-sky-600 px-4 py-2 text-xs font-semibold text-ink-950">
            <ExternalIcon /> Demo
          </span>
        </div>
      </div>

      <div className="p-6">
        <span className="text-xs font-medium text-sky-300">{project.date}</span>
        <h3 className="mt-1.5 font-display text-lg font-semibold text-white">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-xs text-slate-500">{project.subtitle}</p>
        )}
        <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
          {project.desc}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectVisual({ variant }) {
  const gradients = {
    face: "from-cyan-500/40 via-sky-700/40 to-ink-900",
    ecommerce: "from-sky-300/30 via-sky-600/30 to-ink-900",
    career: "from-indigo-400/30 via-sky-600/30 to-ink-900",
    employee: "from-orange-400/20 via-sky-700/30 to-ink-900",
  };
  return (
    <div className={`relative h-full w-full bg-gradient-to-br ${gradients[variant]}`}>
      <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 400 224">
        {Array.from({ length: 18 }).map((_, i) => (
          <circle
            key={i}
            cx={(i * 53) % 400}
            cy={(i * 37) % 224}
            r={1.4}
            fill="#7cd4ff"
          />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={i}
            x1={(i * 53) % 400}
            y1={(i * 37) % 224}
            x2={((i + 3) * 53) % 400}
            y2={((i + 2) * 37) % 224}
            stroke="#7cd4ff"
            strokeWidth="0.6"
            opacity="0.5"
          />
        ))}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <VariantIcon variant={variant} />
      </div>
    </div>
  );
}

function VariantIcon({ variant }) {
  const common = "text-sky-200/70";
  if (variant === "face")
    return (
      <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 10h.01M16 10h.01M8 15c1.2 1 2.8 1 4 1s2.8 0 4-1" />
      </svg>
    );
  if (variant === "ecommerce")
    return (
      <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={common}>
        <circle cx="9" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
        <path d="M2.5 3h2l2.7 12.5a2 2 0 002 1.5h8.6a2 2 0 002-1.6L21 8H6" />
      </svg>
    );
  if (variant === "career")
    return (
      <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={common}>
        <path d="M12 2l3 6 6.5 1-4.8 4.5L18 20l-6-3.5L6 20l1.3-6.5L2.5 9l6.5-1z" />
      </svg>
    );
  return (
    <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={common}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 4v5" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.94 3.2 9.13 7.65 10.6.56.1.77-.24.77-.53v-2.1c-3.11.68-3.77-1.34-3.77-1.34-.5-1.28-1.24-1.63-1.24-1.63-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.94.1-.73.4-1.22.72-1.5-2.49-.28-5.1-1.24-5.1-5.54 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.1-2.96 0 0 .95-.3 3.1 1.14a10.7 10.7 0 015.66 0c2.16-1.44 3.1-1.14 3.1-1.14.6 1.54.22 2.68.1 2.96.73.78 1.16 1.78 1.16 3 0 4.31-2.62 5.25-5.12 5.53.4.35.76 1.04.76 2.1v3.11c0 .3.2.64.78.53 4.44-1.48 7.64-5.66 7.64-10.6C23.02 5.24 18.27.5 12 .5z" />
    </svg>
  );
}
function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3h7v7M21 3l-9 9M9 21H3v-6M3 21l9-9" />
    </svg>
  );
}
