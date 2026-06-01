import { Card } from "@/components/ui/card";

const steps = [
  ["Paste URL", "Drop in a public post, reel, clip, or watch link."],
  ["Extract formats", "The API validates and returns available download options."],
  ["Download instantly", "Choose a format and route through the edge download endpoint."],
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">How It Works</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">Simple flow, built for scale.</h2>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {steps.map(([title, body], index) => (
          <Card key={title} className="relative overflow-hidden">
            <span className="absolute right-5 top-5 text-4xl font-semibold text-white/10">0{index + 1}</span>
            <h3 className="text-xl font-medium text-white">{title}</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-text-muted">{body}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
