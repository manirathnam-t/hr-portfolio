import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle, id }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
      >
        {title}
      </h2>
      <div
        className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-accent to-accent2"
        aria-hidden="true"
      />
      {subtitle && (
        <p className="mt-4 text-base text-muted sm:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
