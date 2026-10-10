import { useEffect, useState } from "react";
import NetworkBackground from "./components/NetworkBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader"; // the new HUD loader (Loader.jsx + Loader.css)

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [ready, setReady] = useState(false); // false = loader is showing

  // light / dark theme class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  // keep the page from scrolling while the loader is on screen
  useEffect(() => {
    document.body.style.overflow = ready ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ready]);

  return (
    <>
      {/* Loader is a fixed full-screen overlay; it fades out, then calls onDone */}
      {!ready && <Loader duration={4600} onDone={() => setReady(true)} />}

      <div
        className={`relative z-0 min-h-screen overflow-x-hidden ${
          theme === "light" ? "bg-blue-900" : "bg-ink-900"
        }`}
      >
        <NetworkBackground />
        <Navbar
          theme={theme}
          toggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Services />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
