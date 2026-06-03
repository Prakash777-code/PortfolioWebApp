import Link from "next/link";

export default function Navbar() {
  return (
    <header className="pt-6 px-4">
      <nav className="mx-auto flex w-fit flex-wrap items-center justify-center gap-2 rounded-full border border-violet-500/20 bg-gradient-to-r from-slate-900/80 to-slate-800/60 p-2 backdrop-blur-xl shadow-[0_0_25px_rgba(139,92,246,0.15)]">
        
        <Link
          href="/"
          className="rounded-full px-5 py-2 text-slate-300 transition-all duration-300 hover:scale-110 hover:text-white hover:bg-violet-500/20 hover:shadow-[0_0_15px_rgba(139,92,246,0.25)]"
        >
          Home
        </Link>

        <Link
          href="/projects"
          className="rounded-full px-5 py-2 text-slate-300 transition-all duration-300 hover:scale-110 hover:text-white hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)]"
        >
          Projects
        </Link>

        <Link
          href="/contact"
          className="rounded-full px-5 py-2 text-slate-300 transition-all duration-300 hover:scale-110 hover:text-white hover:bg-violet-500/20 hover:shadow-[0_0_15px_rgba(139,92,246,0.25)]"
        >
          Contact
        </Link>

        <Link
          href="/about"
          className="rounded-full px-5 py-2 text-slate-300 transition-all duration-300 hover:scale-110 hover:text-white hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)]"
        >
          About
        </Link>

      </nav>
    </header>
  );
}