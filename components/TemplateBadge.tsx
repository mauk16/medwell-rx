/** Fixed top-center "this is a template, want it?" pill pair — same pattern as
 *  fluxframers-templates' Ivory Dental demo, recolored to this project's tokens. */
export default function TemplateBadge() {
  return (
    <div className="pointer-events-none fixed left-1/2 top-14 z-[70] -translate-x-1/2 flex flex-col items-center gap-1.5 sm:top-10">
      <span className="badge-shine inline-flex w-[196px] items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-foreground/15 bg-background/70 px-2.5 py-1 text-[8px] uppercase tracking-[0.14em] text-muted shadow-sm backdrop-blur-sm sm:text-[9px]">
        <span className="h-1 w-1 shrink-0 rounded-full bg-primary/70" />
        Initial Design Template
      </span>
      <a
        href="https://wa.me/923008680668?text=Hi%2C%20I%27d%20like%20this%20same%20design%20theme%20%E2%80%94%20%22MedWell%20Pharmacy%22%20%E2%80%94%20for%20my%20own%20site."
        target="_blank"
        rel="noopener noreferrer"
        className="badge-shine pointer-events-auto inline-flex w-[196px] items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-primary-dark/25 bg-primary/90 px-2.5 py-1 text-[8px] uppercase tracking-[0.14em] text-white shadow-sm backdrop-blur-sm transition-colors hover:bg-primary-dark sm:text-[9px]"
      >
        <span className="h-1 w-1 shrink-0 rounded-full bg-white/80" />
        Get This Theme
      </a>
    </div>
  );
}
