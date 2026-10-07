
import GooeyNav from "./interactive-component/GooeyNav";

export default function Navbar() {
  const items = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl justify-center px-4 py-4">

        <div
          className="
            w-full max-w-5xl
            rounded-2xl
            border border-blue-900/60
            bg-[#071426]/95
            px-4 py-2
            shadow-[0_8px_30px_rgba(0,0,0,0.35)]
            backdrop-blur-md
          "
        >
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
      </div>
    </header>
  );
}
