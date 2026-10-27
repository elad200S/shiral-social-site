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
        className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] bg-neon p-10 text-center sm:p-16"
        dir="rtl"
      >
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-20" />
        <h2 className="font-display relative text-3xl font-black text-white sm:text-5xl">
          מוכנים לבנות אסטרטגיה שעובדת?
        </h2>
        <p className="relative mx-auto mt-5 max-w-xl text-white/90">
          שיחת ייעוץ ראשונה, בלי עלות ובלי מחויבות — נבין את העסק שלכם לפני שנדבר על פתרונות.
        </p>
        <a
          href="mailto:hello@shiralsocial.co.il"
          className="group relative mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-3.5 text-sm font-bold text-white transition hover:brightness-125"
        >
          לקביעת שיחה
          <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
        </a>
      </motion.div>
    </section>
  );
}
