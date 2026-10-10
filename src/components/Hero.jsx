import { useState, useEffect } from "react";
import ElectricLogo from "./interactive-component/ElectricLogo";
import HeroRender from "./interactive-component/HeroRender";
import personImg from "../assets/rohith.png";
import "./style/Hero.css";

export default function Hero() {
  const [revealed, setRevealed] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [homeLoaded, setHomeLoaded] = useState(false);

  // Preload Home page requirements (Electric Logo & Rohith's Hero cutout image)
  useEffect(() => {
    const homeAssets = ["/logo.png", personImg];
    let loadedCount = 0;

    const onDone = () => {
      loadedCount++;
      if (loadedCount >= homeAssets.length) {
        setHomeLoaded(true);
      }
    };

    homeAssets.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = onDone;
      img.onerror = onDone;
    });

    // Fast fallback safety timer (maximum 400ms)
    const timer = setTimeout(() => setHomeLoaded(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const handleReveal = () => {
    if (revealed || isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      setRevealed(true);
    }, 450);
  };

  return (
    <div id="home" className="hero-stage">
      <div
        className="hero-swap-container"
        style={{
          opacity: homeLoaded ? 1 : 0.85,
          transition: "opacity 0.3s ease",
        }}
      >
        {!revealed && (
          <div
            className={`hero-logo-layer ${isExiting ? "exiting" : ""}`}
            role="button"
            tabIndex={0}
            onClick={handleReveal}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleReveal()}
            aria-label="Click to enter portfolio"
          >
            <ElectricLogo
              src="/logo.png"
              color="#9e09eb"
              glowColor="#27252b"
              scale={0.7}
              strands={4}
              bend={0.6}
              crackle={1.5}
              arcs={1}
              speed={2.5}
              interactive
              intensity={0.45}
              glow={1}
              thickness={1.5}
              flicker={0.6}
              fill={0}
              cursorIntensity={0.75}
              cursorRadius={100}
            />
            <button
              type="button"
              className="hero-prompt-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleReveal();
              }}
            >
              [ Tap / Click to Enter ]
            </button>
          </div>
        )}

        <div className={`hero-render-layer ${revealed ? "active" : ""}`}>
          {/* Mount HeroRender when revealed or exiting to start RAF loop cleanly */}
          {(revealed || isExiting) && <HeroRender />}
        </div>
      </div>
    </div>
  );
}
