import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-text-muted">Built with Next.js 15, Supabase, and Vercel.</p>
        <div className="flex gap-4 text-sm text-text-muted">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/dmca">DMCA</Link>
        </div>
      </div>
    </footer>
  );
}
