/**
 * Logo component — reusable anywhere (navbar, footer, drawer).
 * <Logo />                      -> default
 * <Logo name="yourname" />      -> change the brand text
 * <Logo href="#app" />          -> where it links to
 */
export default function Logo({
  name = "kodo",
  tagline = "Labs",
  href = "#app",
  className = "",
  onClick,
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={`${name} ${tagline} – home`}
      className={`group inline-flex shrink-0 items-center gap-2.5 ${className}`}
    >
      {/* glowing purple badge with a </> glyph */}
      <span
        className="
          grid h-9 w-9 place-items-center rounded-xl
          bg-gradient-to-br from-[#d27bff] via-[#9e09eb] to-[#5d0594]
          shadow-[0_0_18px_rgba(158,9,235,0.55)]
          transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[-4deg]
        "
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="8 7 3 12 8 17" />
          <polyline points="16 7 21 12 16 17" />
          <line x1="14" y1="5" x2="10" y2="19" />
        </svg>
      </span>

      <span className="text-lg font-extrabold leading-none tracking-tight text-white">
        {name}
        <span className="ml-1 font-normal italic text-[#d27bff]">{tagline}</span>
      </span>
    </a>
  );
}
