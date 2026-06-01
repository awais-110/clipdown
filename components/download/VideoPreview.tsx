import Image from "next/image";
import { Card } from "@/components/ui/card";
import { DownloadButton } from "@/components/download/DownloadButton";
import { FormatTabs } from "@/components/download/FormatTabs";
import { QualitySelector } from "@/components/download/QualitySelector";
import { formatDuration } from "@/lib/utils";

export function VideoPreview() {
  return (
    <Card className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="overflow-hidden rounded-2xl border border-border">
        <div className="relative aspect-video">
          <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" alt="Video thumbnail" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white backdrop-blur-md">Play preview</div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-primary">Video Preview</p>
        <h1 className="mt-4 text-3xl font-semibold text-white">Sample video title for your extracted result</h1>
        <p className="mt-3 text-sm text-text-muted">@videosnap • {formatDuration(183)}</p>
        <div className="mt-8 grid gap-6">
          <QualitySelector />
          <FormatTabs />
          <div className="rounded-2xl border border-border bg-white/5 px-4 py-3 text-sm text-text-muted">
            Estimated download size: 12.4 MB
          </div>
          <DownloadButton />
        </div>
      </div>
    </Card>
  );
}
