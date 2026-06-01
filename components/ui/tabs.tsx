import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type TabProps = HTMLAttributes<HTMLButtonElement> & { active?: boolean };

export function Tabs({ children, className }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("grid gap-3", className)}>{children}</div>;
}

export function Tab({ active, className, ...props }: TabProps) {
  return (
    <button
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-medium transition",
        active ? "border-primary bg-primary/15 text-text" : "border-border bg-white/5 text-text-muted hover:text-text",
        className,
      )}
      {...props}
    />
  );
}

export function TabsList({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap gap-2">{children}</div>;
}
