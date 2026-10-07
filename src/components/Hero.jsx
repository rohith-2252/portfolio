import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ROLES } from "../data";

import profile from "../assets/profile.png";
import resume from "../../resource/Rohith_R_FullStack_Developer_Resume.pdf";

import TechText from "./interactive-component/TechText";
import Dock from "./interactive-component/Dock";
import TiltedCard from "./interactive-component/TiltedCard";

import {
  VscGithub,
  VscAccount,
  VscLink,
  VscMail,
} from "react-icons/vsc";

function useTypewriter(
  words,
  { typeSpeed = 70, deleteSpeed = 40, pause = 1400 } = {}
) {
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
          deleting
            ? current.slice(0, t.length - 1)
            : current.slice(0, t.length + 1)
        );
      }, deleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const role = useTypewriter(ROLES);

  const dockItems = [
    {
      icon: <VscAccount size={20} />,
      label: "LinkedIn",
      onClick: () =>
        window.open(
          "https://www.linkedin.com/in/rohith-r-it-student",
          "_blank"
        ),
    },
    {
      icon: <VscGithub size={20} />,
      label: "GitHub",
      onClick: () =>
        window.open(
          "https://github.com/rohith-2252/",
          "_blank"
        ),
    },
    {
      icon: <VscLink size={20} />,
      label: "Portfolio",
      onClick: () =>
        window.open(
          "https://portfolio-cw93.onrender.com/",
          "_blank"
        ),
    },
    {
      icon: <VscMail size={20} />,
      label: "Email",
      onClick: () => {
        window.location.href = "mailto:rohith.r2252@gmail.com";
      },
    },
  ];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-sky-500/15 blur-[110px]" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[100px]" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1fr_1.15fr]">

        {/* LEFT CONTENT */}
        <div className="relative z-10">

          {/* Hello */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-1 text-sm font-medium text-slate-400"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.1 }}
  className="relative h-[150px] w-full max-w-[600px]"
>
  <TechText
    text="ROHITH R"
    fontFamily="Space Grotesk"
    fontWeight={600}
    fontSize={110}
    color="#ffffff"
    accentColor="#38BDF8"
    letterSpacing={-0.04}
    reach={180}
    softness={0.7}
    dashLength={4}
    dashGap={2}
    strokeWidth={1.5}
    lineStyle="dashed"
    reveal="letter"
    specks={15}
    selection
    labels
    draggable
    sweep
    speed={1}
  />
</motion.div>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 h-9 font-display text-2xl font-semibold text-white sm:text-3xl"
          >
            {role}
            <span className="ml-0.5 inline-block h-6 w-[2px] translate-y-0.5 animate-pulse bg-sky-400 align-middle" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-300"
          >
            Software Engineer skilled in Java, Python, SQL, and JavaScript
            with experience designing scalable software applications, REST
            APIs, AI-powered solutions, and IoT-based systems. Strong
            foundation in Data Structures &amp; Algorithms, OOP, and DBMS
            with a passion for building clean, efficient, and scalable
            software.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={resume}
              download="Rohith_R_FullStack_Developer_Resume.pdf"
              className="glow-btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-sky-600 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03] active:scale-95"
            >
              <DownloadIcon />
              Download Resume
            </a>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-sky-400/40 hover:bg-white/10"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Dock */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex h-20 items-center"
          >
            <Dock
              items={dockItems}
              panelHeight={68}
              baseItemSize={50}
              magnification={70}
            />
          </motion.div>
        </div>

        {/* RIGHT INTERACTIVE TECH TEXT */}
{/* RIGHT PROFILE IMAGE WITH TILTED CARD */}
<motion.div
  initial={{ opacity: 0, scale: 0.92 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative flex min-h-[500px] w-full items-center justify-center"
>
  {/* Subtle glow */}
  <div className="pointer-events-none absolute h-[380px] w-[380px] rounded-full bg-blue-600/10 blur-[120px]" />

  {/* Tilted Profile Card */}
  <div className="relative z-10">
    <TiltedCard
      imageSrc={profile}
      altText="Rohith R"
      captionText="Rohith R"
      containerHeight="430px"
      containerWidth="360px"
      imageHeight="100%"
      imageWidth="100%"
      rotateAmplitude={10}
      scaleOnHover={1.05}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={false}
    />
  </div>

  {/* Small label */}
  <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
      Software Engineer
    </p>
  </div>
</motion.div>
      </div>
    </section>
  );
}

/* Resume Icon */
function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
    </svg>
  );
}
