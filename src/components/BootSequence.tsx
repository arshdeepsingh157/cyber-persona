import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINES = [
  "> Initializing secure environment...",
  "> Loading kernel modules [OK]",
  "> Establishing encrypted channel...",
  "> Bypassing firewall... [OK]",
  "> Decrypting identity matrix...",
  "> ACCESS GRANTED",
];

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [phase, setPhase] = useState<"boot" | "reveal" | "exit">("boot");

  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let timer: ReturnType<typeof setTimeout>;

    const typeNext = () => {
      if (lineIdx >= LINES.length) {
        setTimeout(() => setPhase("reveal"), 300);
        setTimeout(() => setPhase("exit"), 1600);
        setTimeout(() => onComplete(), 2100);
        return;
      }
      const line = LINES[lineIdx];
      if (charIdx <= line.length) {
        setCurrentLine(line.slice(0, charIdx));
        charIdx++;
        timer = setTimeout(typeNext, 18);
      } else {
        setVisibleLines((v) => [...v, line]);
        setCurrentLine("");
        lineIdx++;
        charIdx = 0;
        timer = setTimeout(typeNext, 120);
      }
    };
    timer = setTimeout(typeNext, 400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background"
        >
          <div className="absolute inset-0 cyber-grid opacity-30" />
          <div className="pointer-events-none absolute inset-x-0 h-24 animate-scan bg-gradient-to-b from-transparent via-[color-mix(in_oklab,var(--neon)_20%,transparent)] to-transparent" />
          <div className="scanlines absolute inset-0" />

          <div className="relative z-10 w-full max-w-2xl px-6 font-mono text-sm md:text-base">
            {phase === "boot" && (
              <>
                <div className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-destructive" />
                  <span className="h-2 w-2 rounded-full bg-[color:var(--cyber)]" />
                  <span className="h-2 w-2 rounded-full bg-[color:var(--neon)]" />
                  <span className="ml-3">secure_shell@arsh:~$</span>
                </div>
                {visibleLines.map((l, i) => (
                  <div key={i} className="text-neon glow-neon">
                    {l}
                  </div>
                ))}
                <div className="text-neon glow-neon">
                  {currentLine}
                  <span className="animate-blink">▊</span>
                </div>
              </>
            )}

            {phase === "reveal" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="font-display animate-glitch text-4xl font-black uppercase tracking-[0.3em] text-neon glow-neon md:text-6xl">
                  Arshdeep Singh
                </div>
                <div className="mt-4 font-mono text-xs uppercase tracking-[0.4em] text-cyber glow-cyber md:text-sm">
                  Cybersecurity Engineer
                </div>
              </motion.div>
            )}
          </div>

          <button
            onClick={onComplete}
            className="absolute bottom-6 right-6 z-20 rounded border border-border bg-surface/50 px-3 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur transition hover:border-neon hover:text-neon"
          >
            [ESC] SKIP
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
