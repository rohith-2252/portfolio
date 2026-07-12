import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { STATS } from "../data";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block rounded-full border border-sky-400/25 bg-sky-400/5 px-4 py-1.5 text-xs font-medium text-sky-300"
        >
          About Me
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl"
        >
          Turning ideas into{" "}
          <span className="text-gradient">scalable software</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-slate-300"
        >
          I'm an aspiring Software Engineer passionate about developing
          scalable software applications, AI-powered solutions, and modern
          web applications. I enjoy solving challenging problems using Java,
          Python, SQL, and JavaScript while continuously learning new
          technologies. My interests include Full Stack Development,
          Artificial Intelligence, Prompt Engineering, and Software
          Engineering.
        </motion.p>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl px-5 py-7 transition-shadow hover:shadow-[0_0_30px_-10px_rgba(56,189,248,0.4)]"
            >
              <div className="font-display text-3xl font-bold text-sky-300">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1.5 text-xs font-medium text-slate-400">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
