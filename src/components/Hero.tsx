import { motion } from "framer-motion";
import { ArrowLeft, User, Sparkles, Target, Bot } from "lucide-react";

const FEATURES = [
  { icon: Target, label: "אסטרטגיה לפני טקטיקה" },
  { icon: Sparkles, label: "שישה תחומים, צוות אחד" },
  { icon: Bot, label: "CRM ואוטומציות AI" },
];

export default function Hero() {
  return (
    <section id="top" dir="ltr" className="relative grid min-h-screen grid-cols-1 pt-20 md:grid-cols-2 md:pt-0">
      {/* Left panel — orange */}
      <div className="relative flex flex-col justify-center overflow-hidden bg-neon px-6 py-16 sm:px-10 md:py-0" dir="rtl">
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-25" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-white/15 blur-[100px]" />
        <div className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-ink/10 blur-[90px]" />

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-dark relative z-10 inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-white"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          סוכנות דיגיטל וטכנולוגיה
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-display relative z-10 mt-6 max-w-lg text-5xl font-black leading-[0.98] text-white sm:text-6xl lg:text-7xl"
        >
          לפני שמוכרים
          <br />
          שיווק, מבינים
          <br />
          עסק ואסטרטגיה.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-10 mt-6 max-w-sm text-base text-white/90 sm:text-lg"
        >
          פיתוח אתרים, ניהול סושיאל וקמפיינים, CRM ואוטומציות AI ואימוני מכירות —
          הכול בנוי על אסטרטגיה עסקית אחת.
        </motion.p>

        {/* Portrait placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="glass-dark relative z-10 mt-10 flex aspect-[4/5] w-40 items-center justify-center self-end rounded-3xl sm:w-48"
        >
          <User className="h-14 w-14 text-white/50" strokeWidth={1} />
        </motion.div>
      </div>

      {/* Right panel — white */}
      <div className="relative flex flex-col justify-center bg-paper px-6 py-16 sm:px-10" dir="rtl">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-xs font-bold tracking-[0.3em] text-neon"
        >
          /// למה שיראל סושיאל
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="font-display mt-4 max-w-sm text-2xl font-extrabold leading-snug text-ink sm:text-3xl"
        >
          לא עוד ספק שירות. צוות שחושב כמו שותף עסקי.
        </motion.h2>

        <div className="mt-8 flex flex-col gap-3">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.75 + i * 0.1 }}
              className="card-soft flex items-center gap-3 rounded-2xl px-4 py-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neon/15">
                <feature.icon className="h-4 w-4 text-neon" />
              </span>
              <span className="text-sm font-semibold text-ink/80">{feature.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="glow-neon group inline-flex items-center gap-2 rounded-full bg-neon px-8 py-3.5 text-sm font-bold text-ink transition hover:brightness-105"
          >
            בואו נדבר על האסטרטגיה שלכם
            <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
          </a>
          <a
            href="#services"
            className="rounded-full border border-ink/15 px-8 py-3.5 text-sm font-bold text-ink/70 transition hover:border-ink/30 hover:text-ink"
          >
            השירותים שלנו
          </a>
        </motion.div>
      </div>
    </section>
  );
}
