import Image from "next/image";
import { Card } from "@/components/ui/card";
import { formatDuration } from "@/lib/utils";

type Props = {
  thumbnail: string;
  title: string;
  duration: string;
  author: string;
};

export function VideoPreview({ thumbnail, title, duration, author }: Props) {
  return (
    <Card className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="overflow-hidden rounded-2xl border border-border">
        <div className="relative aspect-video">
          <Image
            src={thumbnail || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white backdrop-blur-md">Play preview</div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-primary">Video Preview</p>
        <h1 className="mt-4 text-3xl font-semibold text-white">{title}</h1>
        <p className="mt-3 text-sm text-text-muted">{author} • {duration || formatDuration(183)}</p>
      </div>
    </Card>
  );
}
