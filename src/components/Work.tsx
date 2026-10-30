import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import {
  categoryFilters,
  categoryLabels,
  projects,
  statusLabels,
  type Project,
  type ProjectCategory,
  type ProjectStatus,
} from "../data/projects";
import { workSection } from "../data/site";
import { useLanguage } from "../i18n/LanguageContext";
import { ProjectDialog } from "./ProjectDialog";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const statusStyles: Record<ProjectStatus, string> = {
  live: "border-emerald-400/30 bg-emerald-950/60 text-emerald-300",
  published: "border-champagne/40 bg-ink/70 text-champagne-light",
  pilot: "border-sky-400/30 bg-sky-950/60 text-sky-300",
  completed: "border-line bg-ink/70 text-sand/70",
};

export function Work() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    filter === "all" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="container-luxe">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker={workSection.kicker}
            title={t(workSection.title)}
            description={workSection.description}
            className="lg:max-w-2xl"
          />

          <Reveal delay={0.1} className="shrink-0">
            <div className="flex flex-wrap gap-2">
              {categoryFilters.map((option) => {
                const active = filter === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setFilter(option.id)}
                    aria-pressed={active}
                    className={`rounded-full border px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                      active
                        ? "border-champagne bg-champagne text-ink"
                        : "border-line text-muted hover:border-champagne/40 hover:text-porcelain"
                    }`}
                  >
                    {t(option.label)}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8 flex items-center justify-between border-t border-line pt-5">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-muted">
            {t(workSection.showing)} {filtered.length} {t(workSection.of)} {projects.length}{" "}
            {t(workSection.projectsLabel)}
          </p>
          <span className="hidden items-center gap-2 text-[0.58rem] uppercase tracking-[0.2em] text-muted/60 sm:flex">
            <span className="h-px w-8 bg-champagne/40" />
            {t(workSection.viewCase)}
          </span>
        </Reveal>

        <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.97, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 10 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  aria-label={`${t(workSection.viewCase)}: ${project.name}`}
                  className="group relative flex h-full w-full flex-col overflow-hidden border border-line bg-coal/50 text-left transition-all duration-500 hover:border-champagne/45 hover:bg-coal"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-graphite">
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="font-display text-7xl font-light text-champagne/10">
                        {project.monogram}
                      </span>
                    </div>
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      className="relative h-full w-full object-cover opacity-65 transition-all duration-[1200ms] ease-out group-hover:scale-[1.06] group-hover:opacity-80"
                      onError={(event) => {
                        event.currentTarget.style.opacity = "0";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/10 to-transparent" />
                    <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.14em] backdrop-blur ${statusStyles[project.status]}`}
                      >
                        <span className="h-1 w-1 rounded-full bg-current" />
                        {t(statusLabels[project.status])}
                      </span>
                      <span className="text-[0.52rem] font-semibold uppercase tracking-[0.18em] text-sand/70">
                        {project.year}
                      </span>
                    </div>
                    <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                      <span className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-champagne/90">
                        {t(categoryLabels[project.category])}
                      </span>
                      <span className="grid h-8 w-8 place-items-center rounded-full border border-champagne/40 bg-ink/60 text-champagne opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-2xl font-light leading-tight text-porcelain transition-colors duration-500 group-hover:text-champagne-light">
                      {project.name}
                    </h3>
                    <p className="mt-2 flex-1 text-[0.8rem] leading-relaxed text-muted">
                      {t(project.tagline)}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.slice(0, 2).map((tech) => (
                          <span
                            key={tech}
                            className="text-[0.56rem] font-medium uppercase tracking-[0.12em] text-muted/70"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 2 && (
                          <span className="text-[0.56rem] font-medium uppercase tracking-[0.12em] text-muted/40">
                            +{project.stack.length - 2}
                          </span>
                        )}
                      </div>
                      <span className="text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-champagne opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        {t(workSection.viewCase)}
                      </span>
                    </div>
                  </div>
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectDialog project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
