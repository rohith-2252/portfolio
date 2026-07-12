import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "../data";
import { SectionHeading } from "./Education";

const ICONS = {
  medal: <MedalIcon />,
  trophy: <TrophyIcon />,
  code: <CodeIcon />,
  award: <AwardIcon />,
  leetcode: <LeetIcon />,
  github: <GitHubIcon />,
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Achievements" title="Milestones & Recognition" />

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-sky-400/50 to-transparent md:block" />

          <div className="space-y-10 md:space-y-16">
            {ACHIEVEMENTS.map((item, i) => (
              <div
                key={item.title}
                className={`relative flex items-center gap-6 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10"
                }`}
              >
                <span
                  className={`absolute top-9 hidden h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-sky-400 shadow-[0_0_14px_2px_rgba(56,189,248,0.6)] md:block ${
                    i % 2 === 0 ? "-right-[31.5px]" : "-left-[31.5px]"
                  }`}
                />
                <a href ={item.link}> <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass w-full rounded-2xl p-6"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                    {ICONS[item.icon]}
                  </div>
                  <h3 className="font-display text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-400">{item.desc}</p>
                </motion.div></a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MedalIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="15" r="6" /><path d="M9 10L6 2h3l3 6 3-6h3l-3 8" />
    </svg>
  );
}
function TrophyIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 01-10 0V4z" />
      <path d="M7 5H4a3 3 0 003 3M17 5h3a3 3 0 01-3 3" />
    </svg>
  );
}
function CodeIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 4L2 12l6 8M16 4l6 8-6 8" />
    </svg>
  );
}
function AwardIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" /><path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" />
    </svg>
  );
}
function LeetIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 3L4 13h6l-1 8 9-11h-6z" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.94 3.2 9.13 7.65 10.6.56.1.77-.24.77-.53v-2.1c-3.11.68-3.77-1.34-3.77-1.34-.5-1.28-1.24-1.63-1.24-1.63-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.94.1-.73.4-1.22.72-1.5-2.49-.28-5.1-1.24-5.1-5.54 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.1-2.96 0 0 .95-.3 3.1 1.14a10.7 10.7 0 015.66 0c2.16-1.44 3.1-1.14 3.1-1.14.6 1.54.22 2.68.1 2.96.73.78 1.16 1.78 1.16 3 0 4.31-2.62 5.25-5.12 5.53.4.35.76 1.04.76 2.1v3.11c0 .3.2.64.78.53 4.44-1.48 7.64-5.66 7.64-10.6C23.02 5.24 18.27.5 12 .5z" />
    </svg>
  );
}
