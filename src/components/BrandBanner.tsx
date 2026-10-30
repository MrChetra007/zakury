export function BrandBanner() {
  return (
    <section
      aria-label="Zakury Technologies"
      className="relative overflow-hidden border-t border-line bg-coal/25 py-10 md:py-14"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/50 to-transparent" />
      <div className="container-luxe">
        <a
          href="#contact"
          className="group relative block overflow-hidden border border-champagne/25 shadow-soft"
        >
          <img
            src="/banner-web.jpg"
            alt="Zakury Technologies — building digital solutions and empowering businesses"
            width={1600}
            height={595}
            className="h-auto w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.02]"
            loading="eager"
          />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
        </a>
      </div>
    </section>
  );
}
