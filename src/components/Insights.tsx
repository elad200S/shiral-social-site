import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const ARTICLES = [
  {
    category: "אסטרטגיה",
    title: "למה 80% מהקמפיינים נכשלים לפני שהם מתחילים",
    excerpt: "הבעיה כמעט אף פעם לא במדיה — היא בחוסר אסטרטגיה עסקית מתחתיה.",
  },
  {
    category: "CRM ואוטומציה",
    title: "איך AI חוסך לעסק שלכם 10 שעות עבודה בשבוע",
    excerpt: "מדריך מעשי להקמת אוטומציות שמטפלות בלידים לפני שהם מתקררים.",
  },
  {
    category: "מכירות",
    title: "סקריפט המכירה שהצוות שלכם לא מקבל",
    excerpt: "ההבדל בין נציג שמדבר לנציג שסוגר — ואיך להכשיר את הצוות לשם.",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="relative px-4 py-24 sm:px-10">
      <div className="mx-auto mb-14 flex max-w-5xl flex-col items-center text-center" dir="rtl">
        <span className="text-xs font-bold tracking-[0.3em] text-neon">תובנות</span>
        <h2 className="font-display mt-4 text-3xl font-black text-ink sm:text-5xl">
          לא עוד תוכן גנרי. ידע שעובד.
        </h2>
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3" dir="rtl">
        {ARTICLES.map((article, i) => (
          <motion.a
            key={article.title}
            href="#"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-soft group flex flex-col justify-between rounded-3xl p-7 transition hover:border-neon/40"
          >
            <div>
              <span className="text-xs font-bold text-neon">{article.category}</span>
              <h3 className="font-display mt-4 text-xl font-bold text-ink">{article.title}</h3>
              <p className="mt-3 text-sm text-ink/55">{article.excerpt}</p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink/70 transition group-hover:text-neon">
              לקריאה
              <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
