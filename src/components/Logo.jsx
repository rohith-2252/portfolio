/**
 * Logo component — reusable anywhere (navbar, footer, drawer).
 * Uses /public/logo_dev.png (served from "/logo_dev.png").
 *
 * <Logo />                       -> default
 * <Logo name="yourname" />       -> change the brand text
 * <Logo href="#home" />          -> where it links to
 * <Logo textClassName="hidden lg:inline" /> -> hide the text on small widths, keep the image
 */
export default function Logo({
  name = "kodo",
  tagline = "Labs",
  href = "#app",
  className = "",
  textClassName = "",
  src = "/logo_nav.png",
  onClick,
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={`${name} ${tagline} – home`}
      className={`group inline-flex shrink-0 items-center gap-2.5 ${className}`}
    >
      {/* logo image from the public folder */}
      <img
        src={src}
        alt=""
        width={36}
        height={36}
        draggable={false}
        className="
          h-9 w-9 shrink-0 select-none rounded-xl object-contain
          drop-shadow-[0_0_10px_rgba(158,9,235,0.55)]
          transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[-4deg]
        "
      />

      {/* <span
        className={`text-lg font-extrabold leading-none tracking-tight text-white ${textClassName}`}
      >
        {name}
        <span className="ml-1 font-normal italic text-[#d27bff]">{tagline}</span>
      </span> */}
    </a>
  );
}
