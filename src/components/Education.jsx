import { motion } from "framer-motion";
import { EDUCATION } from "../data";

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Education" title="Learning Journey" />

        <div className="relative mt-16">
          <svg
            viewBox="0 0 800 120"
            preserveAspectRatio="none"
            className="absolute left-0 top-1/2 hidden w-full -translate-y-1/2 md:block"
            style={{ height: 120 }}
          >
            <motion.path
              d="M0,60 C150,10 250,110 400,60 C550,10 650,110 800,60"
              fill="none"
              stroke="url(#waveGrad)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.15" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {EDUCATION.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, y: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`glass relative z-10 rounded-3xl p-7 ${
                  i % 2 === 0 ? "md:mt-0" : "md:mt-20"
                }`}
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                  <CapIcon />
                </div>
                <span className="inline-block rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300">
                  {e.period}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">
                  {e.degree}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{e.school}</p>
                <p className="mt-3 text-sm font-semibold text-sky-300">
                  {e.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block rounded-full border border-sky-400/25 bg-sky-400/5 px-4 py-1.5 text-xs font-medium text-sky-300"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-5 font-display text-4xl font-bold text-white sm:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-[15px] text-slate-400"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

function CapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10L12 4 2 10l10 6 10-6z" />
      <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
    </svg>
  );
}
