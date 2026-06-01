'use client';

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/MobileMenu";

const navItems = [
  { href: "/#features", label: "Features" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          VideoSnap
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-text-muted transition hover:text-text">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button variant="secondary">Try It Free</Button>
        </div>
        <button className="md:hidden rounded-full border border-border px-4 py-2 text-sm" onClick={() => setOpen(true)}>
          Menu
        </button>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
