import { motion } from "framer-motion";
import { about } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeading
        id="about-title"
        eyebrow="Who I Am"
        title="ABOUT ME"
        subtitle={about.subtitle}
      />
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-base leading-relaxed text-muted sm:text-lg"
        >
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 30)}>{p}</p>
          ))}
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass divide-y divide-line self-start p-2"
        >
          {about.facts.map((f) => (
            <div key={f.label} className="px-4 py-4">
              <dt className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent">
                {f.label}
              </dt>
              <dd className="mt-1 text-base font-semibold text-ink">
                {f.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
