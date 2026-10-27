const LINKS = [
  { label: "שירותים", href: "#services" },
  { label: "לקוחות", href: "#clients" },
  { label: "תובנות", href: "#insights" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <nav className="glass flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 sm:px-8">
        <a href="#top" className="font-display text-lg font-semibold text-white">
          שיראל<span className="text-neon">.</span>סושיאל
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full bg-neon px-5 py-2 text-sm font-semibold text-ink transition hover:brightness-110"
        >
          לקביעת שיחה
        </a>
      </nav>
    </header>
  );
}
