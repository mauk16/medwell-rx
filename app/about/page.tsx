export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-foreground">About MedWell Pharmacy</h1>
      <p className="mt-4 text-muted">
        MedWell Pharmacy has served the Springfield community for over 20 years, offering
        trusted over-the-counter care, prescription fulfillment, and friendly advice from
        licensed pharmacists. This site is a demo storefront and does not sell real medication.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {[
          ["20+ Years", "Serving the local community"],
          ["12", "Licensed pharmacists on staff"],
          ["4.9/5", "Average customer rating"],
        ].map(([stat, label]) => (
          <div key={label} className="rounded-2xl border border-border bg-accent p-6 text-center">
            <p className="text-2xl font-bold text-primary">{stat}</p>
            <p className="mt-1 text-sm text-muted">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
