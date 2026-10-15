import Link from "next/link";
import { AtSign, Mail, MapPin, MessageCircle, Phone, Plane } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { bookHref, brand, contact, legalLinks, navLinks, serviceLinks, social, whatsappHref } from "@/lib/site";

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold tracking-[0.15em] text-fg uppercase">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-[15px] text-muted transition-colors hover:text-accent">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 sm:pt-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
          <div>
            <Logo className="size-11 sm:size-12" />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-muted">
              Your trusted partner in discovering the world, one trip at a time. Lekki Phase 1, Lagos, since{" "}
              {brand.founded}.
            </p>
          </div>

          <LinkColumn title="Company" links={navLinks} />
          <LinkColumn title="Services" links={serviceLinks} />

          <div>
            <h3 className="text-sm font-semibold tracking-[0.15em] text-fg uppercase">Contact Us</h3>
            <ul className="mt-5 flex flex-col gap-3 text-[15px] text-muted">
              <li>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 transition-colors hover:text-accent"
                >
                  <MessageCircle size={18} className="shrink-0 text-accent" />
                  WhatsApp {contact.phone}
                </a>
              </li>
              <li>
                <a href={contact.phoneHref} className="inline-flex items-center gap-3 transition-colors hover:text-accent">
                  <Phone size={18} className="shrink-0 text-accent" />
                  {contact.phone}
                </a>
              </li>
              {contact.email && (
                <li>
                  <a href={contact.emailHref} className="inline-flex items-center gap-3 break-all transition-colors hover:text-accent">
                    <Mail size={18} className="shrink-0 text-accent" />
                    {contact.email}
                  </a>
                </li>
              )}
              <li>
                <a
                  href={social.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 transition-colors hover:text-accent"
                >
                  <AtSign size={18} className="shrink-0 text-accent" />
                  Instagram {social.instagram}
                </a>
              </li>
              <li>
                <a
                  href={contact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 transition-colors hover:text-accent"
                >
                  <MapPin size={18} className="shrink-0 text-accent" />
                  {contact.address}
                </a>
              </li>
            </ul>
            <Button href={bookHref} className="mt-6" icon={<Plane size={18} />}>
              Book Your Flight
            </Button>
          </div>
        </div>

        {/* data-no-reveal: sits at the very bottom, so it can never scroll far enough to trigger the reveal. */}
        <div
          data-no-reveal
          className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between"
        >
          <p>
            © {new Date().getFullYear()} {brand.legalName} ({brand.name}). All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
