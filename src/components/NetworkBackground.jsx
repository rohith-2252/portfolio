import { useState, useEffect } from "react";
import CursorGrid from "./interactive-component/CursorGrid";

export default function NetworkBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 h-screen w-screen pointer-events-none">
      <CursorGrid
        cellSize={isMobile ? 32 : 70}
        color="#1f1fd2"
        radius={isMobile ? 80 : 140}
        falloff="smooth"
        holdTime={400}
        fadeDuration={800}
        lineWidth={isMobile ? 0.9 : 1.2}
        maxOpacity={1}
        fillOpacity={0}
        gridOpacity={0}
        cellRadius={0}
        clickPulse
        pulseSpeed={600}
      />
    </div>
  );
}
