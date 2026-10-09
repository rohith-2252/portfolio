import { useState } from "react";
import ElectricLogo from "./interactive-component/ElectricLogo";
import PixelSwap from "./interactive-component/PixelSwap";
import Hero from "./interactive-component/HeroRender";
import "./style/Hero.css";

export default function App() {
  const [revealed, setRevealed] = useState(false);

  const goBack = () => {
    setRevealed(false);
  };

  return (
    <div className="stage">
      <PixelSwap
        active={revealed}
        firstContent={
          <div
            className="click-prompt"
            role="button"
            tabIndex={0}
            onClick={() => setRevealed(true)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setRevealed(true)}
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
          </div>
        }
        secondContent={
          <div className="found-message">
            <Hero onBack={goBack} />
          </div>
        }
      />
    </div>
  );
}
