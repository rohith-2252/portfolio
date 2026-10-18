import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { CONTACT } from "../data";
import ShutterGlyphFooter from "./interactive-component/ShutterGlyphFooter";
import emailjs from "@emailjs/browser";
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
        background="#000000ff"
        ink="#9e09eb"
      />
    </div>
  );
}
