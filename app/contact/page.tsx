import { MapPin, Phone, Mail, Clock, Upload, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";

const details = [
  { icon: MapPin, label: "Visit", value: "123 Wellness Ave, Springfield" },
  { icon: Phone, label: "Call", value: "(555) 012-3456" },
  { icon: Mail, label: "Email", value: "hello@medwellpharmacy.demo" },
  { icon: Clock, label: "Hours", value: "Mon–Sat, 8am–9pm · Closed Sunday" },
];

const field =
  "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary";

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="We reply the same day"
        title="Get in touch"
        subtitle="Questions about a prescription, a transfer, or an order — a pharmacist will get back to you, not a call centre."
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:py-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        {/* Details */}
        <div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {details.map((d) => (
              <div
                key={d.label}
                className="flex items-start gap-3.5 rounded-2xl border border-border bg-background p-5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                  <d.icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-muted">{d.label}</p>
                  <p className="mt-0.5 break-words font-medium text-foreground">{d.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl bg-primary p-6 text-white">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 ring-1 ring-white/20">
              <Upload size={18} />
            </span>
            <h2 className="mt-4 font-bold tracking-tight">Sending a prescription?</h2>
            <p className="mt-1.5 text-sm text-white/75">
              Attach a photo to your message and we will have it ready for collection, usually
              within the hour.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-3xl border border-border bg-background p-6 sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Send us a message
          </h2>
          <form className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <input id="name" type="text" placeholder="Your name" className={field} />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone
                </label>
                <input id="phone" type="tel" placeholder="(555) 000-0000" className={field} />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <input id="email" type="email" placeholder="you@example.com" className={field} />
            </div>

            <div>
              <label htmlFor="topic" className="text-sm font-medium text-foreground">
                What is it about?
              </label>
              <select id="topic" className={field} defaultValue="General question">
                {[
                  "General question",
                  "New prescription",
                  "Refill or transfer",
                  "Delivery",
                  "Something else",
                ].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <textarea id="message" rows={5} placeholder="How can we help?" className={field} />
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-1.5 rounded-full bg-primary px-8 py-3.5 font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5 hover:bg-primary-dark sm:w-auto"
            >
              Send message <ArrowRight size={16} />
            </button>
            <p className="text-xs text-muted">
              Demo site — this form does not submit anywhere and no data is stored.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
