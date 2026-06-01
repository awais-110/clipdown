'use client';

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { detectPlatform } from "@/lib/urlDetector";

const invalidSchemes = /^(javascript:|data:)/i;

export function UrlInput() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const platform = useMemo(() => detectPlatform(url), [url]);
  const error = url && !/^https?:\/\//i.test(url) ? "Enter a full https URL." : invalidSchemes.test(url) ? "This URL scheme is blocked." : "";

  async function handleSubmit() {
    if (error) return;
    setLoading(true);
    try {
      window.location.href = `/download/${encodeURIComponent(btoa(url))}`;
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="glass-panel rounded-[2rem] p-3 sm:p-4">
      <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
        <div className="relative">
          <Input
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder="Paste a TikTok, YouTube, Instagram, or X link"
            aria-label="Video URL"
          />
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background px-3 py-1 text-xs text-text-muted">
            {platform === "unknown" ? "Auto-detect" : platform}
          </span>
        </div>
        <Button type="button" onClick={handleSubmit} disabled={loading}>
          {loading ? "Preparing..." : "Download"}
        </Button>
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-text-muted">
        <span>{error || "Public URLs only. Private or protected content is not supported."}</span>
        <button type="button" className="text-text transition hover:text-white" onClick={() => navigator.clipboard.readText().then(setUrl).catch(() => undefined)}>
          Paste
        </button>
      </div>
    </div>
  );
}
