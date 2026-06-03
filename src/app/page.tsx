import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">
      <span className="hover:scale-120 transition duration-300 mb-4 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]">
        Available for Opportunities 🚀
      </span>

      <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl ">
        Hi, I'm
        <span className=" block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Prakash
        </span>
      </h1>

      <h2 className="mt-4 text-xl font-medium text-slate-300 md:text-3xl ">
        Android & Web Developer
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400  rounded-2xl">
        Crafting modern{" "}
        <span className="text-violet-400 font-semibold">
          Android applications
        </span>{" "}
        and{" "}
        <span className="text-cyan-400 font-semibold">
          scalable web experiences
        </span>{" "}
        with Kotlin, Jetpack Compose, React, Next.js and LocalStorage.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/projects"
          className="rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]"
        >
          View My Projects →
        </Link>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {[
          "Kotlin",
          "Local Storage",
          "React",
          "Next.js",
          "Apis",
          "Tailwind CSS",
          "MVVM",
          "Retrofit",
          "TypeScript",
          "JavaScript",
        ].map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-gradient-to-r from-slate-800/80 to-slate-900/80 px-4 py-2 text-sm text-slate-300 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-violet-500/30 hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
