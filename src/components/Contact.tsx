import { Section } from "./Section";

const CHANNELS = [
  { k: "email", v: "sa6763205@gmail.com", href: "mailto:sa6763205@gmail.com" },
  { k: "phone", v: "+91 75893 82319", href: "tel:+917589382319" },
  { k: "github", v: "github.com/arshdeepsingh157", href: "https://github.com/arshdeepsingh157" },
  {
    k: "linkedin",
    v: "linkedin.com/in/arshdeep-singh-742973240",
    href: "https://www.linkedin.com/in/arshdeep-singh-742973240/",
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      tag="// 06 — uplink"
      title="Establish Contact"
      subtitle="Open a secure channel — available for roles in SOC, cybersecurity engineering, and offensive security."
    >
      <div className="overflow-hidden rounded-lg border border-neon/40 bg-card/60 shadow-neon backdrop-blur">
        <div className="flex items-center gap-2 border-b border-border bg-surface/60 px-4 py-2.5 font-mono text-xs">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyber" />
          <span className="h-2.5 w-2.5 rounded-full bg-neon" />
          <span className="ml-3 text-muted-foreground">arsh@secure ~ % ./connect.sh</span>
        </div>
        <div className="p-6 font-mono text-sm md:p-8">
          <div className="text-neon">&gt; handshake successful</div>
          <div className="text-muted-foreground">&gt; listing channels...</div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {CHANNELS.map((c) => (
              <a
                key={c.k}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded border border-border bg-surface/40 px-4 py-3 transition hover:border-neon hover:shadow-neon"
              >
                <span className="truncate">
                  <span className="text-cyber">{c.k}</span>
                  <span className="text-muted-foreground"> :: </span>
                  <span className="text-foreground group-hover:text-neon">{c.v}</span>
                </span>
                <span className="text-muted-foreground transition group-hover:translate-x-1 group-hover:text-neon">
                  →
                </span>
              </a>
            ))}
          </div>
          <div className="mt-6 flex items-center text-neon">
            &gt; <span className="ml-1 animate-blink">▊</span>
          </div>
        </div>
      </div>

      <footer className="mt-16 border-t border-border pt-8 text-center font-mono text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Arshdeep Singh · encrypted &amp; secured</div>
      </footer>
    </Section>
  );
}
