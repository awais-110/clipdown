import { NextResponse } from "next/server";
import { isSafeDownloadUrl } from "@/lib/urlDetector";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url") ?? "";
  const quality = searchParams.get("quality") ?? "best";
  const format = searchParams.get("format") ?? "mp4";

  if (!isSafeDownloadUrl(url)) {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  return new NextResponse(null, {
    status: 302,
    headers: {
      Location: url,
      "Content-Disposition": `attachment; filename=videosnap-${quality}.${format}`,
      "Cache-Control": "no-store",
    },
  });
}
