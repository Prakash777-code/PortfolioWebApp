export default async function getRepos() {
  try {
    const res = await fetch("http://localhost:3000/api/github", {
      cache: "no-store",
    });

    if (!res.ok) return [];

    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}