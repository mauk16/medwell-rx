import Image from "next/image";

/** Dark gradient page header shared by every page, matching the homepage hero. */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="hero-gradient relative overflow-hidden rounded-b-[2rem] text-white sm:rounded-b-[3rem]">
      <Image
        src="/images/med-6.webp"
        alt=""
        width={420}
        height={420}
        className="pointer-events-none absolute -right-16 -top-16 w-64 opacity-[0.07] sm:w-96"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-12 sm:py-16">
        {eyebrow && (
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium ring-1 ring-white/20 backdrop-blur">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-3 max-w-lg text-sm text-white/70 sm:text-base">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
