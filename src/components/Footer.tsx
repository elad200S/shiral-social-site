import { ArrowLeft, Mail, Phone } from "lucide-react";

const LINKS = [
  { label: "שירותים", href: "#services" },
  { label: "לקוחות", href: "#clients" },
  { label: "תובנות", href: "#insights" },
  { label: "צור קשר", href: "#contact" },
];

const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink px-4 pt-16 pb-8 sm:px-10">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-10" />

      <div className="relative mx-auto grid max-w-5xl gap-12 sm:grid-cols-[1.3fr_1fr_1fr]" dir="rtl">
        <div>
          <span className="font-display text-2xl font-extrabold text-white">
            שיראל<span className="text-neon">.</span>סושיאל
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
            אסטרטגיה עסקית. אחר כך שיווק. סוכנות דיגיטל שבונה תהליכי עסק לפני שהיא בונה קמפיינים.
          </p>
          <a
            href="#contact"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-neon"
          >
            בואו נדבר
            <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
          </a>
        </div>

        <div>
          <span className="text-xs font-bold tracking-[0.3em] text-white/40">ניווט</span>
          <ul className="mt-5 flex flex-col gap-3">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/60 transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-xs font-bold tracking-[0.3em] text-white/40">יצירת קשר</span>
          <ul className="mt-5 flex flex-col gap-3">
            <li>
              <a
                href="mailto:hello@shiralsocial.co.il"
                className="flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-neon" />
                hello@shiralsocial.co.il
              </a>
            </li>
            <li>
              <a
                href="tel:+972000000000"
                className="flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
              >
                <Phone className="h-4 w-4 text-neon" />
                050-000-0000
              </a>
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-4">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-xs font-semibold text-white/60 transition hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="relative mx-auto mt-14 flex max-w-5xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row"
        dir="rtl"
      >
        <span>© {new Date().getFullYear()} שיראל סושיאל. כל הזכויות שמורות</span>
        <span>אסטרטגיה עסקית. אחר כך שיווק.</span>
      </div>
    </footer>
  );
}
