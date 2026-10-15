import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  MapPin,
  Briefcase,
  Building2,
  User,
} from "lucide-react";
import { profile } from "../data/portfolioData";

const scrollTo = (id) =>
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

export default function Hero() {
  const [photoOk, setPhotoOk] = useState(true);
  const [resumeMissing, setResumeMissing] = useState(false);

  // Dev/preview servers answer missing files with index.html, so confirm a real PDF exists first.
  const checkResume = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(profile.resume, { method: "HEAD" });
      const type = res.headers.get("content-type") || "";
      if (res.ok && type.includes("pdf")) {
        setResumeMissing(false);
        const a = document.createElement("a");
        a.href = profile.resume;
        a.download = "Sanjaysena_D_Resume.pdf";
        a.click();
        return;
      }
    } catch {
      /* fall through */
    }
    setResumeMissing(true);
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-28"
    >
      <div
        className="bg-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <motion.span
            {...fade(0)}
            className="inline-block rounded-full border border-line bg-card px-4 py-1.5 text-[0.7rem] font-bold tracking-[0.2em] text-accent"
          >
            {profile.badge}
          </motion.span>
          <motion.h1
            {...fade(0.1)}
            className="mt-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            {...fade(0.2)}
            className="mt-3 text-xl font-bold text-accent sm:text-2xl"
          >
            {profile.headline}
          </motion.p>
          <motion.p
            {...fade(0.3)}
            className="mt-4 text-lg font-semibold leading-snug text-ink sm:text-xl"
          >
            {profile.tagline[0]} <br className="hidden sm:block" />
            {profile.tagline[1]}
          </motion.p>
          <motion.div
            {...fade(0.4)}
            className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-muted"
          >
            {profile.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </motion.div>

          <motion.div {...fade(0.5)} className="mt-8 flex flex-wrap gap-3">
            {/* 1st button: GET CV (opens the resume to view in a new tab) */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent2 px-6 py-3 text-xs font-extrabold tracking-widest text-bg shadow-[0_0_24px_-6px_rgba(39,217,232,0.8)]"
            >
              VIEW CV <ArrowRight size={16} aria-hidden="true" />
            </motion.a>

            {/* 2nd button: DOWNLOAD RESUME (unchanged code, only moved up) */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={profile.resume}
              download
              onClick={checkResume}
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-xs font-extrabold tracking-widest text-muted transition-colors hover:border-accent/50 hover:text-ink"
            >
              <Download size={16} aria-hidden="true" /> DOWNLOAD CV
            </motion.a>

            {/* 3rd button: LET'S CONNECT (unchanged code, only moved to the end) */}
            {/* <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("contact")}
              className="rounded-full border border-accent px-6 py-3 text-xs font-extrabold tracking-widest text-accent transition-colors hover:bg-accent/10"
            >
              LET'S CONNECT
            </motion.button> */}

            {/* Message shown only if the resume PDF has not been added yet */}
            {resumeMissing && (
              <p role="status" className="w-full text-xs text-muted">
                Resume not added yet. Place the PDF at{" "}
                <code className="text-accent">
                  public/documents/Sanjaysena_D_Resume.pdf
                </code>{" "}
                (see README).
              </p>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto w-full max-w-sm"
        >
          <div className="relative mx-auto aspect-square w-64 sm:w-72">
            <div
              className="absolute -inset-4 rounded-full border border-accent/30"
              aria-hidden="true"
            />
            <div
              className="absolute -inset-9 rounded-full border border-dashed border-line"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 rounded-full bg-accent/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-accent/60 bg-bg2 shadow-[0_0_40px_-6px_rgba(39,217,232,0.6)]">
              {photoOk ? (
                <img
                  src={profile.photo}
                  alt="Portrait of Sanjaysena D."
                  className="h-full w-full object-cover"
                  width="288"
                  height="288"
                  onError={() => setPhotoOk(false)}
                />
              ) : (
                <div
                  className="grid h-full w-full place-items-center bg-gradient-to-br from-bg2 to-bg"
                  role="img"
                  aria-label="Profile photo placeholder"
                >
                  <div className="text-center">
                    <User
                      size={72}
                      className="mx-auto text-accent/70"
                      aria-hidden="true"
                    />
                    <p className="mt-2 text-3xl font-extrabold tracking-wider text-accent">
                      {profile.monogram}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="glass mt-12 space-y-4 p-5">
            {[
              {
                icon: Briefcase,
                label: "CURRENT ROLE",
                value: profile.currentRole,
              },
              {
                icon: Building2,
                label: "ORGANIZATION",
                value: profile.organization,
              },
              { icon: MapPin, label: "LOCATION", value: profile.location },
            ].map(({ icon: I, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                  <I size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.65rem] font-bold tracking-[0.2em] text-muted">
                    {label}
                  </p>
                  <p className="text-sm font-semibold text-ink">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
