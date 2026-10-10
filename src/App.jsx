import { useEffect, useState } from "react";
import NetworkBackground from "./components/NetworkBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [ready, setReady] = useState(false);

  // Light / dark theme class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  // Keep the page from scrolling while the loader is on screen
  useEffect(() => {
    document.body.style.overflow = ready ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ready]);

  return (
    <>
      {/* Fast HUD loader overlay (smoothly fades out and unblocks) */}
      {!ready && <Loader duration={1600} onDone={() => setReady(true)} />}

      <div
        id="app"
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
          <Skills />
          <Services />
          <Projects />
          <Achievements />
        </main>
        <Footer />
      </div>
    </>
  );
}
