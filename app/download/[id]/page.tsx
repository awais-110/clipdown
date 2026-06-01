'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { VideoPreview } from "@/components/download/VideoPreview";
import { QualitySelector } from "@/components/download/QualitySelector";
import { DownloadButton } from "@/components/download/DownloadButton";
import type { VideoInfo, VideoFormat } from "@/lib/extractor";

export default function DownloadPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const [video, setVideo] = useState<VideoInfo | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<VideoFormat | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem(`video_${id}`);
    if (stored) {
      const data: VideoInfo = JSON.parse(stored);
      setVideo(data);
      const best = data.formats.find((format) => format.format === "mp4") ?? data.formats[0];
      setSelectedFormat(best);
    } else {
      setNotFound(true);
    }
  }, [id]);

  if (notFound) {
    return (
      <div className="flex min-h-screen items-center justify-center text-white">
        <div className="text-center">
          <h1 className="mb-2 text-2xl font-bold">Session expired</h1>
          <p className="mb-6 text-white/60">Please go back and paste the URL again.</p>
          <a href="/" className="rounded-xl bg-indigo-600 px-6 py-3 transition-colors hover:bg-indigo-700">
            Go Home
          </a>
        </div>
      </div>
    );
  }

  if (!video || !selectedFormat) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-pulse text-lg text-white/40">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0f] px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 rounded-2xl border border-white/10 bg-[#111118] p-6 md:grid-cols-2 md:p-10">
          <VideoPreview
            thumbnail={video.thumbnail}
            title={video.title}
            duration={video.duration}
            author={video.author}
          />
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-indigo-400">
                Video Preview
              </p>
              <h1 className="text-2xl font-bold leading-snug text-white">{video.title}</h1>
              <p className="mt-1 text-white/50">{video.author} • {video.duration}</p>
            </div>

            <QualitySelector
              formats={video.formats}
              selected={selectedFormat}
              onSelect={setSelectedFormat}
            />

            <div className="rounded-xl bg-white/5 px-4 py-3 text-sm text-white/60">
              {selectedFormat.size
                ? `Estimated download size: ${selectedFormat.size}`
                : `Format: ${selectedFormat.format.toUpperCase()} • ${selectedFormat.quality}`}
            </div>

            <DownloadButton
              url={selectedFormat.url}
              quality={selectedFormat.quality}
              format={selectedFormat.format}
              title={video.title}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
