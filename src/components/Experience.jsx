import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MapPin, CalendarDays } from "lucide-react";
import { experience } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

function TimelineItem({ item, index }) {
  const [open, setOpen] = useState(Boolean(item.current));
  const panelId = `exp-panel-${index}`;

  return (
    <motion.li
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
      className="relative pl-10 sm:pl-14"
    >
      <span
        aria-hidden="true"
        className={`absolute left-0 top-7 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full border-2 border-accent bg-bg ${
          item.current ? "shadow-[0_0_16px_rgba(39,217,232,0.9)]" : ""
        }`}
        style={{ left: "0.75rem" }}
      >
        <span
          className={`h-2 w-2 rounded-full bg-accent ${item.current ? "animate-pulse" : ""}`}
        />
      </span>

      <div
        className={`glass p-5 sm:p-6 ${item.current ? "border-accent/50 bg-card ring-1 ring-accent/30" : ""}`}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-start justify-between gap-4 text-left"
        >
          <span>
            {item.current && (
              <span className="mb-2 inline-block rounded-full bg-accent/15 px-3 py-0.5 text-[0.65rem] font-bold tracking-[0.2em] text-accent">
                CURRENT ROLE
              </span>
            )}
            <span className="block text-lg font-extrabold text-ink sm:text-xl">
              {item.role}
            </span>
            <span className="mt-0.5 block text-sm font-semibold text-accent sm:text-base">
              {item.organization}
            </span>
            <span className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted sm:text-sm">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={14} aria-hidden="true" />
                {item.dates}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} aria-hidden="true" />
                {item.location}
              </span>
            </span>
          </span>
          <ChevronDown
            size={20}
            aria-hidden="true"
            className={`mt-1 shrink-0 text-accent transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                {item.responsibilities.map((r) => (
                  <li
                    key={r}
                    className="flex gap-3 text-sm leading-relaxed text-muted sm:text-[0.95rem]"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeading
        id="experience-title"
        eyebrow="Career"
        title="PROFESSIONAL JOURNEY"
        subtitle={experience.subtitle}
      />
      <div className="relative">
        <div
          className="absolute bottom-0 top-0 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent"
          style={{ left: "0.75rem" }}
          aria-hidden="true"
        />
        <ol className="space-y-6">
          {experience.items.map((item, i) => (
            <TimelineItem
              key={`${item.organization}-${item.dates}`}
              item={item}
              index={i}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
