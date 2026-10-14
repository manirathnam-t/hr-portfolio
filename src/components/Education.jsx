import { motion } from "framer-motion";
import { education } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import { Icon } from "./icons";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeading
        id="education-title"
        eyebrow="Academics"
        title="EDUCATION"
      />
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((e, i) => (
          <motion.article
            key={e.degree}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -4 }}
            className="glass p-6"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/30">
              <Icon name={e.icon} size={24} />
            </span>
            <h3 className="mt-5 text-lg font-extrabold text-ink">{e.degree}</h3>
            {e.specialization && (
              <p className="mt-1 text-sm font-semibold text-accent">
                Specialization: {e.specialization}
              </p>
            )}
            <p className="mt-3 text-sm text-muted">{e.institution}</p>
            <p className="mt-1 text-sm font-semibold text-ink/90">{e.period}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
