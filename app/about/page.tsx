import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Truck, MessageCircle, Clock, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";

const stats = [
  ["20+", "Years serving Springfield"],
  ["12", "Licensed pharmacists"],
  ["4.9", "Average rating"],
  ["1,400+", "Products in stock"],
];

const values = [
  {
    icon: ShieldCheck,
    title: "Every order is checked",
    text: "A licensed pharmacist reviews each prescription and flags interactions before anything leaves the counter.",
  },
  {
    icon: MessageCircle,
    title: "Advice without an appointment",
    text: "Walk in or call. There is no charge for asking a question, and no queue ticket to take.",
  },
  {
    icon: Truck,
    title: "We come to you",
    text: "Free same-day delivery across Springfield on orders over $25, ordered by 4pm.",
  },
  {
    icon: Clock,
    title: "Open when you need us",
    text: "Monday to Saturday, 8am to 9pm — including the evenings most pharmacies close early.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="Since 2005"
        title={
          <>
            A pharmacy that still
            <br />
            <span className="text-white/60">knows your name.</span>
          </>
        }
        subtitle="Two decades in the same shopfront, run by pharmacists who live in the neighborhood they serve."
      />

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map(([stat, label]) => (
            <div key={label} className="rounded-2xl border border-border bg-accent/50 p-5 sm:p-6">
              <p className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">{stat}</p>
              <p className="mt-1 text-xs text-muted sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-6xl px-6 pb-10 sm:pb-14">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-accent">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 30% 25%, color-mix(in srgb, var(--primary) 20%, transparent), transparent 62%)",
              }}
            />
            <Image
              src="/images/med-5.webp"
              alt=""
              width={280}
              height={280}
              className="relative w-32 drop-shadow-xl sm:w-44"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Built around the counter, not the checkout
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
              <p>
                MedWell opened in 2005 with one pharmacist and a single dispensing bench. The
                idea was simple: give people somewhere to ask a real question and get a real
                answer, without booking anything.
              </p>
              <p>
                Twenty years on we fill thousands of prescriptions a month and deliver across
                Springfield — but the counter still works the same way. If something looks wrong
                on your chart, we call you before we dispense it.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Talk to a pharmacist <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-accent/40">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            What that means day to day
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-6">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-background p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                  <v.icon size={20} />
                </span>
                <h3 className="mt-4 font-semibold text-foreground">{v.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="hero-gradient relative overflow-hidden rounded-3xl px-7 py-12 text-center text-white sm:px-12 sm:py-14">
          <Image
            src="/images/med-3.webp"
            alt=""
            width={280}
            height={280}
            className="pointer-events-none absolute -bottom-12 -left-10 w-44 opacity-10 invert sm:w-60"
          />
          <div className="relative mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Switch your pharmacy in one call
            </h2>
            <p className="mt-3 text-sm text-white/70 sm:text-base">
              We handle the transfer paperwork. You keep the same prescriptions.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
              >
                Get in touch
              </Link>
              <Link
                href="/products"
                className="rounded-full px-7 py-3 text-sm font-semibold text-white ring-1 ring-white/30 transition-colors hover:bg-white/10"
              >
                Browse the shop
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
