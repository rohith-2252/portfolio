import { useState, useEffect } from "react";
import GooeyNav from "./interactive-component/GooeyNav";
import Logo from "./Logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
  ];

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full transition-all duration-300">
      {/* DESKTOP NAVBAR (GooeyNav) */}
      <div className="mx-auto hidden max-w-7xl justify-center px-4 py-4 md:flex">
        <div
          className="
            w-full max-w-5xl
            rounded-2xl
            border border-[#9e09eb]/60
            bg-[#10071a]/95
            px-4 py-2
            shadow-[0_8px_30px_rgba(158,9,235,0.18)]
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

      {/* MOBILE NAVBAR (Hamburger Header) */}
      <div className="flex w-full items-center justify-between px-4 py-3 md:hidden">
        <div className="flex w-full items-center justify-between rounded-2xl border border-[#9e09eb]/50 bg-[#10071a]/90 px-4 py-2.5 shadow-[0_6px_25px_rgba(158,9,235,0.2)] backdrop-blur-xl">
          {/* Logo */}
          <Logo name="Rohith" tagline="Dev" href="#home" onClick={() => setMobileMenuOpen(false)} />

          {/* Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="relative flex h-10 w-10 flex-col items-center justify-center rounded-xl border border-[#9e09eb]/40 bg-[#1c0d2e]/80 text-white transition-colors duration-200 hover:border-[#9e09eb] hover:bg-[#2a1345]"
            aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "translate-y-1.5 rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-[#d27bff] transition-all duration-200 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "-translate-y-1.5 -rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU MODAL / OVERLAY */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col bg-[#050605]/95 px-6 pt-24 pb-8 backdrop-blur-2xl md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="flex flex-col items-center justify-center gap-6 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {items.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className="group relative flex w-full max-w-xs items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] py-3.5 text-lg font-medium tracking-wide text-white/90 transition-all duration-200 hover:border-[#9e09eb]/60 hover:bg-[#9e09eb]/15 hover:text-white"
                style={{
                  animation: `fadeInUp 0.3s ease forwards ${idx * 0.05}s`,
                }}
              >
                <span className="text-[#9e09eb] opacity-60 transition-opacity group-hover:opacity-100 mr-2 text-xs">
                  0{idx + 1}.
                </span>
                {item.label}
              </a>
            ))}

            <div className="mt-6 flex items-center justify-center gap-4 text-xs text-slate-400">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#9e09eb] animate-ping" />
              <span>ROHITH PORTFOLIO</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}