import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";
import { faqSection, ui } from "../data/site";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Faq() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-t border-line py-20 md:py-28">
      <div className="container-luxe">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              kicker={faqSection.kicker}
              title={t(faqSection.title)}
              description={faqSection.description}
            />
            <Reveal delay={0.15} className="mt-8">
              <div className="border border-line bg-coal/40 p-6">
                <p className="font-display text-xl font-light text-porcelain">
                  {t(faqSection.asideTitle)}
                </p>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-muted">
                  {t(faqSection.asideBody)}
                </p>
                <a href="#contact" className="link-arrow mt-5">
                  {t(ui.getInTouch)}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="border-t border-line">
            {faqSection.faqs.map((item, index) => {
              const isOpen = open === index;
              return (
                <Reveal key={item.q.en} delay={index * 0.04}>
                  <div className="border-b border-line">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                    >
                      <span className="flex items-start gap-4">
                        <span className="mt-1 text-[0.58rem] font-semibold tracking-[0.18em] text-champagne/50">
                          0{index + 1}
                        </span>
                        <span
                          className={`font-display text-xl font-light leading-snug transition-colors duration-300 md:text-[1.45rem] ${
                            isOpen
                              ? "text-champagne-light"
                              : "text-porcelain group-hover:text-champagne-light"
                          }`}
                        >
                          {t(item.q)}
                        </span>
                      </span>
                      <span
                        className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 border-champagne bg-champagne text-ink"
                            : "border-line text-muted group-hover:border-champagne/50 group-hover:text-champagne"
                        }`}
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-2xl pb-6 pl-9 pr-10 text-[0.86rem] leading-[1.9] text-muted">
                            {t(item.a)}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
