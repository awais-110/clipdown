import { Card } from "@/components/ui/card";
import { detectPlatform } from "@/lib/urlDetector";

const platforms = [
  "youtube.com/watch?v=demo",
  "tiktok.com/@user/video/123",
  "instagram.com/reel/demo",
  "facebook.com/watch/demo",
  "x.com/user/status/123",
  "vimeo.com/123456",
];

export function PlatformGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Supported Platforms</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">Branded platform cards with hover glow.</h2>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {platforms.map((value) => {
          const platform = detectPlatform(`https://${value}`);
          return (
            <Card key={value} className="group relative overflow-hidden transition hover:-translate-y-1 hover:border-primary/40">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.25em] text-text-muted">{platform}</p>
                <h3 className="mt-4 text-xl font-medium text-white">{platform === "unknown" ? "Public Video Source" : platform.toUpperCase()}</h3>
                <p className="mt-2 text-sm leading-6 text-text-muted">Optimized extraction and caching for fast return times.</p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
