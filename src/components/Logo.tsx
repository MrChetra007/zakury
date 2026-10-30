type LogoProps = {
  compact?: boolean;
  className?: string;
};

export function Logo({ compact = false, className = "" }: LogoProps) {
  return (
    <a
      href="#top"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Zakury Technologies — home"
    >
      <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-champagne/40 bg-ink transition-colors duration-500 group-hover:border-champagne">
        <img
          src="/profile-logo.png"
          alt=""
          width={256}
          height={256}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="eager"
        />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-[0.82rem] font-semibold uppercase tracking-[0.26em] text-porcelain">
            Zakury
          </span>
          <span className="mt-1 text-[0.56rem] font-medium uppercase tracking-[0.42em] text-muted">
            Technologies
          </span>
        </span>
      )}
    </a>
  );
}
