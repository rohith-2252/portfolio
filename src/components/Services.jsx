import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "../data";
import { SectionHeading } from "./Education";

const ICONS = {
  coffee: <CoffeeIcon />,
  layers: <LayersIcon />,
  sparkles: <SparkleIcon />,
};

const CHIP_POSITIONS = [
  { top: "-10%", left: "4%" },
  { top: "-6%", right: "8%" },
  { top: "36%", left: "-14%" },
  { top: "40%", right: "-14%" },
  { bottom: "-8%", left: "0%" },
  { bottom: "-12%", right: "6%" },
  { bottom: "-16%", left: "40%" },
  { top: "-16%", left: "38%" },
];

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Services" title="What I Do" />

        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-24 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ y: -8 }}
              className={`group relative rounded-3xl p-8 transition-all ${
                service.featured
                  ? "glass-strong shadow-[0_0_45px_-12px_rgba(56,189,248,0.5)] md:-translate-y-4"
                  : "glass hover:shadow-[0_0_35px_-12px_rgba(56,189,248,0.4)]"
              }`}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-sky-600 text-ink-950 shadow-[0_0_20px_-4px_rgba(56,189,248,0.6)]">
                {ICONS[service.icon]}
              </div>
              <h3 className="font-display text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                {service.desc}
              </p>

              <AnimatePresence>
                {hovered === i &&
                  service.chips.map((chip, ci) => (
                    <motion.span
                      key={chip}
                      initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ delay: ci * 0.03, duration: 0.35 }}
                      style={CHIP_POSITIONS[ci % CHIP_POSITIONS.length]}
                      className="pointer-events-none absolute z-20 hidden whitespace-nowrap rounded-full border border-sky-400/30 bg-ink-800/90 px-3 py-1 text-[11px] font-medium text-sky-300 shadow-[0_0_15px_-4px_rgba(56,189,248,0.6)] backdrop-blur md:block"
                    >
                      {chip}
                    </motion.span>
                  ))}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoffeeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a3 3 0 010 6h-1" />
      <path d="M2 8h16v6a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
      <path d="M6 2v2M10 2v2M14 2v2" />
    </svg>
  );
}
function LayersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l9 5-9 5-9-5 9-5z" />
      <path d="M3 12l9 5 9-5M3 17l9 5 9-5" />
    </svg>
  );
}
function SparkleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" />
    </svg>
  );
}
