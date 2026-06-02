import { CheckCircle2, ImageDown, Music2, ShieldCheck, Subtitles } from "lucide-react";
import { UrlInput } from "@/components/home/UrlInput";

const highlights = [
  { Icon: Subtitles, label: "Subtitles" },
  { Icon: ImageDown, label: "Images" },
  { Icon: Music2, label: "Audio" },
  { Icon: ShieldCheck, label: "No signup" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(145deg,#f3f8ff_0%,#ffffff_48%,#fff7f1_100%)] pb-14 pt-28 sm:pb-20 sm:pt-36 lg:pt-40">
      <div className="site-container">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-10">
            <div className="min-w-0">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d8e7ff] bg-white px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-[#0b84ff] shadow-[0_10px_30px_rgba(32,54,86,0.07)]">
                <span className="h-2 w-2 rounded-full bg-[#16a34a]" />
                Fast public-link extraction
              </div>

              <h1 className="max-w-4xl text-[2.35rem] font-black leading-[1.04] tracking-normal text-[#20232a] sm:text-6xl lg:text-[4.65rem]">
                Download videos, subtitles, and cover images without the clutter.
              </h1>

              <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-[#5f6672] sm:text-xl">
                Paste a public link from a supported platform. VideoSnap checks the source and returns clean download choices in one focused flow.
              </p>

              <div id="download" className="mt-9 max-w-3xl">
                <UrlInput />
              </div>
            </div>

            <aside className="hidden rounded-[22px] border border-[#dfe7f2] bg-white/82 p-4 shadow-[0_24px_70px_rgba(32,54,86,0.10)] backdrop-blur lg:block">
              <div className="rounded-2xl bg-[#111827] p-4 text-white">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/55">Ready queue</span>
                  <span className="rounded-full bg-[#16a34a]/18 px-2 py-1 text-xs font-bold text-[#86efac]">Live</span>
                </div>
                <div className="space-y-3">
                  {["1080p video", "Caption file", "Preview image"].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl bg-white/8 px-3 py-3">
                      <CheckCircle2 className="h-4 w-4 text-[#74d7ff]" />
                      <span className="text-sm font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {highlights.map((item) => (
                  <div key={item.label} className="rounded-xl border border-[#e7edf5] bg-[#f8fbff] p-3">
                    <item.Icon className="h-5 w-5 text-[#0b84ff]" />
                    <p className="mt-2 text-sm font-black text-[#20232a]">{item.label}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
