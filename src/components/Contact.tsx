import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Copy,
  MapPin,
  Phone,
  Send,
  type LucideIcon,
} from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { contactSection, telegram } from "../data/site";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "./Reveal";

const channelIcons: Record<string, LucideIcon> = {
  Send,
  Phone,
  MapPin,
};

async function copyText(value: string) {
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
}

type FormState = {
  name: string;
  business: string;
  contact: string;
  type: string;
  budget: string;
  message: string;
};

const emptyForm: FormState = {
  name: "",
  business: "",
  contact: "",
  type: "",
  budget: "",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

function looksValidContact(value: string) {
  const trimmed = value.trim();
  const telegramPattern = /^@?[a-zA-Z][a-zA-Z0-9_]{3,}$/;
  const digits = trimmed.replace(/[^\d]/g, "");
  return telegramPattern.test(trimmed) || digits.length >= 8;
}

export function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [inquiry, setInquiry] = useState("");

  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<{ type?: number; budget?: number }>).detail;
      if (!detail) return;
      setForm((current) => ({
        ...current,
        type: detail.type !== undefined ? String(detail.type) : current.type,
        budget: detail.budget !== undefined ? String(detail.budget) : current.budget,
      }));
      setSubmitted(false);
    };
    window.addEventListener("zakury:prefill", handler);
    return () => window.removeEventListener("zakury:prefill", handler);
  }, []);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = t(contactSection.form.invalid);
    if (!looksValidContact(form.contact)) next.contact = t(contactSection.form.contactError);
    if (form.message.trim().length < 10) next.message = t(contactSection.form.invalid);
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    const typeLabel =
      form.type !== ""
        ? t(contactSection.form.typeOptions[Number(form.type)] ?? contactSection.form.typeOptions[0])
        : "—";
    const budgetLabel =
      form.budget !== ""
        ? t(
            contactSection.form.budgetOptions[Number(form.budget)] ??
              contactSection.form.budgetOptions[0],
          )
        : "—";

    const lines = [
      `${t(contactSection.form.name)}: ${form.name}`,
      `${t(contactSection.form.business)}: ${form.business || "—"}`,
      `${t(contactSection.form.contact)}: ${form.contact}`,
      `${t(contactSection.form.type)}: ${typeLabel}`,
      `${t(contactSection.form.budget)}: ${budgetLabel}`,
      "",
      `${t(contactSection.form.message)}:`,
      form.message,
      "",
      "— Sent from Zakury Technologies",
    ];

    const text = lines.join("\n");
    setInquiry(text);
    void copyText(text);
    setSubmitted(true);
    window.open(telegram.url, "_blank", "noopener,noreferrer");
  };

  const copyInquiry = async () => {
    await copyText(inquiry);
    setCopied(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line py-20 md:py-28"
    >
      <div className="vignette pointer-events-none absolute inset-0" />
      <span className="pointer-events-none absolute -right-16 top-16 select-none font-display text-[18rem] font-light leading-none text-champagne/[0.025]">
        C
      </span>

      <div className="container-luxe relative">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="eyebrow">{t(contactSection.kicker)}</span>
              <h2 className="display-lg mt-6 max-w-[15ch] text-balance text-porcelain">
                {t(contactSection.title)}
              </h2>
              <p className="body-muted mt-6 max-w-md">{t(contactSection.description)}</p>
            </Reveal>

            <Reveal delay={0.1} className="mt-7">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {contactSection.trust.map((item) => (
                  <span
                    key={item.en}
                    className="inline-flex items-center gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted"
                  >
                    <Check className="h-3 w-3 text-champagne" />
                    {t(item)}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15} className="mt-10">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                {t(contactSection.channelsTitle)}
              </p>
              <div className="mt-4 border-t border-line">
                {contactSection.channels.map((channel) => {
                  const Icon = channelIcons[channel.icon] ?? Send;
                  const external = channel.href.startsWith("http");
                  const value =
                    typeof channel.value === "string" ? channel.value : t(channel.value);
                  return (
                    <a
                      key={channel.label.en}
                      href={channel.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 border-b border-line py-4"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-champagne/80 transition-colors group-hover:border-champagne/50 group-hover:bg-champagne/10">
                        <Icon className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-muted">
                          {t(channel.label)}
                        </span>
                        <span className="mt-0.5 block truncate text-[0.86rem] text-porcelain transition-colors group-hover:text-champagne-light">
                          {value}
                        </span>
                      </span>
                      <span className="hidden text-[0.58rem] uppercase tracking-[0.12em] text-muted/60 sm:block">
                        {t(channel.note)}
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:text-champagne" />
                    </a>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.2} className="mt-7">
              <div className="flex items-center gap-5">
                {contactSection.social.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted transition-colors hover:text-champagne"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative border border-champagne/25 bg-coal/70 p-6 shadow-soft md:p-9">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/70 to-transparent" />

              {submitted ? (
                <div className="flex min-h-[520px] flex-col items-start justify-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-champagne/40 bg-champagne/10">
                    <Check className="h-6 w-6 text-champagne" />
                  </span>
                  <h3 className="mt-7 font-display text-3xl font-light text-porcelain">
                    {t(contactSection.form.successTitle)}
                  </h3>
                  <p className="mt-3 max-w-sm text-[0.86rem] leading-[1.8] text-muted">
                    {t(contactSection.form.successBody)}
                  </p>

                  <div className="mt-7 flex w-full flex-wrap items-center gap-3 border border-line bg-ink/50 p-4">
                    <Send className="h-4 w-4 text-champagne" />
                    <span className="flex-1 text-[0.86rem] text-porcelain">
                      Telegram · {telegram.display}
                    </span>
                    <button
                      type="button"
                      onClick={copyInquiry}
                      className="inline-flex items-center gap-2 border border-line px-3 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-muted transition-colors hover:border-champagne/50 hover:text-champagne"
                    >
                      {copied ? (
                        <Check className="h-3.5 w-3.5 text-champagne" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                      {copied ? t(contactSection.form.copied) : t(contactSection.form.copy)}
                    </button>
                  </div>

                  <a
                    href={telegram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold mt-5 justify-center"
                  >
                    {t(contactSection.form.openTelegram)}
                    <Send className="h-4 w-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setForm(emptyForm);
                      setInquiry("");
                      setSubmitted(false);
                    }}
                    className="mt-6 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-champagne underline-offset-4 hover:underline"
                  >
                    {t(contactSection.form.reset)}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="field-label">
                        {t(contactSection.form.name)}
                        <span className="text-champagne">*</span>
                      </label>
                      <input
                        id="contact-name"
                        className="input-luxe"
                        value={form.name}
                        onChange={(event) => update("name", event.target.value)}
                        placeholder={t(contactSection.form.namePlaceholder)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "error-name" : undefined}
                      />
                      {errors.name && (
                        <p id="error-name" className="mt-1.5 text-[0.66rem] text-red-400">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-business" className="field-label">
                        {t(contactSection.form.business)}
                      </label>
                      <input
                        id="contact-business"
                        className="input-luxe"
                        value={form.business}
                        onChange={(event) => update("business", event.target.value)}
                        placeholder={t(contactSection.form.businessPlaceholder)}
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="contact-detail" className="field-label">
                      {t(contactSection.form.contact)}
                      <span className="text-champagne">*</span>
                    </label>
                    <input
                      id="contact-detail"
                      className="input-luxe"
                      value={form.contact}
                      onChange={(event) => update("contact", event.target.value)}
                      placeholder={t(contactSection.form.contactPlaceholder)}
                      aria-invalid={Boolean(errors.contact)}
                      aria-describedby={errors.contact ? "error-contact" : undefined}
                    />
                    {errors.contact && (
                      <p id="error-contact" className="mt-1.5 text-[0.66rem] text-red-400">
                        {errors.contact}
                      </p>
                    )}
                  </div>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-type" className="field-label">
                        {t(contactSection.form.type)}
                      </label>
                      <div className="relative">
                        <select
                          id="contact-type"
                          className="input-luxe appearance-none pr-9"
                          value={form.type}
                          onChange={(event) => update("type", event.target.value)}
                        >
                          <option value="">—</option>
                          {contactSection.form.typeOptions.map((option, index) => (
                            <option key={option.en} value={index}>
                              {t(option)}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-budget" className="field-label">
                        {t(contactSection.form.budget)}
                      </label>
                      <div className="relative">
                        <select
                          id="contact-budget"
                          className="input-luxe appearance-none pr-9"
                          value={form.budget}
                          onChange={(event) => update("budget", event.target.value)}
                        >
                          <option value="">—</option>
                          {contactSection.form.budgetOptions.map((option, index) => (
                            <option key={option.en} value={index}>
                              {t(option)}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="contact-message" className="field-label">
                      {t(contactSection.form.message)}
                      <span className="text-champagne">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      className="input-luxe resize-none"
                      value={form.message}
                      onChange={(event) => update("message", event.target.value)}
                      placeholder={t(contactSection.form.messagePlaceholder)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "error-message" : undefined}
                    />
                    {errors.message && (
                      <p id="error-message" className="mt-1.5 text-[0.66rem] text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-[15rem] text-[0.6rem] leading-relaxed text-muted/70">
                      {t(contactSection.form.required)} · Telegram {telegram.display}
                    </p>
                    <button type="submit" className="btn-gold justify-center">
                      {t(contactSection.form.submit)}
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
