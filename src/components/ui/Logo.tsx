import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { brand } from "@/lib/site";

type LogoProps = {
  // Colour of the brand name. auto = dark in light mode, white in dark mode.
  tone?: "color" | "white" | "auto";
  // Size of the round emblem badge, e.g. "size-10 sm:size-11".
  className?: string;
};

const toneClass = { color: "text-ink", white: "text-white", auto: "text-fg" };

/**
 * Emblem from the owner's logo (public/brand/etandtour-emblem.png) on a white disc, plus the brand name.
 * The disc keeps the black-and-yellow emblem readable on dark backgrounds (hero, dark mode).
 * The source logo is only 150 px. TODO: swap in a high-resolution or vector file when the owner has one.
 */
export function Logo({ tone = "auto", className = "size-10 sm:size-11" }: LogoProps) {
  return (
    <Link href="/" aria-label={`${brand.name} home`} className="inline-flex shrink-0 items-center gap-2.5">
      <span className={cn("flex shrink-0 items-center justify-center rounded-full bg-white p-1", className)}>
        <Image src="/brand/etandtour-emblem.png" alt="" width={304} height={312} preload className="h-full w-auto" />
      </span>
      <span className={cn("font-heading text-xl font-bold tracking-tight sm:text-2xl", toneClass[tone])}>
        {brand.name}
      </span>
    </Link>
  );
}
