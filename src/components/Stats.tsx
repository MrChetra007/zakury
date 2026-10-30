import { stats } from "../data/site";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "./Reveal";

export function Stats() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20">
      <div className="container-luxe">
        <div className="grid grid-cols-2 gap-y-10 border-y border-line py-10 md:grid-cols-4 md:py-12">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label.en}
              delay={index * 0.08}
              className={`px-2 md:px-8 ${
                index !== 0 ? "md:border-l md:border-line" : ""
              } ${index % 2 !== 0 ? "border-l border-line" : ""}`}
            >
              <p className="font-display text-[clamp(2.4rem,4vw,3.6rem)] font-light leading-none tracking-tight text-porcelain">
                {stat.value}
                <span className="text-champagne">.</span>
              </p>
              <p className="mt-3 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-muted">
                {t(stat.label)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
