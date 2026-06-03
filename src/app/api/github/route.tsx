export async function GET() {
  try {
    const repo = await fetch(
      "https://api.github.com/users/Prakash777-code/repos",
    );

    if (!repo.ok) {
      console.error("GitHub API failed:", repo.status);
      return Response.json([]);
    }

    const repoJson = await repo.json();

    const repoData = repoJson.map((r: any) => ({
      id: r.id,
      name: r.name,
      description: r.description,
      url: r.html_url,
    }));

    return Response.json(repoData);
  } catch (err) {
    console.error("Server error:", err);
    return Response.json([]);
  }
}
