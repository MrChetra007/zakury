import type { Localized } from "../i18n/LanguageContext";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  kicker: Localized;
  title: string;
  description?: Localized;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const { t } = useLanguage();
  const centered = align === "center";

  return (
    <Reveal
      className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      <span className={`eyebrow ${centered ? "justify-center" : ""}`}>
        {t(kicker)}
      </span>
      <h2 className="display-lg mt-6 text-balance text-porcelain">{title}</h2>
      {description && (
        <p className={`body-muted mt-6 max-w-2xl ${centered ? "mx-auto" : ""}`}>
          {t(description)}
        </p>
      )}
    </Reveal>
  );
}
