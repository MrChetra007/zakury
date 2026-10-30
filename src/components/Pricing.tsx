import { ArrowUpRight, Check, Clock3, Sparkles } from "lucide-react";
import { pricingSection } from "../data/site";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const planPrefill = [
  { type: 0, budget: 0 },
  { type: 0, budget: 1 },
  { type: 0, budget: 2 },
  { type: 2, budget: 4 },
];

const carePrefill = { type: 4, budget: 4 };

function requestPrefill(detail: { type: number; budget: number }) {
  window.dispatchEvent(new CustomEvent("zakury:prefill", { detail }));
}

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="relative border-t border-line py-20 md:py-28">
      <div className="container-luxe">
        <SectionHeading
          kicker={pricingSection.kicker}
          title={t(pricingSection.title)}
          description={pricingSection.description}
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pricingSection.plans.map((plan, index) => (
            <Reveal key={plan.name.en} delay={index * 0.07} className="h-full">
              <article
                className={`relative flex h-full flex-col border p-6 transition-all duration-500 md:p-7 ${
                  plan.featured
                    ? "border-champagne/60 bg-gradient-to-b from-champagne/[0.08] via-coal/60 to-transparent shadow-gold"
                    : "border-line bg-coal/30 hover:border-champagne/30"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-6 inline-flex items-center gap-1.5 bg-champagne px-3 py-1 text-[0.52rem] font-bold uppercase tracking-[0.18em] text-ink">
                    <Sparkles className="h-3 w-3" />
                    {t(pricingSection.popular)}
                  </span>
                )}

                <h3 className="font-display text-2xl font-light text-porcelain">
                  {t(plan.name)}
                </h3>
                <span
                  className={`mt-3 inline-flex w-fit items-center gap-1.5 border px-2.5 py-1 text-[0.5rem] font-semibold uppercase tracking-[0.14em] ${
                    plan.model === "backend"
                      ? "border-champagne/40 bg-champagne/10 text-champagne"
                      : "border-line text-muted"
                  }`}
                >
                  {t(
                    plan.model === "backend"
                      ? pricingSection.backendLabel
                      : pricingSection.staticLabel,
                  )}
                </span>
                <p className="mt-3 min-h-[3.4em] text-[0.78rem] leading-relaxed text-muted">
                  {t(plan.description)}
                </p>

                <div className="mt-6 flex items-baseline gap-2 border-b border-line pb-6">
                  <span className="font-display text-[2.6rem] font-light leading-none text-champagne">
                    {plan.price}
                  </span>
                  <span className="text-[0.6rem] uppercase tracking-[0.14em] text-muted">
                    {t(plan.billing)}
                  </span>
                </div>

                {plan.model === "backend" && (
                  <p className="mt-3 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-champagne/80">
                    {t(pricingSection.requiredCare)}
                  </p>
                )}

                <p className="mt-4 flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.12em] text-muted">
                  <Clock3 className="h-3.5 w-3.5 text-champagne/70" />
                  {t(plan.delivery)}
                </p>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature.en} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-champagne" />
                      <span className="text-[0.78rem] leading-relaxed text-sand/70">
                        {t(feature)}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={() => requestPrefill(planPrefill[index] ?? planPrefill[0])}
                  className={`mt-7 w-full justify-center ${
                    plan.featured ? "btn-gold" : "btn-ghost"
                  }`}
                >
                  {plan.price.startsWith("$600") && !plan.featured
                    ? t(pricingSection.request)
                    : t(pricingSection.choose)}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-7 flex items-start justify-center gap-2 text-center">
          <span className="mt-1.5 h-1 w-1 shrink-0 rotate-45 bg-champagne/60" />
          <p className="text-[0.62rem] uppercase tracking-[0.14em] text-muted/70">
            {t(pricingSection.note)}
          </p>
        </Reveal>

        <div className="mt-20 border border-line bg-coal/25 p-6 md:p-9">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
            <div>
              <span className="eyebrow">{t(pricingSection.maintenanceKicker)}</span>
              <h3 className="mt-4 font-display text-3xl font-light text-porcelain">
                {t(pricingSection.maintenanceTitle)}
              </h3>
              <p className="mt-3 text-[0.84rem] leading-[1.8] text-muted">
                {t(pricingSection.maintenanceDesc)}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {pricingSection.maintenance.map((plan) => (
                <article
                  key={plan.name.en}
                  className={`flex flex-col border p-5 ${
                    plan.featured
                      ? "border-champagne/40 bg-champagne/[0.04]"
                      : "border-line bg-ink/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-display text-xl font-light text-porcelain">
                      {t(plan.name)}
                    </h4>
                    <div className="text-right">
                      <span className="font-display text-2xl font-light text-champagne">
                        {plan.price}
                      </span>
                      <span className="block text-[0.52rem] uppercase tracking-[0.12em] text-muted">
                        {t(pricingSection.perMonth)}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`mt-3 inline-flex w-fit items-center border px-2 py-0.5 text-[0.48rem] font-semibold uppercase tracking-[0.12em] ${
                      plan.featured
                        ? "border-champagne/40 bg-champagne/10 text-champagne"
                        : "border-line text-muted"
                    }`}
                  >
                    {t(plan.badge)}
                  </span>
                  <ul className="mt-4 flex-1 space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature.en} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-3 w-3 shrink-0 text-champagne/80" />
                        <span className="text-[0.72rem] leading-relaxed text-muted">
                          {t(feature)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    onClick={() => requestPrefill(carePrefill)}
                    className="link-arrow mt-5"
                  >
                    {t(pricingSection.choose)}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
