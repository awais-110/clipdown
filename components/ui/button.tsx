import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:cursor-not-allowed disabled:opacity-60",
        variant === "primary" && "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-hover",
        variant === "secondary" && "bg-white/5 text-text border border-border hover:bg-white/10",
        variant === "ghost" && "bg-transparent text-text-muted hover:text-text hover:bg-white/5",
        className,
      )}
      {...props}
    />
  );
}
