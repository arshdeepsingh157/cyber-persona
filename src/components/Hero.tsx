import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import portrait from "@/assets/arshdeep.jpeg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const snippetSlowY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const snippetFastY = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const s = <T,>(v: T): T | undefined => (reduce ? undefined : v);

  return (
    <section ref={ref} id="top" className="relative min-h-screen overflow-hidden pt-24">
      <motion.div
        style={s({ y: gridY })}
        className="absolute inset-0 cyber-grid opacity-40 will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />

      {/* floating code snippets with parallax */}
      <motion.div style={s({ y: snippetSlowY })} className="will-change-transform">
        <FloatingSnippet className="left-[6%] top-[18%]" delay={0}>
          {"if (threat.detected) {\n  isolate();\n  alert(SOC);\n}"}
        </FloatingSnippet>
      </motion.div>
      <motion.div style={s({ y: snippetFastY })} className="will-change-transform">
        <FloatingSnippet className="right-[5%] top-[28%]" delay={1.2}>
          {"nmap -sV -p- target.ip\n[+] 22/tcp open ssh\n[+] 443/tcp open https"}
        </FloatingSnippet>
      </motion.div>
      <motion.div style={s({ y: snippetSlowY })} className="will-change-transform">
        <FloatingSnippet className="left-[8%] bottom-[12%]" delay={2}>
          {"sudo ./exploit.sh\nACCESS GRANTED"}
        </FloatingSnippet>
      </motion.div>

      <motion.div
        style={s({ opacity: contentOpacity })}
        className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[1.3fr_1fr] lg:py-24"
      >
        <motion.div
          style={s({ y: textY })}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="will-change-transform"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-neon" />
            SYSTEM ONLINE • SOC ANALYST STANDBY
          </div>

          <h1 className="font-display text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Arshdeep
            <br />
            <span className="gradient-text">Singh</span>
          </h1>

          <p className="mt-6 max-w-xl font-mono text-sm text-muted-foreground md:text-base">
            <span className="text-neon">&gt;</span> Cybersecurity Engineer
            <span className="mx-2 text-border">|</span>
            <span className="text-cyber">SOC Analyst</span>
          </p>

          <p className="mt-4 max-w-xl text-lg text-foreground/80">
            Securing systems, analyzing threats, and building resilient infrastructure across
            cloud, network, and endpoint layers.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group relative overflow-hidden rounded border border-neon bg-[color-mix(in_oklab,var(--neon)_15%,transparent)] px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-neon transition hover:shadow-neon"
            >
              <span className="relative z-10">View Operations</span>
            </a>
            <a
              href="#contact"
              className="rounded border border-cyber/60 bg-[color-mix(in_oklab,var(--cyber)_10%,transparent)] px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-cyber transition hover:shadow-cyber"
            >
              Establish Contact
            </a>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
            <Stat value="3+" label="Projects" />
            <Stat value="15+" label="Tools" />
            <Stat value="24/7" label="Vigilance" />
          </div>
        </motion.div>

        <motion.div
          style={s({ y: portraitY })}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto w-full max-w-md will-change-transform"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-neon/60 bg-surface shadow-neon">
            <img
              src={portrait}
              alt="Arshdeep Singh — Cybersecurity Engineer"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="scanlines absolute inset-0" />

            <Corner className="left-2 top-2" />
            <Corner className="right-2 top-2 rotate-90" />
            <Corner className="bottom-2 left-2 -rotate-90" />
            <Corner className="bottom-2 right-2 rotate-180" />

            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-neon">
              <span>ID // 0x4A9F</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" />
                LIVE
              </span>
            </div>
          </div>

          <div className="absolute -left-4 -top-4 rounded border border-cyber/50 bg-background/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-cyber animate-float">
            status: secure
          </div>
          <div
            className="absolute -bottom-4 -right-4 rounded border border-neon/50 bg-background/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-neon animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            threat: 0.00%
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold text-neon glow-neon md:text-3xl">
        {value}
      </div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function FloatingSnippet({
  children,
  className,
  delay,
}: {
  children: string;
  className: string;
  delay: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute hidden rounded border border-border bg-surface/70 p-3 font-mono text-[10px] leading-relaxed text-neon/70 lg:block ${className}`}
      style={{ animation: `float-slow 6s ease-in-out ${delay}s infinite` }}
    >
      <pre className="whitespace-pre">{children}</pre>
    </div>
  );
}

function Corner({ className = "" }: { className?: string }) {
  return <div className={`absolute h-5 w-5 border-l-2 border-t-2 border-neon ${className}`} />;
}
