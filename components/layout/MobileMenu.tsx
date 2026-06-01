'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  open: boolean;
  onClose: () => void;
};

const navItems = [
  { href: "/#features", label: "Features" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function MobileMenu({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 p-4 md:hidden">
      <div className="glass-panel mx-auto mt-16 max-w-sm rounded-3xl p-6">
        <div className="mb-6 flex items-center justify-between">
          <span className="font-semibold">Menu</span>
          <button onClick={onClose} className="text-text-muted">
            Close
          </button>
        </div>
        <div className="grid gap-3">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={onClose} className="rounded-2xl border border-border px-4 py-3 text-sm text-text">
              {item.label}
            </Link>
          ))}
        </div>
        <Button className="mt-6 w-full" variant="primary">
          Try It Free
        </Button>
      </div>
    </div>
  );
}
