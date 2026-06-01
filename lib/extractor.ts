import { createHash } from "crypto";
import { detectPlatform } from "@/lib/urlDetector";

export interface VideoFormat {
  quality: string;
  format: "mp4" | "mp3";
  url: string;
  size?: string;
}

export interface VideoInfo {
  id: string;
  platform: string;
  title: string;
  thumbnail: string;
  duration: string;
  author: string;
  formats: VideoFormat[];
}

function formatDuration(seconds: number): string {
  if (!seconds) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function normalizeFormats(data: unknown): VideoFormat[] {
  const formats: VideoFormat[] = [];
  const links = Array.isArray((data as { links?: unknown[] } | null)?.links)
    ? ((data as { links?: unknown[] }).links ?? [])
    : [];

  for (const link of links) {
    if (!link || typeof link !== "object") continue;

    const typedLink = link as {
      quality?: string;
      label?: string;
      type?: string;
      url?: string;
      size?: string;
    };

    if (!typedLink.url) continue;

    const quality = typedLink.quality || typedLink.label || "Best";
    const isAudio =
      quality.toLowerCase().includes("audio") ||
      quality.toLowerCase().includes("mp3") ||
      typedLink.type?.includes("audio") ||
      typedLink.url.toLowerCase().includes("mp3");

    formats.push({
      quality: isAudio ? "audio" : quality,
      format: isAudio ? "mp3" : "mp4",
      url: typedLink.url,
      size: typedLink.size || undefined,
    });
  }

  return formats;
}

export async function extractVideo(url: string): Promise<VideoInfo> {
  const apiKey = process.env.RAPIDAPI_KEY;

  if (!apiKey) {
    throw new Error("RAPIDAPI_KEY is not configured");
  }

  const response = await fetch(
    `https://social-media-video-downloader.p.rapidapi.com/smvd/get/all?url=${encodeURIComponent(url)}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "social-media-video-downloader.p.rapidapi.com",
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(`RapidAPI error: ${response.status} ${response.statusText}`);
  }

  const data = (await response.json()) as {
    success?: boolean;
    message?: string;
    links?: unknown[];
    source?: string;
    title?: string;
    thumbnail?: string;
    picture?: string;
    duration?: number;
    author?: string;
    uploader?: string;
  };

  if (data.success === false) {
    throw new Error(data.message || "Failed to extract video");
  }

  const formats = normalizeFormats(data);

  if (formats.length === 0) {
    throw new Error("No downloadable formats found for this URL");
  }

  const platform = detectPlatform(url);
  const id = createHash("sha256").update(url).digest("base64url").slice(0, 16);

  return {
    id,
    platform: data.source || platform,
    title: data.title || "Untitled Video",
    thumbnail: data.thumbnail || data.picture || "",
    duration: formatDuration(data.duration || 0),
    author: data.author || data.uploader || "@unknown",
    formats,
  };
}