
import { useState } from "react";
import CircularCarousel from "./interactive-component/CircularCarousel";

export default function Projects() {
  const [paused, setPaused] = useState(false);

  const projects = [
    {
      src: "/images/face-attendance.png",
      alt: "Face Attendance System",
      title: "Face Attendance",
      subtitle: "Facial Recognition System",
      link: "#",
    },
    {
      src: "/images/bonafide.png",
      alt: "Bonafide Management System",
      title: "Bonafide Management",
      subtitle: "College Management System",
      link: "#",
    },
    {
      src: "/images/ai-fluency.png",
      alt: "AI Fluency Application",
      title: "AI Fluency Application",
      subtitle: "Speech & English Analysis",
      link: "#",
    },
    {
      src: "/images/career-guidance.png",
      alt: "Career Guidance",
      title: "Career Guidance",
      subtitle: "AI-Based Career Platform",
      link: "#",
    },
    {
      src: "/images/chatbot.png",
      alt: "Chatbot",
      title: "Chatbot",
      subtitle: "AI Conversational Assistant",
      link: "#",
    },
    {
      src: "/images/everest.png",
      alt: "Everest Ecommerce",
      title: "Everest Ecommerce",
      subtitle: "Ecommerce Web Application",
      link: "#",
    },
  ];

  const handleProjectClick = (item) => {
    // Stop carousel when a project is clicked
    setPaused(true);

    // Open project link if available
    if (item.link && item.link !== "#") {
      window.open(item.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="projects"
      className="relative px-6 py-12 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-2 text-center">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-sky-400">
            Projects
          </span>

          <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-5xl">
            Selected Work
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
            A collection of applications and systems built across AI,
            software engineering, web development, and automation.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mx-auto h-[580px] w-full">
          <CircularCarousel
            items={projects}

            /* Card size */
            cardWidth={340}
            aspectRatio={1.5}

            /* Spacing */
            gap={45}

            /* 3D */
            curve={0}
            tilt={0}
            perspective={3500}

            /* Automatic rotation */
            autoplay={paused ? false : "drift"}
            speed={18}
            interval={3000}
            direction="right"

            /* Mouse interaction */
            draggable={true}
            momentum={true}
            snap={true}

            /* IMPORTANT:
               Hover does NOT stop the carousel */
            pauseOnHover={false}

            focusOnClick={true}

            /* Effects */
            parallax={true}
            stretch={false}
            depthFade={true}
            fadeColor="#050b14"
            innerShade={true}
            cornerRadius={16}

            /* Captions */
            captions={true}

            /* Click */
            onItemClick={handleProjectClick}

            className="w-full h-full"
          />
        </div>

        {/* Hint */}
        <p className="-mt-2 text-center text-xs text-slate-500">
          Click a project to pause the carousel
        </p>

      </div>
    </section>
  );
}
