import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      tag="// 04 — timeline"
      title="Experience"
      subtitle="Professional engagements where I've operated as engineer and analyst."
    >
      <div className="relative space-y-8 border-l border-border pl-8 md:pl-12">
        <TimelineItem
          when="Present"
          role="Cybersecurity Engineer"
          org="TechCadd"
          details={[
            "Designed and maintained secure infrastructure across network and cloud layers.",
            "Implemented SIEM pipelines, endpoint monitoring, and incident response workflows.",
            "Conducted vulnerability assessments and hardened deployment configurations.",
          ]}
        />
      </div>

      <div id="education" className="mt-20">
        <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-cyber">
          <span className="h-px w-8 bg-cyber" />
          // 05 — education
        </div>
        <div className="relative space-y-6 border-l border-border pl-8 md:pl-12">
          <TimelineItem
            when="2022 — 2026"
            role="B.Tech, Computer Science (Cybersecurity)"
            org="GNA University"
            details={[
              "Coursework spanning network security, cryptography, ethical hacking, and digital forensics.",
              "Active participation in cybersecurity labs, CTF challenges, and research projects.",
            ]}
            accent="cyber"
          />
        </div>
      </div>
    </Section>
  );
}

function TimelineItem({
  when,
  role,
  org,
  details,
  accent = "neon",
}: {
  when: string;
  role: string;
  org: string;
  details: string[];
  accent?: "neon" | "cyber";
}) {
  const color = accent === "neon" ? "bg-neon shadow-neon" : "bg-cyber shadow-cyber";
  const text = accent === "neon" ? "text-neon" : "text-cyber";
  return (
    <div className="relative">
      <span
        className={`absolute -left-[2.2rem] top-2 h-3 w-3 rounded-full ${color} md:-left-[3.3rem]`}
      />
      <div className="rounded-lg border border-border bg-card/40 p-6 backdrop-blur">
        <div className={`font-mono text-xs uppercase tracking-widest ${text}`}>{when}</div>
        <h3 className="mt-2 font-display text-xl font-bold uppercase">{role}</h3>
        <div className="font-mono text-sm text-muted-foreground">{org}</div>
        <ul className="mt-4 space-y-2 text-sm text-foreground/80">
          {details.map((d, i) => (
            <li key={i} className="flex gap-3">
              <span className={`${text} font-mono`}>&gt;</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
