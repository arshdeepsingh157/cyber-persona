import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BootSequence } from "@/components/BootSequence";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  ssr: false,
});

function Index() {
  // Default: show boot. On mount, skip if already seen this session.
  const [booted, setBooted] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem("arsh_booted") === "1";
  });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") finish();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const finish = () => {
    try {
      sessionStorage.setItem("arsh_booted", "1");
    } catch {}
    setBooted(true);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {!booted && <BootSequence onComplete={finish} />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
