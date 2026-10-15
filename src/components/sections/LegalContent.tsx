import type { ReactNode } from "react";
import { Container, Section } from "@/components/ui/Section";

export type LegalSection = { id: string; title: string; body: ReactNode };

type LegalContentProps = {
  updated: string;
  intro: ReactNode;
  sections: LegalSection[];
};

// Body text styles for the plain <p>, <ul>, <strong> and <a> used in each section.
const prose =
  "flex flex-col gap-4 text-base leading-relaxed text-muted sm:text-lg [&_a]:font-medium [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_li]:pl-1 [&_li]:marker:text-accent [&_strong]:font-semibold [&_strong]:text-fg [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5";

/** Long-form legal page body (Privacy Policy, Terms): summary card with contents, then numbered sections. */
export function LegalContent({ updated, intro, sections }: LegalContentProps) {
  return (
    <Section>
      <Container className="max-w-5xl">
        <div className="rounded-3xl bg-tint p-6 sm:p-10">
          <p className="text-xs font-semibold tracking-[0.15em] text-accent uppercase sm:text-sm">Last updated {updated}</p>
          <div className={`mt-4 ${prose}`}>{intro}</div>

          <nav aria-label="On this page" className="mt-8 border-t border-line pt-6">
            <p className="font-heading font-semibold text-fg">On this page</p>
            <ol className="mt-4 grid gap-x-8 gap-y-2 text-[15px] sm:grid-cols-2">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="inline-flex gap-3 text-muted transition-colors hover:text-accent">
                    <span className="w-6 shrink-0 font-heading font-semibold text-accent tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <div className="mt-12 sm:mt-16">
          {sections.map((s, i) => (
            <section
              key={s.id}
              id={s.id}
              className="grid scroll-mt-28 gap-4 border-t border-line py-10 sm:grid-cols-[240px_1fr] sm:gap-10 sm:py-12"
            >
              <div>
                <span className="font-heading text-sm font-semibold text-accent tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-1 text-xl leading-snug font-bold tracking-tight text-fg sm:text-2xl">{s.title}</h2>
              </div>
              <div className={prose}>{s.body}</div>
            </section>
          ))}
        </div>
      </Container>
    </Section>
  );
}
