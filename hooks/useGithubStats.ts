import { useState, useEffect } from 'react';

interface GithubStats {
  repos: number;
  commits: number;
  loading: boolean;
}

export const useGithubStats = (): GithubStats => {
  const [stats, setStats] = useState<GithubStats>({
    repos: 20, // Fallback base value
    commits: 5000, // Fallback base value
    loading: true,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchStats = async () => {
      try {
        // Fetch public repos
        const userRes = await fetch('https://api.github.com/users/dfegarido');
        const userData = await userRes.json();
        const repos = userData.public_repos ? userData.public_repos : 20;

        // Fetch public commits
        const commitsRes = await fetch(
          'https://api.github.com/search/commits?q=author:dfegarido',
          {
            headers: {
              Accept: 'application/vnd.github.cloak-preview',
            },
          }
        );
        const commitsData = await commitsRes.json();
        // Fallback to 5000 if rate limited or failed
        const commits = commitsData.total_count ? commitsData.total_count : 5000;

        if (isMounted) {
          setStats({ repos, commits, loading: false });
        }
      } catch (error) {
        console.error('Failed to fetch GitHub stats:', error);
        if (isMounted) {
          setStats(prev => ({ ...prev, loading: false }));
        }
      }
    };

    fetchStats();

    return () => {
      isMounted = false;
    };
  }, []);

  return stats;
};