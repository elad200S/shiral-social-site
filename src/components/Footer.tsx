export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-8 sm:px-10">
      <div
        className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-white/40 sm:flex-row"
        dir="rtl"
      >
        <span className="font-display text-white/70">
          שיראל<span className="text-neon">.</span>סושיאל
        </span>
        <span>© {new Date().getFullYear()} כל הזכויות שמורות</span>
      </div>
    </footer>
  );
}
