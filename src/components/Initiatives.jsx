import { motion } from "framer-motion";
import { initiatives } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import { Icon } from "./icons";

export default function Initiatives() {
  return (
    <section
      id="initiatives"
      aria-labelledby="initiatives-title"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeading
        id="initiatives-title"
        eyebrow="COMMUNICATION"
        title="LANGUAGES KNOWN"
        subtitle={initiatives.subtitle}
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {initiatives.items.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass p-6"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/30">
              <Icon name={item.icon} size={24} />
            </span>
            <h3 className="mt-5 text-base font-extrabold uppercase tracking-wide text-ink">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
