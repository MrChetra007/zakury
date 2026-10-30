import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, ui } from "../data/site";
import { useLanguage } from "../i18n/LanguageContext";
import { Logo } from "./Logo";

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["top", ...nav.map((item) => item.id)];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.05, 0.25, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-ink/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-luxe flex h-[78px] items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className={`group relative text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-colors ${
                  active === item.id ? "text-champagne" : "text-sand/70 hover:text-porcelain"
                }`}
              >
                {t(item.label)}
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-champagne transition-all duration-500 ${
                    active === item.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <div className="flex items-center rounded-full border border-line p-0.5">
              <button
                type="button"
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
                className={`rounded-full px-2.5 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.12em] transition-colors ${
                  lang === "en"
                    ? "bg-champagne text-ink"
                    : "text-muted hover:text-porcelain"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("km")}
                aria-pressed={lang === "km"}
                className={`rounded-full px-2.5 py-1.5 font-khmer text-[0.68rem] font-semibold transition-colors ${
                  lang === "km"
                    ? "bg-champagne text-ink"
                    : "text-muted hover:text-porcelain"
                }`}
              >
                ខ្មែរ
              </button>
            </div>

            <button
              type="button"
              onClick={() => go("contact")}
              className="btn-gold hidden !px-5 !py-3 !text-[0.65rem] sm:inline-flex"
            >
              {t(ui.getInTouch)}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-porcelain transition-colors hover:border-champagne/60 lg:hidden"
              aria-label={t(ui.menu)}
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col bg-ink"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            role="dialog"
            aria-modal="true"
            aria-label={t(ui.menu)}
          >
            <div className="vignette pointer-events-none absolute inset-0" />
            <div className="container-luxe relative flex h-[78px] items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-porcelain"
                aria-label={t(ui.close)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="container-luxe relative flex flex-1 flex-col justify-center pb-16">
              <nav className="flex flex-col divide-y divide-line border-y border-line">
                {nav.map((item, index) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => go(item.id)}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + index * 0.05, duration: 0.5 }}
                    className="group flex items-center justify-between py-5 text-left"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="text-[0.6rem] font-semibold tracking-[0.2em] text-champagne">
                        0{index + 1}
                      </span>
                      <span className="font-display text-3xl font-light text-porcelain transition-colors group-hover:text-champagne">
                        {t(item.label)}
                      </span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted transition-colors group-hover:text-champagne" />
                  </motion.button>
                ))}
              </nav>
              <div className="mt-10 flex flex-col gap-4">
                <button
                  type="button"
                  onClick={() => go("contact")}
                  className="btn-gold w-full"
                >
                  {t(ui.startProject)}
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <p className="text-center text-[0.7rem] uppercase tracking-[0.2em] text-muted">
                  Battambang · Phnom Penh · Cambodia
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
