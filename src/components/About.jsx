import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

import LogoLoop from "./interactive-component/LogoLoop";
import ScrollVelocity from "./interactive-component/ScrollVelocity";

import { STATS } from "../data";

import {
  SiReact,
  SiJavascript,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiHtml5,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";


function Counter({ value, suffix }) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-40px",
  });

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

  const techLogos = [
    {
      node: <SiReact />,
      title: "React",
    },
    {
      node: <SiJavascript />,
      title: "JavaScript",
    },
    {
      node: <SiPython />,
      title: "Python",
    },
    {
      node: <FaJava />,
      title: "Java",
    },
    {
      node: <SiNodedotjs />,
      title: "Node.js",
    },
    {
      node: <SiExpress />,
      title: "Express",
    },
    {
      node: <SiMongodb />,
      title: "MongoDB",
    },
    {
      node: <SiPostgresql />,
      title: "PostgreSQL",
    },
    {
      node: <SiGit />,
      title: "Git",
    },
    {
      node: <SiDocker />,
      title: "Docker",
    },
    {
      node: <SiHtml5 />,
      title: "HTML5",
    },
  ];


  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-28"
    >
<div className="mx-auto w-full text-center">  

        {/* About Badge */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            inline-block
            rounded-full
            border border-sky-400/25
            bg-sky-400/5
            px-4 py-1.5
            text-xs
            font-medium
            text-sky-300
          "
        >
          About Me
        </motion.span>


        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="
            mt-5
            font-display
            text-4xl
            font-bold
            leading-tight
            text-white
            sm:text-5xl
          "
        >
          Turning ideas into{" "}
          <span className="text-gradient">
            scalable software
          </span>
        </motion.h2>


        {/* TECHNOLOGY SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
className="
  relative
  mt-12
  w-full
  overflow-hidden
  border-y border-white/10
  bg-[#071426]/60
  py-5
"
        >

          {/* ========================= */}
          {/* TOP SCROLL VELOCITY */}
          {/* ========================= */}

          <div className="mb-5 w-full overflow-hidden">

            <ScrollVelocity
              texts={[
                "SOFTWARE ENGINEER",
                "FULL STACK DEVELOPER",
                "UI / UX DESIGNER",
                "AI / ML ENGINEER"
              ]}
              velocity={45}
              numCopies={6}
              damping={50}
              stiffness={400}
                className="
              custom-scroll-text
              text-[18px]
              sm:text-[22px]
              md:text-[26px]
              text-sky-400/60
            "
            />

          </div>


          {/* Section Title */}

          <p
            className="
              mb-6
              text-xs
              font-medium
              uppercase
              tracking-[0.3em]
              text-slate-500
            "
          >
            Technologies I Work With
          </p>


          {/* ========================= */}
          {/* TECHNOLOGY LOGO LOOP */}
          {/* ========================= */}

          <div className="w-full">

            <LogoLoop
              logos={techLogos}
              speed={70}
              direction="left"
              logoHeight={38}
              gap={55}
              pauseOnHover={false}
              scaleOnHover
              fadeOut
              fadeOutColor="#071426"
              ariaLabel="Technologies I work with"
            />

          </div>


          {/* ========================= */}
          {/* BOTTOM SCROLL VELOCITY */}
          {/* ========================= */}

          <div className="mt-6 w-full overflow-hidden">

<ScrollVelocity
  texts={[
    "REACT • NODE.JS • PYTHON • JAVA",
    "MONGODB • POSTGRESQL • DOCKER • GIT",
  ]}
  velocity={-45}
  numCopies={6}
  damping={50}
  stiffness={400}
  className="
    custom-scroll-text
    text-[16px]
    sm:text-[20px]
    md:text-[24px]
    text-blue-400/50
  "
/>

          </div>

        </motion.div>


        {/* ========================= */}
        {/* STATS */}
        {/* ========================= */}

        <div
          className="
            mt-14
            grid
            grid-cols-2
            gap-4
            sm:grid-cols-3
            lg:grid-cols-5
          "
        >

          {STATS.map((s, i) => (

            <motion.div
              key={s.label}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: i * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                glass
                rounded-2xl
                px-5
                py-7
                transition-shadow
                hover:shadow-[0_0_30px_-10px_rgba(56,189,248,0.4)]
              "
            >

              <div
                className="
                  font-display
                  text-3xl
                  font-bold
                  text-sky-300
                "
              >
                <Counter
                  value={s.value}
                  suffix={s.suffix}
                />
              </div>

              <div
                className="
                  mt-1.5
                  text-xs
                  font-medium
                  text-slate-400
                "
              >
                {s.label}
              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}