export const dynamic = "force-dynamic";

import ProjectCard from "@/components/ProjectCard";
import getRepos from "@/Services/github";

export default async function Projects() {
  try {
    const repos = await getRepos();

    if (!Array.isArray(repos)) {
      return (
        <div className="text-white text-center mt-10">
          Failed to load projects
        </div>
      );
    }

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
  } catch (error) {
    console.error(error);

    return (
      <div className="text-white text-center mt-10">
        Server error while loading projects
      </div>
    );
  }
}