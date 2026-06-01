import { NextResponse } from "next/server";
import { cacheGet, cacheSet } from "@/lib/cache";
import { isRateLimited } from "@/lib/rateLimit";
import { detectPlatform, isSafeDownloadUrl } from "@/lib/urlDetector";
import { extractVideo } from "@/lib/extractors";

export const runtime = "edge";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { url?: string } | null;
  const url = body?.url?.trim();
  const ipHash = "edge-ip";

  if (!url || !isSafeDownloadUrl(url)) {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  if (isRateLimited(`${ipHash}:extract`)) {
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
  }

  const cacheKey = `extract:${url}`;
  const cached = await cacheGet(cacheKey);
  if (cached) {
    return NextResponse.json(cached);
  }

  const platform = detectPlatform(url);
  const video = await extractVideo(url);
  const response = { ...video, platform: platform === "unknown" ? video.platform : platform };

  await cacheSet(cacheKey, response, 300);
  return NextResponse.json(response);
}
