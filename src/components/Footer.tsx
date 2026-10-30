import { ArrowUp, ArrowUpRight } from "lucide-react";
import { footer, ui } from "../data/site";
import { useLanguage } from "../i18n/LanguageContext";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-coal/20 pt-16">
      <div className="container-luxe">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[0.8rem] leading-[1.85] text-muted">
              {t(footer.blurb)}
            </p>
            <a href="#contact" className="link-arrow mt-6">
              {t(ui.startProject)}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title.en}>
              <h3 className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-champagne">
                {t(column.title)}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => {
                  const external = link.href.startsWith("http");
                  return (
                    <li key={`${column.title.en}-${link.label.en}`}>
                      <a
                        href={link.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="group inline-flex items-center gap-1.5 text-[0.78rem] text-muted transition-colors hover:text-porcelain"
                      >
                        {t(link.label)}
                        {external && (
                          <ArrowUpRight className="h-2.5 w-2.5 text-muted/50 transition-colors group-hover:text-champagne" />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line py-6 text-[0.6rem] uppercase tracking-[0.14em] text-muted/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Zakury Technologies. {t(footer.rights)}
          </p>
          <p className="hidden md:block">{t(footer.location)}</p>
          <div className="flex items-center gap-5">
            <span className="hidden sm:inline">{t(footer.crafted)}</span>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 transition-colors hover:text-champagne"
            >
              {t(ui.backToTop)}
              <span className="grid h-7 w-7 place-items-center rounded-full border border-line transition-colors group-hover:border-champagne/50">
                <ArrowUp className="h-3 w-3" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none select-none overflow-hidden border-t border-line/60">
        <p className="container-luxe -mb-[0.18em] whitespace-nowrap pt-6 font-display text-[clamp(3.5rem,13vw,12rem)] font-light leading-none tracking-[-0.02em] text-champagne/[0.05]">
          Zakury
        </p>
      </div>
    </footer>
  );
}
