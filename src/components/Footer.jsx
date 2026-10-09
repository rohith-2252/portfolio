import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { CONTACT } from "../data";
import ShutterGlyphFooter from "./interactive-component/ShutterGlyphFooter";
export default function Footer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
      <div>
      <ShutterGlyphFooter
        brand="ROHITH"
        company="rohith.co.in"
        since={2023}
        background="#111110"
        ink="#7d05b9"
      />
    </div>
  );
}

function ArrowUp() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.94 3.2 9.13 7.65 10.6.56.1.77-.24.77-.53v-2.1c-3.11.68-3.77-1.34-3.77-1.34-.5-1.28-1.24-1.63-1.24-1.63-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.94.1-.73.4-1.22.72-1.5-2.49-.28-5.1-1.24-5.1-5.54 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.1-2.96 0 0 .95-.3 3.1 1.14a10.7 10.7 0 015.66 0c2.16-1.44 3.1-1.14 3.1-1.14.6 1.54.22 2.68.1 2.96.73.78 1.16 1.78 1.16 3 0 4.31-2.62 5.25-5.12 5.53.4.35.76 1.04.76 2.1v3.11c0 .3.2.64.78.53 4.44-1.48 7.64-5.66 7.64-10.6C23.02 5.24 18.27.5 12 .5z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
    </svg>
  );
}
