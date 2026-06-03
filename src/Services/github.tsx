export default async function getRepos() {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/github`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch repos");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}