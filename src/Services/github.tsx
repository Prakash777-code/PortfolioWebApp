export default async function getRepos() {
  const repos = await fetch("http://localhost:3000/api/github", {
    cache: "no-store",
  });

  return repos.json();
}