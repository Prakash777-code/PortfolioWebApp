export async function GET() {
  try {
    const repo = await fetch(
      "https://api.github.com/users/Prakash777-code/repos",
    );

    if (!repo.ok) {
      return Response.json({ error: "GitHub API failed" }, { status: 500 });
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
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
