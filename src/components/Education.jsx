import { motion } from "framer-motion";
import { EDUCATION } from "../data";
import GravityElement from "./interactive-component/GravityElement";
export default function Education() {
  return (
    <GravityElement />
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

