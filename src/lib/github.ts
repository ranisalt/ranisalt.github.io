export type GithubRepo = {
  full_name: string;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics?: string[];
};

const cache = new Map<string, GithubRepo>();

export async function fetchGithubRepo(slug: string, signal?: AbortSignal) {
  const cached = cache.get(slug);

  if (cached) {
    return cached;
  }

  const response = await fetch(`https://api.github.com/repos/${slug}`, {
    headers: { Accept: "application/vnd.github+json" },
    signal,
  });

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  const data = (await response.json()) as GithubRepo;
  cache.set(slug, data);
  return data;
}
