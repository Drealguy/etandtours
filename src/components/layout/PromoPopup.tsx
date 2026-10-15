"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { X } from "lucide-react";

const STORAGE_KEY = "etandtour-promo-dismissed";

type Promo = { image: string; width: number; height: number; alt: string };

// Current promotion flyer (stored in /public/promos). null = no popup.
// TODO: owner to send an ETandTOURS flyer. Set it here, e.g.
// { image: "/promos/flyer.webp", width: 603, height: 800, alt: "Full text of the flyer" }
// "as" keeps the type wide: a plain annotation would narrow it to null and break the JSX below.
const promo = null as Promo | null;

export function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {}
    if (dismissed || !promo) return;
    const t = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    ScrollSmoother.get()?.paused(true);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      ScrollSmoother.get()?.paused(false);
    };
  }, [open]);

  function close() {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  }

  if (!open || !promo) return null;

  // Portal to <body>: the page content is transformed by ScrollSmoother, which breaks position: fixed.
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Current promotion"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
      onClick={close}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <Image
          src={promo.image}
          alt={promo.alt}
          width={promo.width}
          height={promo.height}
          preload
          sizes="(min-width: 640px) 603px, 92vw"
          // Fit the flyer (603×800) inside 92% of the width and 85% of the height of the screen.
          className="h-auto w-[min(92vw,calc(85svh*0.754),603px)] rounded-3xl shadow-2xl"
        />
        <button
          type="button"
          onClick={close}
          autoFocus
          aria-label="Close promotion"
          className="absolute -top-3 -right-3 flex size-11 items-center justify-center rounded-full bg-white text-ink shadow-lg transition-colors hover:text-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <X size={20} />
        </button>
      </div>
    </div>,
    document.body,
  );
}
