import {
  Check,
  LayoutTemplate,
  PanelsTopLeft,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { services, servicesSection } from "../data/site";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  LayoutTemplate,
  UtensilsCrossed,
  ShoppingBag,
  PanelsTopLeft,
  Smartphone,
  ShieldCheck,
};

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative border-t border-line py-20 md:py-28">
      <div className="container-luxe">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              kicker={servicesSection.kicker}
              title={t(servicesSection.title)}
              description={servicesSection.description}
            />
            <Reveal delay={0.15} className="mt-8">
              <div className="flex items-center gap-4 border-t border-line pt-6">
                <span className="font-display text-5xl font-light text-champagne/25">06</span>
                <p className="max-w-[220px] text-[0.62rem] uppercase leading-relaxed tracking-[0.18em] text-muted">
                  {t(servicesSection.aside)}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="border-t border-line">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] ?? LayoutTemplate;
              return (
                <Reveal key={service.no} delay={index * 0.04}>
                  <article className="group relative border-b border-line py-7 transition-colors duration-500 hover:bg-champagne/[0.025] md:py-8">
                    <span className="absolute left-0 top-0 h-px w-0 bg-champagne/60 transition-all duration-700 group-hover:w-full" />
                    <div className="flex items-start gap-4 md:gap-6">
                      <div className="flex w-8 shrink-0 flex-col items-start gap-5 md:w-10">
                        <span className="text-[0.6rem] font-semibold tracking-[0.2em] text-champagne/70">
                          {service.no}
                        </span>
                        <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-champagne/80 transition-colors duration-500 group-hover:border-champagne/50 group-hover:bg-champagne/10">
                          <Icon className="h-4 w-4" strokeWidth={1.5} />
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                          <h3 className="font-display text-2xl font-light leading-tight text-porcelain transition-colors duration-500 group-hover:text-champagne-light md:text-[1.7rem]">
                            {t(service.title)}
                          </h3>
                          <div className="flex shrink-0 items-baseline gap-1.5 sm:text-right">
                            <span className="text-[0.58rem] uppercase tracking-[0.16em] text-muted">
                              {t(servicesSection.startingAt)}
                            </span>
                            <span className="font-display text-2xl font-light text-champagne">
                              {service.price}
                            </span>
                            <span className="text-[0.58rem] uppercase tracking-[0.12em] text-muted">
                              {t(service.unit)}
                            </span>
                          </div>
                        </div>

                        <p className="mt-2.5 max-w-xl text-[0.86rem] leading-[1.8] text-muted">
                          {t(service.description)}
                        </p>

                        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                          {service.bullets.map((bullet) => (
                            <li
                              key={bullet.en}
                              className="inline-flex items-center gap-2 text-[0.72rem] text-sand/65"
                            >
                              <Check className="h-3 w-3 shrink-0 text-champagne/80" />
                              {t(bullet)}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-5 flex items-center justify-between gap-4">
                          <span className="text-[0.58rem] uppercase tracking-[0.16em] text-muted/60">
                            {t(service.delivery)}
                            {service.monthly ? ` · ${t(service.monthly)}` : ""}
                          </span>
                          <a
                            href="#contact"
                            className="link-arrow opacity-60 transition-opacity group-hover:opacity-100"
                          >
                            {t(servicesSection.discuss)}
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
