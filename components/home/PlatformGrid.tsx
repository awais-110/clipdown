const platforms = [
  { name: "YouTube", mark: "▶", desc: "Videos, Shorts, Playlists", color: "#ef4444" },
  { name: "TikTok", mark: "♪", desc: "Clips, Videos, Stories", color: "#22d3ee" },
  { name: "Instagram", mark: "◎", desc: "Reels, Posts, Stories", color: "#f472b6" },
  { name: "Facebook", mark: "f", desc: "Videos, Reels, Live", color: "#60a5fa" },
  { name: "Twitter / X", mark: "X", desc: "Videos, GIFs, Clips", color: "#e5e7eb" },
  { name: "Pinterest", mark: "P", desc: "Videos, Idea Pins", color: "#fb7185" },
  { name: "Vimeo", mark: "V", desc: "HD Videos, Clips", color: "#38bdf8" },
  { name: "Dailymotion", mark: "D", desc: "Videos, Channels", color: "#3b82f6" },
];

export function PlatformGrid() {
  return (
    <section id="features" className="border-y border-[#e7ebf1] bg-white py-12 sm:py-16">
      <div className="site-container">
        <div className="mb-8 grid gap-4 sm:grid-cols-[minmax(0,1fr)_320px] sm:items-end">
          <div className="max-w-2xl">
            <p className="section-kicker">Supported Platforms</p>
            <h2 className="mt-3 text-2xl font-black leading-tight text-[#20232a] sm:text-4xl">Built for the links people share every day.</h2>
          </div>
          <p className="text-sm leading-6 text-[#64676e]">
            The interface detects supported sources while keeping the experience simple, scannable, and fast on phones.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {platforms.map((platform) => (
            <div key={platform.name} className="soft-card group min-w-0 p-4 transition-colors hover:border-[#cdd8e6]">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md text-base font-black"
                  style={{ color: platform.color, background: `${platform.color}1c` }}
                >
                  {platform.mark}
                </div>
                <div className="h-1.5 w-10 rounded-full bg-[#e6ebf2] transition-colors group-hover:bg-[#cbd6e3]" />
              </div>
              <h3 className="truncate text-sm font-bold text-[#20232a]">{platform.name}</h3>
              <p className="mt-1 text-xs leading-5 text-[#64676e]">{platform.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
