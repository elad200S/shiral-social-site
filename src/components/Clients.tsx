// Replace with real client names/logos once provided.
const CLIENTS = ["קליינט אחד", "קליינט שתיים", "קליינט שלוש", "קליינט ארבע", "קליינט חמש", "קליינט שש"];

export default function Clients() {
  const track = [...CLIENTS, ...CLIENTS];

  return (
    <section id="clients" className="relative overflow-hidden border-y border-white/5 py-14">
      <p className="mb-8 text-center text-xs font-semibold tracking-[0.3em] text-white/40" dir="rtl">
        עסקים שבנו איתנו אסטרטגיה
      </p>

      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-16 pr-16">
          {track.map((name, i) => (
            <span
              key={i}
              className="font-display shrink-0 whitespace-nowrap text-2xl font-semibold text-white/25 transition hover:text-white/60"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </section>
  );
}
