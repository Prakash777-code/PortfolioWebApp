export default async function getRepos() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/github`, {
      cache: "no-store",
    });

    if (!res.ok) return [];

    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}