
import ProjectCard from "@/components/ProjectCard";
import getRepos from "@/Services/github";

export default async function Projects() {
  const repos = await getRepos();

  return (
    <section className="px-6 py-20">
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