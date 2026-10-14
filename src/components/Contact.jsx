import { motion } from "framer-motion";
import { Mail, Phone, MapPin, User } from "lucide-react";
import { contact } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import { LinkedInIcon } from "./icons";

const rows = [
  { icon: User, label: "Name", value: contact.name },
  { icon: MapPin, label: "Location", value: contact.location },
  { icon: Mail, label: "Email", value: contact.email },
  { icon: LinkedInIcon, label: "LinkedIn", value: contact.linkedin },
  { icon: Phone, label: "Contact number", value: contact.phone },
];

const btn =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-extrabold tracking-widest";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeading
        id="contact-title"
        eyebrow="Get In Touch"
        title="STAY CONNECT"
        subtitle={contact.heading}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="glass grid gap-8 p-6 sm:p-10 lg:grid-cols-2"
      >
        <div>
          <p className="text-base leading-relaxed text-muted">{contact.text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`mailto:${contact.email}`}
              className={`${btn} bg-gradient-to-r from-accent to-accent2 text-bg`}
            >
              <Mail size={16} aria-hidden="true" /> SEND AN EMAIL
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btn} border border-accent text-accent hover:bg-accent/10`}
            >
              <LinkedInIcon width={16} height={16} />
              LINKEDIN
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={contact.phoneHref}
              className={`${btn} border border-line text-ink hover:border-accent/50`}
            >
              <Phone size={16} aria-hidden="true" /> CALL ME
            </motion.a>
          </div>
        </div>

        <dl className="space-y-5">
          {rows.map(({ icon: I, label, value }) => (
            <div key={label} className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <I size={18} width={18} height={18} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted">
                  {label}
                </dt>
                <dd className="break-words text-sm font-semibold text-ink sm:text-base">
                  {value}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
}
