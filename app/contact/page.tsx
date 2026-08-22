export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-bold text-foreground">Contact Us</h1>
      <p className="mt-4 text-muted">
        Have a question about a prescription or an order? Reach out below.
      </p>

      <form className="mt-8 space-y-4">
        <div>
          <label className="text-sm font-medium text-foreground">Name</label>
          <input
            type="text"
            className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2 outline-none focus:border-primary"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Email</label>
          <input
            type="email"
            className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2 outline-none focus:border-primary"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Message</label>
          <textarea
            rows={4}
            className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2 outline-none focus:border-primary"
            placeholder="How can we help?"
          />
        </div>
        <button
          type="button"
          className="rounded-full bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Send Message
        </button>
        <p className="text-xs text-muted">Demo site — this form does not submit anywhere.</p>
      </form>
    </div>
  );
}
