import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  CircleDot,
  Layers,
  X,
} from "lucide-react";
import { useEffect } from "react";
import {
  categoryLabels,
  statusLabels,
  type Project,
  type ProjectStatus,
} from "../data/projects";
import { workSection } from "../data/site";
import { useLanguage } from "../i18n/LanguageContext";

const statusStyles: Record<ProjectStatus, string> = {
  live: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  published: "border-champagne/40 bg-champagne/10 text-champagne-light",
  pilot: "border-sky-400/30 bg-sky-400/10 text-sky-300",
  completed: "border-line bg-white/[0.03] text-muted",
};

type ProjectDialogProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const { t } = useLanguage();

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/90 p-0 backdrop-blur-md sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-dialog-title"
    >
      <motion.div
        className="relative max-h-[94vh] w-full max-w-4xl overflow-y-auto overflow-x-hidden border border-champagne/25 bg-coal shadow-soft"
        initial={{ y: 40, opacity: 0, scale: 0.985 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 30, opacity: 0, scale: 0.985 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-[16/8] min-h-[240px] w-full overflow-hidden bg-graphite">
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-display text-[9rem] font-light leading-none text-champagne/10">
              {project.monogram}
            </span>
          </div>
          <img
            src={project.image}
            alt=""
            className="relative h-full w-full object-cover opacity-70"
            onError={(event) => {
              event.currentTarget.style.opacity = "0";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/40 to-ink/20" />
          <button
            type="button"
            onClick={onClose}
            autoFocus
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-line bg-ink/70 text-porcelain backdrop-blur transition-colors hover:border-champagne/60 hover:text-champagne"
            aria-label={t(workSection.close)}
          >
            <X className="h-5 w-5" />
          </button>
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-9">
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.16em] ${statusStyles[project.status]}`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse-dot" />
                {t(statusLabels[project.status])}
              </span>
              <span className="chip !border-champagne/25 !text-sand/80">
                {t(categoryLabels[project.category])}
              </span>
            </div>
            <h2
              id="project-dialog-title"
              className="mt-4 font-display text-4xl font-light text-porcelain md:text-5xl"
            >
              {project.name}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-sand/75">
              {t(project.tagline)}
            </p>
          </div>
        </div>

        <div className="p-6 md:p-9">
          <div className="grid gap-5 border-b border-line pb-7 sm:grid-cols-3">
            <div>
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-muted">
                {t(workSection.discipline)}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-porcelain">
                <Layers className="h-3.5 w-3.5 text-champagne" />
                {t(categoryLabels[project.category])}
              </p>
            </div>
            <div>
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-muted">
                {t(workSection.year)}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-porcelain">
                <CalendarDays className="h-3.5 w-3.5 text-champagne" />
                {project.year}
              </p>
            </div>
            <div>
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-muted">
                {t(workSection.status)}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-porcelain">
                <CircleDot className="h-3.5 w-3.5 text-champagne" />
                {t(statusLabels[project.status])}
              </p>
            </div>
          </div>

          <p className="mt-7 text-[0.95rem] leading-[1.9] text-sand/80">
            {t(project.description)}
          </p>

          <div className="mt-8">
            <h3 className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-champagne">
              {t(workSection.features)}
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature.en} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-champagne/30">
                    <Check className="h-2.5 w-2.5 text-champagne" />
                  </span>
                  <span className="text-[0.83rem] leading-relaxed text-muted">
                    {t(feature)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-champagne">
              {t(workSection.stack)}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3 border-t border-line pt-7">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                {t(workSection.viewLive)}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.secondaryLink && (
              <a
                href={project.secondaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                {project.secondaryLabel}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            <a
              href="#contact"
              onClick={onClose}
              className="link-arrow ml-auto"
            >
              {t(workSection.similar)}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
