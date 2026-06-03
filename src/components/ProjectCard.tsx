type ProjectCardProps = {
  name: string;
  description: string;
  url: string;
};

export default function ProjectCard({
  name,
  description,
  url,
}: ProjectCardProps) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:border-violet-500/30 hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]">
      <h2 className="text-xl font-bold text-white transition group-hover:text-violet-400">
        {name}
      </h2>

      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {description || "No description"}
      </p>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center text-sm font-medium text-violet-400 transition hover:text-cyan-400"
      >
        View Repository →
      </a>
    </div>
  );
}
