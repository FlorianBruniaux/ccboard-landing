/**
 * Build-time stats fetching from GitHub API and Crates.io
 * Called during Astro build (SSG) - results are baked into HTML
 */

export interface CcboardStats {
  stars: number | null
  forks: number | null
  totalDownloads: number | null
  recentDownloads: number | null
  latestVersion: string | null
}

const FALLBACK: CcboardStats = {
  stars: null,
  forks: null,
  totalDownloads: null,
  recentDownloads: null,
  latestVersion: '0.8.0',
}

async function fetchGitHub(): Promise<Partial<CcboardStats>> {
  try {
    const res = await fetch('https://api.github.com/repos/FlorianBruniaux/ccboard', {
      headers: { Accept: 'application/vnd.github.v3+json' },
    })
    if (!res.ok) return {}
    const data = await res.json()
    return {
      stars: data.stargazers_count ?? null,
      forks: data.forks_count ?? null,
    }
  } catch {
    return {}
  }
}

async function fetchCratesIo(): Promise<Partial<CcboardStats>> {
  try {
    const res = await fetch('https://crates.io/api/v1/crates/ccboard', {
      headers: { 'User-Agent': 'ccboard-landing (https://ccboard.bruniaux.com)' },
    })
    if (!res.ok) return {}
    const data = await res.json()
    const crate = data.crate
    return {
      totalDownloads: crate?.downloads ?? null,
      recentDownloads: crate?.recent_downloads ?? null,
      latestVersion: crate?.max_version ?? null,
    }
  } catch {
    return {}
  }
}

export async function fetchStats(): Promise<CcboardStats> {
  const [gh, crates] = await Promise.allSettled([fetchGitHub(), fetchCratesIo()])

  const ghData = gh.status === 'fulfilled' ? gh.value : {}
  const cratesData = crates.status === 'fulfilled' ? crates.value : {}

  return { ...FALLBACK, ...ghData, ...cratesData }
}

/** Format number with locale-aware separators */
export function formatNumber(n: number | null): string {
  if (n === null) return '--'
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`
  return n.toString()
}
