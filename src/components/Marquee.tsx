import { marquee } from "../data/site";

export function Marquee() {
  const row = [...marquee, ...marquee];

  return (
    <div className="relative border-y border-line bg-coal/40 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="flex overflow-hidden">
        <div className="marquee-track flex w-max shrink-0 animate-marquee items-center">
          {row.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center">
              <span className="whitespace-nowrap px-6 text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-muted/80 md:px-9">
                {item}
              </span>
              <span className="h-1 w-1 rotate-45 bg-champagne/60" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
