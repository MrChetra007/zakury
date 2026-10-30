import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, BadgeCheck, Languages, ShieldCheck } from "lucide-react";
import { hero } from "../data/site";
import { projects } from "../data/projects";
import { useLanguage } from "../i18n/LanguageContext";

const featured = projects[0];

export function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-[110px] md:pb-24"
    >
      <div className="vignette pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(244,239,229,0.14) 1px, transparent 1px)",
          backgroundSize: "25% 100%",
          maskImage: "linear-gradient(to bottom, transparent, black 18%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 80%, transparent)",
        }}
      />
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full border border-champagne/10" />
      <div className="pointer-events-none absolute -right-24 top-24 h-[380px] w-[380px] rounded-full border border-champagne/[0.07]" />

      <div className="container-luxe relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.03fr_0.97fr] lg:gap-10">
          <div>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="eyebrow">{t(hero.eyebrow)}</span>
            </motion.div>

            <motion.h1
              className="display-xl mt-7 max-w-[13ch] text-balance"
              initial={reduce ? false : { opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {t(hero.titleLead)}{" "}
              <em className="gold-text gold-animate font-normal italic">{t(hero.titleAccent)}</em>
            </motion.h1>

            <motion.p
              className="body-muted mt-7 max-w-xl md:text-[1.03rem]"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {t(hero.description)}
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap items-center gap-3.5"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href="#contact" className="btn-gold">
                {t(hero.primaryCta)}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#work" className="btn-ghost">
                {t(hero.secondaryCta)}
                <ArrowDown className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-line pt-6"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.16em] text-sand/65">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-champagne/60 animate-pulse-dot" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-champagne" />
                </span>
                {t(hero.availability)}
              </span>
              <span className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.16em] text-sand/65">
                <Languages className="h-3.5 w-3.5 text-champagne/80" />
                {t(hero.languagePair)}
              </span>
            </motion.div>
          </div>

          <motion.div
            className="relative mx-auto w-full max-w-[520px] lg:ml-auto"
            initial={reduce ? false : { opacity: 0, scale: 0.97, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute -inset-5 rotate-[3deg] border border-champagne/20" />
            <div className="relative overflow-hidden border border-champagne/30 bg-coal shadow-soft">
              <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                <span className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-champagne">
                  {t(hero.cardEyebrow)}
                </span>
                <span className="flex items-center gap-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-emerald-300/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                  {t(hero.cardLive)}
                </span>
              </div>

              <div className="relative aspect-[5/4] overflow-hidden bg-graphite">
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display text-8xl font-light text-champagne/15">
                    {featured.monogram}
                  </span>
                </div>
                <img
                  src={featured.image}
                  alt={featured.name}
                  className="relative h-full w-full object-cover opacity-80 transition-transform duration-[1400ms] hover:scale-105"
                  loading="eager"
                  onError={(event) => {
                    event.currentTarget.style.opacity = "0";
                  }}
                />
                <div className="image-veil absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-champagne">
                    {t(hero.cardMeta)}
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-light text-porcelain">
                    {featured.name}
                  </h2>
                  <p className="mt-1 max-w-xs text-[0.78rem] leading-relaxed text-sand/70">
                    {t(featured.tagline)}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <div className="flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.14em] text-muted">
                  <BadgeCheck className="h-3.5 w-3.5 text-champagne" />
                  {t(hero.khqr)}
                </div>
                <div className="flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.14em] text-muted">
                  <ShieldCheck className="h-3.5 w-3.5 text-champagne" />
                  {t(hero.secureBilling)}
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -right-3 top-16 hidden border border-line bg-ink/95 px-4 py-3 shadow-soft backdrop-blur md:block"
              animate={reduce ? undefined : { y: [0, 7, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-muted">
                {t(hero.builtFor)}
              </p>
              <p className="mt-1 font-display text-lg text-porcelain">{t(hero.builtForValue)}</p>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-16 flex items-center justify-between">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-sand/60 transition-colors hover:text-champagne"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full border border-line transition-colors group-hover:border-champagne/60">
              <ArrowDown className="h-3.5 w-3.5" />
            </span>
            {t(hero.scroll)}
          </a>
          <span className="hidden text-[0.58rem] uppercase tracking-[0.24em] text-sand/50 sm:block">
            {t(hero.cardNote)}
          </span>
        </div>
      </div>
    </section>
  );
}
