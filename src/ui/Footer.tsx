export default function Footer() {
  return (
    <footer className="border-t border-red-900/30 bg-black/30 backdrop-blur">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-6 text-[11px] sm:text-xs text-zinc-500 flex flex-col sm:flex-row sm:items-center justify-between gap-2 tracking-[0.08em]">
        <div>(c) {new Date().getFullYear()} DARK 4RMY DFIR HUB</div>
        <div>Website by Ahmed Abdelnasser Ahmed</div>
      </div>
    </footer>
  )
}
