export type Platform =
  | "youtube"
  | "tiktok"
  | "instagram"
  | "facebook"
  | "twitter"
  | "pinterest"
  | "vimeo"
  | "dailymotion"
  | "unknown";

const detectors: Array<{ platform: Exclude<Platform, "unknown">; patterns: RegExp[] }> = [
  { platform: "youtube", patterns: [/youtu\.be/i, /youtube\.com/i] },
  { platform: "tiktok", patterns: [/tiktok\.com/i] },
  { platform: "instagram", patterns: [/instagram\.com/i] },
  { platform: "facebook", patterns: [/facebook\.com/i, /fb\.watch/i] },
  { platform: "twitter", patterns: [/twitter\.com/i, /x\.com/i] },
  { platform: "pinterest", patterns: [/pinterest\.com/i] },
  { platform: "vimeo", patterns: [/vimeo\.com/i] },
  { platform: "dailymotion", patterns: [/dailymotion\.com/i] },
];

export function detectPlatform(url: string): Platform {
  for (const detector of detectors) {
    if (detector.patterns.some((pattern) => pattern.test(url))) {
      return detector.platform;
    }
  }

  return "unknown";
}

export function isSafeDownloadUrl(url: string) {
  try {
    const parsed = new URL(url);
    return ["http:", "https:"].includes(parsed.protocol);
  } catch {
    return false;
  }
}
