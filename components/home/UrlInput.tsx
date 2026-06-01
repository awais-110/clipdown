'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { isValidUrl } from "@/lib/urlDetector";

export function UrlInput() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit() {
    setError("");
    const trimmed = url.trim();

    if (!trimmed) {
      setError("Please paste a video URL");
      return;
    }

    if (!isValidUrl(trimmed)) {
      setError("Unsupported platform. Try YouTube, TikTok, Instagram, or Facebook.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/extract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: trimmed }),
      });

      const data = (await response.json()) as { id?: string; error?: string };

      if (!response.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      sessionStorage.setItem(`video_${data.id}`, JSON.stringify(data));
      router.push(`/download/${data.id}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex gap-2">
        <input
          type="url"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          onPaste={(event) => setUrl(event.clipboardData.getData("text"))}
          placeholder="Paste video URL here — YouTube, TikTok, Instagram..."
          className="flex-1 rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-base text-white placeholder-white/40 focus:border-indigo-500 focus:outline-none"
          onKeyDown={(event) => event.key === "Enter" && handleSubmit()}
        />
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="rounded-xl bg-indigo-600 px-8 py-4 font-semibold whitespace-nowrap text-white transition-colors duration-200 hover:bg-indigo-700 disabled:opacity-60"
        >
          {loading ? "Extracting..." : "Download"}
        </button>
      </div>
      {error ? <p className="mt-3 text-sm text-red-400">{error}</p> : null}
    </div>
  );
}
