import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative px-4 py-24 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="glass glow-neon mx-auto max-w-3xl rounded-[2rem] p-10 text-center sm:p-16"
        dir="rtl"
      >
        <h2 className="font-display text-3xl font-bold text-white sm:text-5xl">
          מוכנים לבנות אסטרטגיה שעובדת?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/60">
          שיחת ייעוץ ראשונה, בלי עלות ובלי מחויבות — נבין את העסק שלכם לפני שנדבר על פתרונות.
        </p>
        <a
          href="mailto:hello@shiralsocial.co.il"
          className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-neon px-8 py-3.5 text-sm font-semibold text-ink transition hover:brightness-110"
        >
          לקביעת שיחה
          <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
        </a>
      </motion.div>
    </section>
  );
}
