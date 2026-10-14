import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { contact, footerLinks, profile } from "../data/portfolioData";
import { LinkedInIcon } from "./icons";

const go = (id) =>
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-lg font-extrabold text-ink">{profile.name}</p>
          <p className="text-sm text-muted">
            HR & Talent Acquisition Professional
          </p>
          <p className="mt-1 text-sm italic text-accent">
            "{profile.footerTagline}"
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    go(l.id);
                  }}
                  className="text-sm font-semibold text-muted transition-colors hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sanjaysena D. on LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <LinkedInIcon width={18} height={18} />
          </a>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center rounded-full border border-accent text-accent transition-colors hover:bg-accent hover:text-bg"
          >
            <ArrowUp size={18} aria-hidden="true" />
          </motion.button>
        </div>
      </div>
      <p className="border-t border-line py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} {profile.name} All rights reserved.
      </p>
    </footer>
  );
}
