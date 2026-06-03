import ProjectCard from "@/components/ProjectCard";
import getRepos from "@/Services/github";

export default async function Projects() {
  const repos = await getRepos();

  return (
    <section className="px-6 py-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white md:text-5xl">
          My <span className="text-violet-400">Projects</span>
        </h1>

        <p className="mt-3 text-slate-400">
          Some of my GitHub repositories and experiments
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo: any) => (
          <ProjectCard
            key={repo.id}
            name={repo.name}
            description={repo.description}
            url={repo.url}
          />
        ))}
      </div>
    </section>
  );
}
