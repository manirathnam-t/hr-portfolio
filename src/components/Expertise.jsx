import { motion } from "framer-motion";
import { expertise } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import { Icon } from "./icons";

export default function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-title"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeading
        id="expertise-title"
        eyebrow="Impact"
        title="INITIATIVES & AREAS OF IMPACT"
        subtitle={expertise.subtitle}
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {expertise.items.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass flex flex-col p-6"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/30">
              <Icon name={item.icon} size={24} />
            </span>
            <h3 className="mt-5 text-lg font-extrabold tracking-wide text-ink">
              {item.title.toUpperCase()}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {item.skills.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-line bg-bg/40 px-3 py-1 text-xs font-medium text-ink/90"
                >
                  {s}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
