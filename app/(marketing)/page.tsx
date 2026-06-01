import { HeroSection } from "@/components/home/HeroSection";
import { PlatformGrid } from "@/components/home/PlatformGrid";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FaqSection } from "@/components/home/FaqSection";
import { AdBanner } from "@/components/ads/AdBanner";
import { AdNative } from "@/components/ads/AdNative";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "VideoSnap",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  description: "Download publicly available videos from major social platforms instantly.",
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <HeroSection />
      <AdBanner slot="1111111111" />
      <PlatformGrid />
      <FeaturesSection />
      <AdNative slot="2222222222" />
      <HowItWorks />
      <FaqSection />
    </main>
  );
}
