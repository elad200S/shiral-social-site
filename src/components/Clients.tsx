// Replace with real client names/logos once provided.
const CLIENTS = ["קליינט אחד", "קליינט שתיים", "קליינט שלוש", "קליינט ארבע", "קליינט חמש", "קליינט שש"];

export default function Clients() {
  const track = [...CLIENTS, ...CLIENTS];

  return (
    <section id="clients" className="relative overflow-hidden border-y border-ink/8 bg-paper py-14">
      <p className="mb-8 text-center text-xs font-bold tracking-[0.3em] text-ink/40" dir="rtl">
        עסקים שבנו איתנו אסטרטגיה
      </p>

      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-16 pr-16">
          {track.map((name, i) => (
            <span
              key={i}
              className="font-display shrink-0 whitespace-nowrap text-2xl font-extrabold text-ink/25 transition hover:text-ink/60"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper to-transparent" />
    </section>
  );
}
