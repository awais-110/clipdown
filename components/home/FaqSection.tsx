import { Card } from "@/components/ui/card";

const faqs = [
  ["Is this for public content only?", "Yes. The extractor is designed around public URLs and safety checks block unsafe schemes."],
  ["Does it support mobile?", "The layout is responsive from 320px up and the sticky footer ad is mobile-only."],
  ["Can admins manage blog posts?", "The admin route structure and editor shell are scaffolded for Supabase-backed CRUD."],
];

export function FaqSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">FAQ</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">Common product questions.</h2>
      </div>
      <div className="grid gap-4">
        {faqs.map(([question, answer]) => (
          <Card key={question}>
            <h3 className="text-lg font-medium text-white">{question}</h3>
            <p className="mt-3 text-sm leading-7 text-text-muted">{answer}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
