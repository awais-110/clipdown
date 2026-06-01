import { UrlInput } from "@/components/home/UrlInput";

const platforms = ["YouTube", "TikTok", "Instagram", "Facebook", "X", "Vimeo"];

export function HeroSection() {
  return (
    <section className="mesh-bg noise relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 opacity-70 [background:radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-32">
        <div className="relative z-10 flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Professional video downloader platform
          </span>
          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Download Any Video, Instantly.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted sm:text-xl">
            Fast extraction, clean monetization, and a polished interface for public content from YouTube, TikTok, Instagram, Facebook, X, Vimeo, and more.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-text-muted">
            {platforms.map((platform) => (
              <span key={platform} className="rounded-full border border-border bg-white/5 px-4 py-2">
                {platform}
              </span>
            ))}
          </div>
          <div className="mt-10 max-w-2xl">
            <UrlInput />
          </div>
        </div>
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-x-8 top-8 h-24 rounded-full bg-primary/30 blur-3xl" />
            <div className="glass-panel absolute left-6 top-8 w-28 rounded-2xl px-3 py-2 text-xs text-text-muted">Live extraction</div>
            <div className="glass-panel absolute right-6 top-36 w-32 rounded-2xl px-3 py-2 text-xs text-text-muted">Edge cached</div>
            <div className="glass-panel absolute left-10 bottom-24 w-40 rounded-3xl px-4 py-3 text-sm text-white">
              1080p MP4
              <p className="mt-1 text-xs text-text-muted">12.4 MB estimate</p>
            </div>
            <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-white/10 bg-background/90 p-5">
              <div className="h-3 w-24 rounded-full bg-white/10" />
              <div className="mt-4 h-2 w-3/4 rounded-full bg-white/10" />
              <div className="mt-3 h-2 w-1/2 rounded-full bg-white/10" />
              <div className="mt-6 grid grid-cols-3 gap-3">
                {["MP4", "MP3", "Best"].map((item) => (
                  <div key={item} className="rounded-2xl border border-border bg-white/5 px-3 py-4 text-center text-xs text-text-muted">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
