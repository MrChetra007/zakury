import {
  ArrowUpRight,
  Fingerprint,
  Gauge,
  Gem,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { studio } from "../data/site";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "./Reveal";

const iconMap: Record<string, LucideIcon> = {
  Gem,
  Fingerprint,
  Gauge,
  HeartHandshake,
};

export function Studio() {
  const { t } = useLanguage();

  return (
    <section
      id="studio"
      className="relative overflow-hidden border-t border-line bg-coal/30 py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -left-24 top-1/3 h-[420px] w-[420px] rounded-full border border-champagne/[0.06]" />
      <span className="pointer-events-none absolute -right-10 bottom-0 select-none font-display text-[22rem] font-light leading-none text-champagne/[0.025]">
        P
      </span>

      <div className="container-luxe relative">
        <div className="grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <div>
            <Reveal>
              <span className="eyebrow">{t(studio.kicker)}</span>
              <h2 className="display-lg mt-6 max-w-[16ch] text-balance text-porcelain">
                {t(studio.title)}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl font-display text-[1.35rem] font-light leading-[1.5] text-sand/90">
                {t(studio.lead)}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="body-muted mt-6 max-w-xl">{t(studio.body1)}</p>
              <p className="body-muted mt-4 max-w-xl">{t(studio.body2)}</p>
            </Reveal>

            <Reveal delay={0.2} className="mt-9">
              <div className="relative border-l border-champagne/40 pl-6 md:pl-8">
                <p className="font-display text-2xl font-light italic text-porcelain md:text-3xl">
                  {t(studio.quote)}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center border border-champagne/40 font-display text-[0.7rem] font-semibold text-champagne">
                    SS
                  </span>
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted">
                    {t(studio.quoteBy)}
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.25} className="mt-9">
              <a href="#contact" className="btn-ghost">
                {t(studio.cta)}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                  {t(studio.valuesKicker)}
                </span>
                <span className="text-[0.58rem] uppercase tracking-[0.18em] text-muted/60">
                  {t(studio.est)}
                </span>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2">
              {studio.values.map((value, index) => {
                const Icon = iconMap[value.icon] ?? Gem;
                return (
                  <Reveal
                    key={value.title.en}
                    delay={0.06 * index}
                    className={`group border-b border-line p-6 transition-colors duration-500 hover:bg-champagne/[0.03] md:p-7 ${
                      index % 2 === 0 ? "sm:border-r" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <Icon
                        className="h-5 w-5 text-champagne/80 transition-transform duration-500 group-hover:scale-110"
                        strokeWidth={1.4}
                      />
                      <span className="text-[0.55rem] tracking-[0.2em] text-muted/40">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-7 font-display text-xl font-light text-porcelain">
                      {t(value.title)}
                    </h3>
                    <p className="mt-2.5 text-[0.8rem] leading-[1.75] text-muted">
                      {t(value.description)}
                    </p>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.2} className="mt-8">
              <div className="grid grid-cols-3 divide-x divide-line border border-line">
                {studio.metrics.map((metric) => (
                  <div key={metric.value} className="p-4 text-center">
                    <p className="font-display text-2xl font-light text-champagne">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-[0.52rem] uppercase tracking-[0.14em] text-muted">
                      {t(metric.label)}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
