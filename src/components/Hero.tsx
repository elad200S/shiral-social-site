import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import HeroScene from "./HeroScene";
import HandsReveal from "./HandsReveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-20 sm:px-10"
    >
      {/* Abstract tech background */}
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-30" />
      <div className="pointer-events-none absolute -top-40 -left-32 h-96 w-96 rounded-full bg-neon/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-72 w-72 rounded-full bg-neon/10 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 hidden opacity-70 sm:block">
        <HeroScene />
      </div>
      <HandsReveal />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <motion.div
        className="glass absolute top-28 left-[8%] hidden rotate-[8deg] rounded-2xl px-4 py-3 font-display text-xs text-white/60 sm:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        /// אסטרטגיה &gt; ביצוע
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl text-center" dir="rtl">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-neon" />
          סוכנות דיגיטל וטכנולוגיה
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-display mt-6 text-4xl font-bold leading-[1.15] text-white sm:text-6xl sm:leading-[1.1]"
        >
          לפני שמוכרים שיווק,
          <br />
          <span className="text-neon">מבינים עסק ואסטרטגיה.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-base text-white/60 sm:text-lg"
        >
          פיתוח אתרים, ניהול סושיאל וקמפיינים, CRM ואוטומציות AI ואימוני מכירות —
          הכול בנוי על אסטרטגיה עסקית אחת, לא על טקטיקות מפוזרות.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="glow-neon group inline-flex items-center gap-2 rounded-full bg-neon px-8 py-3.5 text-sm font-semibold text-ink transition hover:brightness-110"
          >
            בואו נדבר על האסטרטגיה שלכם
            <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
          </a>
          <a
            href="#services"
            className="glass rounded-full px-8 py-3.5 text-sm font-semibold text-white/80 transition hover:text-white"
          >
            השירותים שלנו
          </a>
        </motion.div>
      </div>
    </section>
  );
}
