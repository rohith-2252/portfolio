import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../data";
import { SectionHeading } from "./Education";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something"
          subtitle="Have a project or opportunity in mind? I'd love to hear from you."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="glass rounded-3xl p-7"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field
                label="Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                required
              />
            </div>
            <div className="mt-4">
              <Field
                label="Subject"
                value={form.subject}
                onChange={(v) => setForm({ ...form, subject: v })}
              />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-medium text-slate-400">
                Message
              </label>
              <textarea
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-sky-400/50"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="glow-btn mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-sky-600 px-6 py-3 text-sm font-semibold text-ink-950"
            >
              <SendIcon />
              {status === "sent" ? "Message Sent!" : "Send Message"}
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <ContactCard icon={<MailIcon />} label="Email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
            <ContactCard icon={<PhoneIcon />} label="Phone" value={CONTACT.phone} href={`tel:${CONTACT.phoneHref}`} />
            <ContactCard icon={<LinkIcon />} label="Portfolio" value={CONTACT.portfolio} href={CONTACT.portfolioHref} />
            <ContactCard icon={<LinkedInIcon />} label="LinkedIn" value={CONTACT.linkedin} href={CONTACT.linkedinHref} />
            <ContactCard icon={<GitHubIcon />} label="GitHub" value={CONTACT.github} href={CONTACT.githubHref} />

            <div className="glass flex h-32 items-center justify-center rounded-2xl text-sm text-slate-500">
              <MapIcon /> <span className="ml-2">Map preview</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text", required }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-slate-400">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-sky-400/50"
      />
    </div>
  );
}

function ContactCard({ icon, label, value, href }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      whileHover={{ x: 4 }}
      className="group relative flex items-center gap-4 overflow-hidden rounded-2xl glass px-5 py-4 transition-colors hover:border-sky-400/30"
    >
      <span className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-sky-400/20 to-transparent transition-all duration-300 group-hover:h-full" />
      <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-ink-950">
        {icon}
      </span>
      <span className="relative z-10">
        <span className="block text-xs text-slate-400">{label}</span>
        <span className="block text-sm font-semibold text-white">{value}</span>
      </span>
    </motion.a>
  );
}

function SendIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2.1L8 9.7a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2.3z" />
    </svg>
  );
}
function LinkIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3h7v7M21 3l-9 9M9 21H3v-6M3 21l9-9" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.94 3.2 9.13 7.65 10.6.56.1.77-.24.77-.53v-2.1c-3.11.68-3.77-1.34-3.77-1.34-.5-1.28-1.24-1.63-1.24-1.63-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.94.1-.73.4-1.22.72-1.5-2.49-.28-5.1-1.24-5.1-5.54 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.1-2.96 0 0 .95-.3 3.1 1.14a10.7 10.7 0 015.66 0c2.16-1.44 3.1-1.14 3.1-1.14.6 1.54.22 2.68.1 2.96.73.78 1.16 1.78 1.16 3 0 4.31-2.62 5.25-5.12 5.53.4.35.76 1.04.76 2.1v3.11c0 .3.2.64.78.53 4.44-1.48 7.64-5.66 7.64-10.6C23.02 5.24 18.27.5 12 .5z" />
    </svg>
  );
}
function MapIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 20l-6-3V4l6 3 6-3 6 3v13l-6-3-6 3z" /><path d="M9 7v13M15 4v13" />
    </svg>
  );
}
