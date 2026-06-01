import { detectPlatform, type Platform } from "@/lib/urlDetector";
import type { VideoInfo } from "@/types/video";

const demoFormats = [
  { quality: "1080p", format: "mp4" as const, size: "12.4 MB", url: "https://example.com/video-1080.mp4" },
  { quality: "720p", format: "mp4" as const, size: "7.2 MB", url: "https://example.com/video-720.mp4" },
  { quality: "audio", format: "mp3" as const, size: "1.1 MB", url: "https://example.com/audio.mp3" },
];

export async function extractVideo(url: string): Promise<VideoInfo> {
  const platform = detectPlatform(url);
  return {
    id: crypto.randomUUID(),
    platform,
    title: `${platform === "unknown" ? "Video" : platform} preview`,
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    duration: 30,
    author: "@videosnap",
    formats: demoFormats,
  };
}

export async function getSupportedPlatform(url: string): Promise<Platform> {
  return detectPlatform(url);
}
