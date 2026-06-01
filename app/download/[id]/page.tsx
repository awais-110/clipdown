import type { Metadata } from "next";
import { VideoPreview } from "@/components/download/VideoPreview";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Download ${id}`,
    description: "Review download options and choose a quality.",
  };
}

export default async function DownloadPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <VideoPreview />
    </section>
  );
}
