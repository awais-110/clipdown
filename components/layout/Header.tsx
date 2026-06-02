"use client";

import { useState } from "react";
import { ChevronDown, CloudDownload, Globe2, Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  { href: "/#download", label: "Downloader" },
  { href: "/#features", label: "Platforms" },
  { href: "/#how", label: "How it works" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 rounded-2xl border border-[#dfe7f2] bg-white/88 px-4 shadow-[0_18px_50px_rgba(32,54,86,0.10)] backdrop-blur-xl sm:px-5">
        <Link href="/" className="flex min-h-11 min-w-0 flex-shrink-0 items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0b84ff] text-white shadow-[0_10px_22px_rgba(11,132,255,0.24)]">
            <CloudDownload className="h-5 w-5" />
          </div>
          <span className="truncate text-lg font-black tracking-normal text-[#20232a] sm:text-xl">
            Video<span className="text-[#0b84ff]">Snap</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="inline-flex min-h-10 items-center rounded-xl px-3 text-sm font-bold text-[#414650] transition hover:bg-[#f0f6ff] hover:text-[#0b84ff]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button type="button" className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-[#e4ebf5] bg-[#f7faff] px-3 text-sm font-bold text-[#414650]">
            <Globe2 className="h-4 w-4" />
            English
            <ChevronDown className="h-4 w-4" />
          </button>
          <Link href="/#download" className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-[#111827] px-4 text-sm font-black text-white shadow-[0_12px_28px_rgba(17,24,39,0.18)] transition hover:bg-[#0b84ff]">
            <Sparkles className="h-4 w-4" />
            Start
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#f2f6fb] text-[#20232a] md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-[#dfe7f2] bg-white p-3 shadow-[0_18px_50px_rgba(32,54,86,0.10)] md:hidden">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-bold text-[#414650] hover:bg-[#f0f6ff] hover:text-[#0b84ff]"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <button type="button" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#f7faff] px-3 text-sm font-bold text-[#414650]">
                <Globe2 className="h-4 w-4" />
                English
              </button>
              <Link href="/#download" onClick={() => setOpen(false)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#111827] px-3 text-sm font-black text-white">
                <Sparkles className="h-4 w-4" />
                Start
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
