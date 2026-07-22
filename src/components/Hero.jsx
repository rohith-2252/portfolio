import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ROLES } from "../data";
import profile from "../assets/profile.png";

function useTypewriter(words, { typeSpeed = 70, deleteSpeed = 40, pause = 1400 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }, deleting ? deleteSpeed : typeSpeed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* ambient blobs */}
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-sky-500/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-sky-400/15 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/5 px-4 py-1.5 text-xs font-medium text-sky-300"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Available for New Projects
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-1 text-sm font-medium text-slate-400"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-6xl font-bold tracking-tight text-gradient sm:text-7xl"
          >
            ROHITH R
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 h-9 font-display text-2xl font-semibold text-white sm:text-3xl"
          >
            {role}
            <span className="ml-0.5 inline-block h-6 w-[2px] translate-y-0.5 animate-pulse bg-sky-400 align-middle" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-300"
          >
            Software Engineer skilled in Java, Python, SQL, and JavaScript with
            experience designing scalable software applications, REST APIs,
            AI-powered solutions, and IoT-based systems. Strong foundation in
            Data Structures &amp; Algorithms, OOP, and DBMS with a passion for
            building clean, efficient, and scalable software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
          <a
            href="../../resource/Rohith_R_FullStack_Developer_Resume.pdf"
            download="Rohith_R_FullStack_Developer_Resume.pdf"
            className="glow-btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-sky-600 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03] active:scale-95"
          >
            <DownloadIcon />
            Download Resume
          </a>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-sky-400/40 hover:bg-white/10"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center gap-3"
          >
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-1 hover:border-sky-400/40 hover:text-sky-300"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto flex h-[420px] w-[340px] items-center justify-center"
        >
          <div className="absolute inset-0 rounded-[48%] bg-gradient-to-b from-sky-400/25 to-sky-600/5 blur-2xl" />
          <div className="relative h-full w-full overflow-hidden rounded-[46%] border border-sky-300/20 bg-gradient-to-b from-sky-100/10 to-sky-500/10 shadow-[0_0_60px_-10px_rgba(56,189,248,0.45)]">
            <img
              src={profile}
              alt="Rohith R"
              className="h-full w-full object-cover"
            />
          </div>

          <FloatingIcon className="left-0 top-1/2" delay={0}>
            <CodeIcon />
          </FloatingIcon>
          <FloatingIcon className="right-0 top-16" delay={0.6}>
            <JavaIcon />
          </FloatingIcon>
          <FloatingIcon className="right-6 bottom-10" delay={1.2}>
            <SparkIcon />
          </FloatingIcon>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingIcon({ children, className, delay }) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
      className={`absolute z-10 flex h-14 w-14 items-center justify-center rounded-2xl glass-strong text-sky-300 shadow-[0_0_25px_-6px_rgba(56,189,248,0.5)] ${className}`}
    >
      {children}
    </motion.div>
  );
}

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rohith-r-it-student", icon: <LinkedInIcon /> },
  { label: "GitHub", href: "https://github.com/rohith-2252/", icon: <GitHubIcon /> },
  { label: "Portfolio", href: "https://portfolio-cw93.onrender.com/", icon: <LinkIcon /> },
  { label: "Email", href: "mailto:rohith.r2252@gmail.com", icon: <MailIcon /> },
];

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.94 3.2 9.13 7.65 10.6.56.1.77-.24.77-.53v-2.1c-3.11.68-3.77-1.34-3.77-1.34-.5-1.28-1.24-1.63-1.24-1.63-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.94.1-.73.4-1.22.72-1.5-2.49-.28-5.1-1.24-5.1-5.54 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.1-2.96 0 0 .95-.3 3.1 1.14a10.7 10.7 0 015.66 0c2.16-1.44 3.1-1.14 3.1-1.14.6 1.54.22 2.68.1 2.96.73.78 1.16 1.78 1.16 3 0 4.31-2.62 5.25-5.12 5.53.4.35.76 1.04.76 2.1v3.11c0 .3.2.64.78.53 4.44-1.48 7.64-5.66 7.64-10.6C23.02 5.24 18.27.5 12 .5z" />
    </svg>
  );
}
function LinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3h7v7M21 3l-9 9M9 21H3v-6M3 21l9-9" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}
function CodeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 4L2 12l6 8M16 4l6 8-6 8" />
    </svg>
  );
}
function JavaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 18c-1 1 1 2 3 2 4 0 7-1 7-3 0-1.2-1.4-1.9-2.7-2.2 1.9.2 3.7.8 3.7 2.2 0 2.5-4.2 3.8-8 3.8-2.6 0-4.8-.9-3-2.8zM12 2c1.5 1.7-2.7 3-1.2 5.2C12 9.2 14 10 12.6 12 11.5 8.9 8 8 9.6 5c.6-1.2 1.7-2 2.4-3zM8.4 15.4c-1.7.5-1.7 1.6.6 2.1 3.6.8 8.7.4 9-1.4-1 .8-4.9 1.4-9 .8-1.4-.2-1.2-.9-.6-1.5z" />
    </svg>
  );
}
function SparkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l1.7 5.7L19 9.5l-5.3 1.8L12 17l-1.7-5.7L5 9.5l5.3-1.8z" />
    </svg>
  );
}
