import { Section } from "./Section";

const GROUPS = [
  {
    name: "Languages",
    icon: "{ }",
    items: [
      { label: "Python", level: 85 },
      { label: "Bash", level: 80 },
    ],
  },
  {
    name: "Operating Systems",
    icon: "OS",
    items: [
      { label: "Linux", level: 90 },
      { label: "Windows", level: 75 },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: "☁",
    items: [
      { label: "Docker", level: 75 },
      { label: "AWS", level: 70 },
    ],
  },
  {
    name: "Security Arsenal",
    icon: "⚡",
    items: [
      { label: "Nmap", level: 88 },
      { label: "Burp Suite", level: 80 },
      { label: "Netcat", level: 82 },
      { label: "SIEM", level: 78 },
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      tag="// 02 — arsenal"
      title="Skill Matrix"
      subtitle="Tools, languages, and systems I deploy across offensive assessments and defensive operations."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {GROUPS.map((g) => (
          <div
            key={g.name}
            className="hover-glow group relative overflow-hidden rounded-lg border border-border bg-card/80 p-6"
          >
            <div className="absolute -right-6 -top-6 font-display text-7xl font-black text-neon/5">
              {g.icon}
            </div>
            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-display text-xl font-bold uppercase tracking-wider">
                  {g.name}
                </h3>
                <span className="font-mono text-xs text-cyber">
                  [{g.items.length.toString().padStart(2, "0")}]
                </span>
              </div>
              <div className="space-y-4">
                {g.items.map((s) => (
                  <div key={s.label}>
                    <div className="mb-1.5 flex items-center justify-between font-mono text-xs">
                      <span className="text-foreground">{s.label}</span>
                      <span className="text-neon">{s.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-neon to-cyber shadow-neon"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
