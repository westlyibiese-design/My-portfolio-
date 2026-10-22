import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Star, GitFork, ExternalLink, Code } from 'lucide-react';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export const GithubSection: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/westlyibiese-design/repos?sort=updated&per_page=6')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-4">
          <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-400 uppercase">Open Source</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white">GitHub Repositories</h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl">
            Explore public source code, experimental codebases, and active projects directly from GitHub.
          </p>
        </div>

        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors w-fit"
        >
          <Github className="w-5 h-5 text-cyan-400" />
          <span>Visit GitHub Profile</span>
        </a>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 h-48 animate-pulse" />
          ))}
        </div>
      ) : repos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    <Code className="w-4 h-4 text-cyan-400" />
                    <span className="truncate">{repo.name}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {repo.description || 'No description available for this repository.'}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 text-xs text-gray-400">
                <span>{repo.language || 'Code'}</span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-cyan-400" />
                    {repo.forks_count}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 rounded-2xl bg-white/[0.02] border border-white/10">
          <p className="text-gray-400">Check out all repositories directly on <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">GitHub</a>.</p>
        </div>
      )}
    </section>
  );
};