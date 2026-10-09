import GooeyNav from "./interactive-component/GooeyNav";

export default function Navbar() {
  const items = [
    { label: "Home", href: "#app" },
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
            border border-[#9e09eb]/60
            bg-[#10071a]/95
            px-4 py-2
            shadow-[0_8px_30px_rgba(158,9,235,0.15)]
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
            colors={["#ffffff"]}
          />
        </div>
      </div>
    </header>
  );
}