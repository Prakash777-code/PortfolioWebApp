export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 text-center">
        <h3 className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-xl font-bold text-transparent hover:scale-120 transition duration-300">
          Prakash
        </h3>

        <p className="mt-2 text-sm text-slate-400 hover:scale-120 transition duration-300">
          Android & Web Developer
        </p>

        <p className="mt-4 text-xs text-white hover:scale-120 transition duration-300">
          © {new Date().getFullYear()} Prakash. Crafted with Next.js &
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}