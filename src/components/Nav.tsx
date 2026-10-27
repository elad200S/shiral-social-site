const LINKS = [
  { label: "שירותים", href: "#services" },
  { label: "לקוחות", href: "#clients" },
  { label: "תובנות", href: "#insights" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <nav className="card-soft flex w-full max-w-5xl items-center justify-between rounded-full bg-paper/90 px-5 py-3 backdrop-blur-md sm:px-8">
        <a href="#top" className="font-display text-lg font-extrabold text-ink">
          שיראל<span className="text-neon">.</span>סושיאל
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/60 transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full bg-neon px-5 py-2 text-sm font-bold text-ink transition hover:brightness-105"
        >
          לקביעת שיחה
        </a>
      </nav>
    </header>
  );
}
