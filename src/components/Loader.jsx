import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-sky-600 font-display text-2xl font-bold text-ink-950 shadow-[0_0_40px_-6px_rgba(56,189,248,0.7)]"
            >
              R
            </motion.span>
            <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-2/3 rounded-full bg-gradient-to-r from-sky-400 to-sky-300"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
