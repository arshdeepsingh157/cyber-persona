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
  // Boot animation plays on EVERY refresh/entry.
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    // Always land on hero on load/refresh — disable browser scroll restoration and jump to top.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") finish();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const finish = () => {
    setBooted(true);
    // Ensure we're at the hero after the boot sequence completes.
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
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
