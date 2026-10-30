import { Code2, Compass, PenTool, Rocket, type LucideIcon } from "lucide-react";
import { processSection } from "../data/site";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: LucideIcon[] = [Compass, PenTool, Code2, Rocket];

export function Process() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 md:py-28">
      <div className="container-luxe">
        <SectionHeading
          kicker={processSection.kicker}
          title={t(processSection.title)}
          description={processSection.description}
          align="center"
        />

        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {processSection.steps.map((step, index) => {
            const Icon = icons[index] ?? Compass;
            return (
              <Reveal key={step.no} delay={index * 0.08}>
                <article className="group relative flex h-full flex-col bg-ink p-6 transition-colors duration-500 hover:bg-coal md:p-8">
                  <span className="absolute inset-x-0 top-0 h-px w-0 bg-champagne/70 transition-all duration-700 group-hover:w-full" />
                  <div className="flex items-center justify-between">
                    <span className="font-display text-4xl font-light text-champagne/30 transition-colors duration-500 group-hover:text-champagne/70">
                      {step.no}
                    </span>
                    <Icon
                      className="h-5 w-5 text-muted transition-colors duration-500 group-hover:text-champagne"
                      strokeWidth={1.4}
                    />
                  </div>
                  <h3 className="mt-10 font-display text-2xl font-light text-porcelain">
                    {t(step.title)}
                  </h3>
                  <p className="mt-3 text-[0.82rem] leading-[1.8] text-muted">
                    {t(step.description)}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
