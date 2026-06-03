export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-400">
          About Me
        </span>

        <h1 className="mt-6 text-5xl font-bold md:text-6xl">
          Building Digital
          <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Experiences
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
          I'm a passionate{" "}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text font-semibold text-transparent">
            Android & Full Stack Developer
          </span>{" "}
          who enjoys creating{" "}
          <span className="text-white font-semibold">
            high-performance applications
          </span>{" "}
          and intuitive user experiences. I focus on{" "}
          <span className="text-violet-400 font-semibold">
            clean architecture
          </span>
          ,{" "}
          <span className="text-cyan-400 font-semibold">
            scalable solutions
          </span>
          , and modern development practices.
        </p>
      </div>

      <div className="mt-20 ">
        <h2 className="mx-auto w-fit rounded-full border border-violet-500/20 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 px-8 py-3 text-center text-2xl font-semibold text-white backdrop-blur-md">
          Skills
        </h2>
        <br />

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Android Development",
            "Frontend Development",
            "Backend Development",
            "API Integration",
            "Responsive Design",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-3 text-violet-300 transition-all duration-300 hover:scale-110 hover:bg-violet-500/20 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h2 className="mx-auto w-fit rounded-full border border-violet-500/20 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 px-8 py-3 text-center text-2xl font-semibold text-white backdrop-blur-md">
          Tech Stack
        </h2>
        <br />

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Kotlin",
            "Jetpack Compose",
            "MVVM",
            "Room DB",
            "Retrofit",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Git",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-gradient-to-r from-slate-800/80 to-slate-900/80 px-5 py-3 text-slate-300 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-violet-500/30 hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
