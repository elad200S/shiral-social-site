import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hand } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const toTouch = setTimeout(() => setTouched(true), 850);
    const toReveal = setTimeout(() => {
      document.body.style.overflow = "";
      setVisible(false);
    }, 1700);

    return () => {
      clearTimeout(toTouch);
      clearTimeout(toReveal);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          dir="rtl"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          <div className="pointer-events-none absolute inset-0 bg-noise opacity-20" />

          <div className="relative h-36 w-full max-w-[18rem] sm:h-52 sm:max-w-sm">
            {/* Wireframe hand, reaching in from the right */}
            <motion.div
              className="absolute left-1/2 top-1/2"
              initial={{ x: "30%", y: "-50%", opacity: 0, rotate: 10 }}
              animate={{
                x: touched ? "-4%" : "18%",
                y: "-50%",
                opacity: 1,
                rotate: touched ? 2 : 10,
              }}
              transition={{ duration: 0.85, ease: EASE }}
            >
              <Hand
                className="h-24 w-24 scale-x-[-1] text-white/70 sm:h-32 sm:w-32"
                strokeWidth={0.5}
              />
            </motion.div>

            {/* Human hand, reaching in from the left */}
            <motion.div
              className="absolute left-1/2 top-1/2"
              initial={{ x: "-90%", y: "-50%", opacity: 0, rotate: -10 }}
              animate={{
                x: touched ? "-70%" : "-82%",
                y: "-50%",
                opacity: 1,
                rotate: touched ? -2 : -10,
              }}
              transition={{ duration: 0.85, ease: EASE }}
            >
              <Hand className="h-20 w-20 text-neon sm:h-28 sm:w-28" strokeWidth={0.5} />
            </motion.div>

            {/* Touch spark */}
            <motion.div
              className="absolute left-[14%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-neon"
              style={{ boxShadow: "0 0 60px 20px rgba(251,157,21,0.55)" }}
              initial={{ opacity: 0, scale: 0 }}
              animate={touched ? { opacity: [0, 1, 0], scale: [0.3, 5, 9] } : {}}
              transition={{ duration: 0.75, ease: "easeOut" }}
            />
          </div>

          <motion.span
            className="font-display mt-10 text-sm font-bold tracking-[0.3em] text-white/60"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: touched ? 1 : 0, y: touched ? 0 : 8 }}
            transition={{ duration: 0.4 }}
          >
            שיראל סושיאל
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
