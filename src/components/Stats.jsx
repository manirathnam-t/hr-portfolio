import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { stats } from "../data/portfolioData";
import { Icon } from "./icons";

function Counter({ to, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    let current = 0;
    const id = setInterval(() => {
      current += 1;
      setN(current);
      if (current >= to) clearInterval(id);
    }, 180);
    return () => clearInterval(id);
  }, [inView, reduce, to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      aria-label="Professional snapshot"
      className="relative px-4 pb-8 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass flex min-h-[10rem] flex-col justify-between p-6"
          >
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
              <Icon name={s.icon} size={20} />
            </span>
            <div className="mt-4">
              <p
                className={`font-extrabold text-accent ${s.kind === "count" ? "text-3xl" : "text-xl leading-tight"}`}
              >
                {s.kind === "count" ? (
                  <Counter to={s.value} suffix={s.suffix} />
                ) : (
                  s.value
                )}
              </p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
