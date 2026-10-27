import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Compass,
  Code2,
  Megaphone,
  Target,
  Bot,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Service = {
  index: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  points: string[];
};

const SERVICES: Service[] = [
  {
    index: "01",
    icon: Compass,
    title: "אסטרטגיה עסקית",
    tagline: "לפני שבונים קמפיין, בונים תוכנית. כל פעולה שיווקית נגזרת ממטרה עסקית ברורה — לא להפך.",
    points: ["מיפוי מודל עסקי ויעדי צמיחה", "הגדרת קהל יעד ומסרים מדויקים", "תוכנית רבעונית מבוססת נתונים"],
  },
  {
    index: "02",
    icon: Code2,
    title: "פיתוח אתרים",
    tagline: "אתרים שבנויים להמיר, לא רק להרשים. מהירים, ברורים, ונכתבים לפי הדרך שבה לקוחות באמת מחליטים.",
    points: ["עיצוב UX/UI ממוקד המרה", "פיתוח מהיר וריספונסיבי", "חיבור מלא ל-CRM ולמעקב נתונים"],
  },
  {
    index: "03",
    icon: Megaphone,
    title: "ניהול סושיאל",
    tagline: "נוכחות דיגיטלית שבונה סמכות, לא רק לייקים. תוכן שמוביל ישירות לפעולה עסקית.",
    points: ["אסטרטגיית תוכן חודשית", "ניהול וקריאייטיב מלא", "דיווח חודשי עם תובנות אמיתיות"],
  },
  {
    index: "04",
    icon: Target,
    title: "ניהול קמפיינים",
    tagline: "מדיה ממומנת שמתנהלת כמו עסק — תקציב, בדיקות ואופטימיזציה סביב ROI, לא סביב קליקים.",
    points: ["קמפיינים ב-Meta, Google ו-TikTok", "בדיקות A/B מתמשכות", "אופטימיזציה סביב עלות לקוח"],
  },
  {
    index: "05",
    icon: Bot,
    title: "CRM ואוטומציות AI",
    tagline: "מערכות שעובדות בשבילכם. כל ליד נכנס, מטופל ועוקב אחריו — בלי שתצטרכו לזכור כלום.",
    points: ["הקמת CRM מותאם לעסק", "אוטומציות AI לטיפול בלידים", "חיבור לוואטסאפ, מייל וטפסים"],
  },
  {
    index: "06",
    icon: GraduationCap,
    title: "אימוני מכירות",
    tagline: "הצוות שלכם הוא קו ההמרה האחרון. אנחנו מכשירים אותו לסגור, לא רק לדבר.",
    points: ["הכשרת צוות מכירות ושירות", "תסריטי שיחה מבוססי נתונים", "סימולציות וליווי שוטף"],
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".service-card");

    // Each card's resting tilt before it reaches the top of the stack —
    // alternating left/right and growing with index, like a fanned deck.
    const fan = (i: number) => ({
      rotate: i % 2 === 0 ? -(6 + i * 1.5) : 6 + i * 1.5,
      x: i % 2 === 0 ? -(24 + i * 4) : 24 + i * 4,
    });

    cards.forEach((card, i) => {
      const { rotate, x } = fan(i);
      gsap.set(card, { rotate, x, transformOrigin: "50% 100%" });
    });

    const triggers = cards.map((card, i) => {
      const { rotate, x } = fan(i);

      // Straighten the card out of its fanned tilt as it arrives at the top.
      const straighten = gsap.to(card, {
        rotate: 0,
        x: 0,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "top 96px",
          scrub: true,
        },
      });

      // Pin each card to the top of the viewport. pinSpacing: false means no
      // extra scroll room is reserved for it, so the next card's section
      // scrolls straight up and visually covers it — producing the stack.
      const pin = ScrollTrigger.create({
        trigger: card,
        start: "top 96px",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
      });

      // While the next card slides over this one, scale it down, dim it and
      // tilt it the other way so it reads as tucked back into the fan.
      let dim: gsap.core.Tween | null = null;
      if (i < cards.length - 1) {
        dim = gsap.to(card, {
          scale: 0.88,
          y: -36,
          rotate: -rotate * 0.6,
          x: -x * 0.6,
          filter: "brightness(0.45)",
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top 96px",
            end: "top -40%",
            scrub: true,
          },
        });
      }

      return dim
        ? [straighten.scrollTrigger!, pin, dim.scrollTrigger!]
        : [straighten.scrollTrigger!, pin];
    });

    return () => {
      triggers.flat().forEach((t) => t?.kill());
    };
  }, []);

  return (
    <section id="services" ref={containerRef} className="relative px-4 py-20 sm:px-10">
      <div className="mx-auto mb-16 max-w-3xl text-center" dir="rtl">
        <span className="text-xs font-semibold tracking-[0.3em] text-neon">השירותים שלנו</span>
        <h2 className="font-display mt-4 text-3xl font-bold text-white sm:text-5xl">
          שישה תחומים, אסטרטגיה אחת
        </h2>
      </div>

      <div className="relative mx-auto max-w-3xl">
        {SERVICES.map((service) => (
          <div
            key={service.index}
            className="service-card glass relative mb-6 flex min-h-[62vh] flex-col justify-between rounded-3xl p-8 sm:p-12"
            dir="rtl"
          >
            <div className="flex items-start justify-between">
              <span className="font-display text-sm text-white/40">{service.index}</span>
              <span className="glass flex h-11 w-11 items-center justify-center rounded-2xl">
                <service.icon className="h-5 w-5 text-neon" />
              </span>
            </div>

            <div>
              <h3 className="font-display text-3xl font-bold text-white sm:text-5xl">
                {service.title}
              </h3>
              <p className="mt-5 max-w-xl text-base text-white/60 sm:text-lg">{service.tagline}</p>

              <ul className="mt-8 flex flex-col gap-3">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-white/70 sm:text-base">
                    <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-neon" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
