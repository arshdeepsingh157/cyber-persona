import { Section } from "./Section";

const PROJECTS = [
  {
    code: "PRJ-001",
    title: "WebRTC Infrastructure",
    description:
      "Deployed a scalable WebRTC-based real-time communication stack with TURN/STUN servers, media relays, and hardened signaling over TLS.",
    stack: ["WebRTC", "Node.js", "Coturn", "Docker", "Nginx"],
    status: "DEPLOYED",
  },
  {
    code: "PRJ-002",
    title: "SIEM Lab — Threat Detection",
    description:
      "Built a home SIEM environment ingesting logs from endpoints and network devices. Wrote detection rules for brute-force, lateral movement, and privilege escalation patterns.",
    stack: ["Wazuh", "Elastic", "Sysmon", "Linux", "Windows"],
    status: "ACTIVE",
  },
  {
    code: "PRJ-003",
    title: "Firewall & Network Defense Lab",
    description:
      "Designed layered firewall rule-sets, segmented VLANs, and simulated perimeter attacks to validate blocking, logging, and alerting pipelines end to end.",
    stack: ["pfSense", "iptables", "Wireshark", "Nmap"],
    status: "ONGOING",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      tag="// 03 — operations"
      title="Field Projects"
      subtitle="Selected labs and deployments where theory meets adversarial reality."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <article
            key={p.code}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card/80 p-6 transition-all hover:-translate-y-1 hover:border-neon hover:shadow-neon"
          >
            <div className="pointer-events-none absolute inset-0 cyber-grid-sm opacity-0 transition-opacity group-hover:opacity-40" />
            <div className="relative">
              <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
                <span className="text-cyber">{p.code}</span>
                <span className="flex items-center gap-1.5 text-neon">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" />
                  {p.status}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-border bg-secondary/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
