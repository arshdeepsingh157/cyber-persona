import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2 font-mono text-sm">
          <span className="flex h-8 w-8 items-center justify-center rounded border border-neon bg-background text-neon glow-neon">
            {"</>"}
          </span>
          <span className="font-display font-bold uppercase tracking-widest text-foreground">
            arsh<span className="text-neon">.</span>sec
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded px-3 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition hover:text-neon"
              >
                <span className="text-neon">$</span> {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded border border-neon bg-[color-mix(in_oklab,var(--neon)_10%,transparent)] px-4 py-2 font-mono text-xs uppercase tracking-widest text-neon transition hover:shadow-neon md:inline-block"
        >
          Connect
        </a>

        <button
          aria-label="menu"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded border border-border text-neon md:hidden"
        >
          <span className="font-mono">{open ? "×" : "≡"}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-mono text-sm text-muted-foreground hover:text-neon"
                >
                  <span className="text-neon">$</span> {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
