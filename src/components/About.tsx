import { Section } from "./Section";

const HIGHLIGHTS = [
  { label: "Specialization", value: "Cybersecurity & SOC Operations" },
  { label: "Focus", value: "SIEM, Threat Analysis, Network Defense" },
  { label: "Approach", value: "Hands-on Labs & Real-world Exploitation" },
  { label: "Mindset", value: "Offensive thinking, defensive execution" },
];

export function About() {
  return (
    <Section
      id="about"
      tag="// 01 — identity"
      title="About Operator"
      subtitle="Cybersecurity engineering student obsessed with the mechanics of intrusion — and the discipline of defense."
    >
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div className="relative overflow-hidden rounded-lg border border-border bg-card/40 p-8 backdrop-blur">
          <div className="absolute inset-0 cyber-grid-sm opacity-30" />
          <div className="relative space-y-4 text-foreground/85">
            <p>
              I'm <span className="text-neon glow-neon">Arshdeep Singh</span>, a cybersecurity
              engineer currently pursuing my B.Tech in Computer Science (Cybersecurity) at GNA
              University. My work lives at the intersection of offensive security, SOC
              operations, and infrastructure hardening.
            </p>
            <p>
              I've spent significant time inside SIEM consoles, dissecting logs, building
              detection rules, and simulating attack chains in lab environments. From spinning
              up firewall rule-sets to deploying WebRTC infrastructure, I enjoy the full stack
              of building systems and then learning to break them.
            </p>
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-neon">&gt; </span>
              "The best defense is understanding every angle of attack."
            </p>
          </div>
        </div>

        <div className="grid gap-3">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.label}
              className="hover-glow group rounded-lg border border-border bg-card/40 p-5 backdrop-blur"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyber">
                {h.label}
              </div>
              <div className="mt-2 font-display text-lg font-bold text-foreground">
                {h.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
