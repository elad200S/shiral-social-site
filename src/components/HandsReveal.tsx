import { motion } from "framer-motion";
import { Hand } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function HandsReveal() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute left-1/2 top-1/2"
        initial={{ x: "-62vw", y: "-50%", opacity: 0, rotate: -40 }}
        animate={{ x: "-20vw", y: "-50%", opacity: 0.85, rotate: -18 }}
        transition={{ duration: 1.2, ease: EASE }}
      >
        <Hand
          className="h-[42vh] w-[42vh] text-neon drop-shadow-[0_0_70px_rgba(255,94,0,0.4)]"
          strokeWidth={0.6}
        />
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-1/2 scale-x-[-1]"
        initial={{ x: "62vw", y: "-50%", opacity: 0, rotate: 40 }}
        animate={{ x: "20vw", y: "-50%", opacity: 0.85, rotate: 18 }}
        transition={{ duration: 1.2, ease: EASE }}
      >
        <Hand
          className="h-[42vh] w-[42vh] text-neon drop-shadow-[0_0_70px_rgba(255,94,0,0.4)]"
          strokeWidth={0.6}
        />
      </motion.div>
    </div>
  );
}
