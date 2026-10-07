
import CursorGrid from "./interactive-component/CursorGrid";

export default function NetworkBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-screen">
      <CursorGrid
        cellSize={70}
        color="#1f1fd2"
        radius={140}
        falloff="smooth"
        holdTime={400}
        fadeDuration={800}
        lineWidth={1.2}
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
