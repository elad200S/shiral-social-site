import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORD = "שיראל סושיאל";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const start = performance.now();
    const DURATION = 1200;

    let frame: number;
    const tick = () => {
      const elapsed = performance.now() - start;
      const pct = Math.min(100, Math.round((elapsed / DURATION) * 100));
      setProgress(pct);
      if (elapsed < DURATION) {
        frame = requestAnimationFrame(tick);
      } else {
        document.body.style.overflow = "";
        setVisible(false);
      }
    };
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          dir="rtl"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
        >
          <div className="relative flex gap-[2px] overflow-hidden font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            {WORD.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.5,
                  delay: 0.05 * i,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={char === " " ? "w-2" : undefined}
              >
                {char}
              </motion.span>
            ))}
          </div>

          <motion.div
            className="relative mt-8 h-[2px] w-40 overflow-hidden rounded-full bg-white/10 sm:w-56"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="absolute inset-y-0 right-0 bg-neon glow-neon"
              style={{ width: `${progress}%` }}
            />
          </motion.div>

          <motion.span
            className="mt-3 font-display text-xs tracking-[0.3em] text-white/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {String(progress).padStart(2, "0")}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
