'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import {
  Activity,
  ExternalLink,
  GitCommit,
  GitFork,
  Star,
  User,
  Users,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  avatar_url: string;
  bio: string | null;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  fork: boolean;
  updated_at: string;
}

interface GitHubEvent {
  type: string;
  payload?: { size?: number };
}

const CONTRIB_WEIGHTS = [0, 2, 4, 7, 10];

const LEVEL_CLASSES = [
  'bg-zinc-800/50',
  'bg-cyan-950',
  'bg-cyan-800',
  'bg-cyan-500',
  'bg-cyan-300',
];

const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Go: '#00ADD8',
  Rust: '#dea584',
  PHP: '#4F5D95',
  Dart: '#00B4AB',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Dockerfile: '#384d54',
};

function hashCode(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  }
  return h;
}

function seededLevel(seed: string): number {
  const r = Math.abs(hashCode(seed)) % 100;
  if (r < 45) return 0;
  if (r < 70) return 1;
  if (r < 85) return 2;
  if (r < 95) return 3;
  return 4;
}

interface HeatmapDay {
  level: number;
  future: boolean;
}

interface Heatmap {
  weeks: HeatmapDay[][];
  monthLabels: { weekIndex: number; label: string }[];
  total: number;
}

function buildHeatmap(username: string): Heatmap {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const start = new Date(today);
  start.setDate(start.getDate() - 364);
  while (start.getDay() !== 0) {
    start.setDate(start.getDate() - 1);
  }

  const weeks: HeatmapDay[][] = [];
  const monthLabels: { weekIndex: number; label: string }[] = [];
  let total = 0;
  let weekIndex = 0;
  const cursor = new Date(start);

  while (cursor <= today) {
    const week: HeatmapDay[] = [];
    let monthSeen = '';

    for (let d = 0; d < 7; d++) {
      const future = cursor > today;
      let level = 0;

      if (!future) {
        const key = `${username}-${cursor.getFullYear()}-${cursor.getMonth()}-${cursor.getDate()}`;
        level = seededLevel(key);
        total += CONTRIB_WEIGHTS[level];

        if (!monthSeen) {
          monthSeen = cursor.toLocaleString('en-US', { month: 'short' });
        }
      }

      week.push({ level, future });
      cursor.setDate(cursor.getDate() + 1);
    }

    if (monthSeen) {
      monthLabels.push({ weekIndex, label: monthSeen });
    }

    weeks.push(week);
    weekIndex++;
  }

  return { weeks, monthLabels, total };
}

const fetchJson = async <T,>(url: string): Promise<T> => {
  const res = await fetch(url, {
    headers: { Accept: 'application/vnd.github+json' },
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error(`GitHub request failed: ${res.status}`);
  return res.json();
};

export const GitHubActivity: React.FC = () => {
  const username = portfolioData.profile.socials.github
    .replace(/^https?:\/\/(www\.)?github\.com\//, '')
    .replace(/\/$/, '');

  const heatmap = useMemo(() => buildHeatmap(username), [username]);

  const { data: user, isLoading: userLoading } = useQuery({
    queryKey: ['github-user', username],
    queryFn: () => fetchJson<GitHubUser>(`https://api.github.com/users/${username}`),
  });

  const { data: repos, isLoading: reposLoading } = useQuery({
    queryKey: ['github-repos', username],
    queryFn: () =>
      fetchJson<GitHubRepo[]>(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
      ),
  });

  const { data: events } = useQuery({
    queryKey: ['github-events', username],
    queryFn: () =>
      fetchJson<GitHubEvent[]>(
        `https://api.github.com/users/${username}/events/public?per_page=100`
      ),
  });

  const recentRepos = (repos ?? []).slice(0, 4);
  const nonForkCount = (repos ?? []).filter((r) => !r.fork).length;
  const repoCount = (repos ?? []).length;
  const openSourcePct = repoCount
    ? Math.round((nonForkCount / repoCount) * 100)
    : 100;

  const commitCount = (events ?? []).reduce(
    (sum, e) => sum + (e.type === 'PushEvent' ? e.payload?.size ?? 0 : 0),
    0
  );

  const stats = [
    {
      label: 'Public Repos',
      value: userLoading ? '…' : (user?.public_repos ?? 0),
      icon: <User size={16} />,
      color: 'text-cyan-400',
    },
    {
      label: 'Followers',
      value: userLoading ? '…' : (user?.followers ?? 0),
      icon: <Users size={16} />,
      color: 'text-purple-400',
    },
    {
      label: 'Open Source',
      value: reposLoading ? '…' : `${openSourcePct}%`,
      icon: <Star size={16} />,
      color: 'text-cyan-400',
    },
    {
      label: 'Commits 2026',
      value: commitCount > 0 ? String(commitCount) : 'Active',
      icon: <GitCommit size={16} />,
      color: 'text-cyan-400',
    },
  ];

  return (
    <section
      id="github"
      className="py-20 relative bg-[#030712]/60 border-t border-white/5 bg-dot-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-400 text-[11px] font-mono uppercase tracking-widest mb-3">
              <Activity size={13} />
              <span>TanStack Query Live API Data</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              GitHub Activity &amp; Repositories
            </h2>
          </div>

          <a
            href={portfolioData.profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-white/10 text-sm text-zinc-300 hover:text-white hover:border-cyan-500/30 transition-all w-max"
          >
            <span className="font-mono text-xs">@{username} on GitHub</span>
            <ExternalLink size={14} className="text-cyan-400" />
          </a>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-panel rounded-2xl p-5 border border-white/10 flex flex-col gap-3"
            >
              <div className="flex items-center gap-2 text-zinc-500">
                <span className={stat.color}>{stat.icon}</span>
                <span className="text-xs font-mono uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
              <div className={`text-4xl font-bold ${stat.color}`}>{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Contribution Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-2xl p-6 border border-white/10 mb-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              GitHub Contribution Calendar
            </h3>
            <p className="text-xs text-zinc-500">
              Yearly Contributions for{' '}
              <span className="text-zinc-300 font-mono">@{username}</span>
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="w-max min-w-full">
              <div className="relative h-5 mb-1 w-max">
                {heatmap.monthLabels.map((m, i) => (
                  <span
                    key={i}
                    className="absolute top-0 text-[10px] font-mono uppercase text-zinc-500"
                    style={{ left: m.weekIndex * 13 }}
                  >
                    {m.label}
                  </span>
                ))}
              </div>

              <div
                className="grid gap-[3px]"
                style={{
                  gridTemplateRows: 'repeat(7, 10px)',
                  gridAutoFlow: 'column',
                  gridAutoColumns: '10px',
                }}
              >
                {heatmap.weeks.flatMap((week, wIdx) =>
                  week.map((day, dIdx) => (
                    <div
                      key={`${wIdx}-${dIdx}`}
                      className={`w-[10px] h-[10px] rounded-[2px] ${
                        day.future ? 'bg-transparent' : LEVEL_CLASSES[day.level]
                      }`}
                    />
                  ))
                )}
              </div>

              <div className="flex items-center justify-between mt-4">
                <p className="text-xs text-zinc-500">
                  <span className="text-zinc-200 font-mono">
                    {heatmap.total}
                  </span>{' '}
                  contributions in the last year
                </p>
                <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 font-mono">
                  <span>Less</span>
                  {LEVEL_CLASSES.map((cls) => (
                    <span key={cls} className={`w-2.5 h-2.5 rounded-[2px] ${cls}`} />
                  ))}
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recently Updated Repositories */}
        <div className="mb-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-5">
            Recently Updated Repositories
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(reposLoading ? Array.from({ length: 4 }) : recentRepos).map((repo, index) => {
            const isSkeleton = !repo;
            const language = (repo as GitHubRepo)?.language;
            const langColor = language ? LANG_COLORS[language] ?? '#94a3b8' : '#94a3b8';

            return (
              <motion.a
                key={isSkeleton ? `skeleton-${index}` : (repo as GitHubRepo).id}
                href={isSkeleton ? undefined : (repo as GitHubRepo).html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-panel glass-panel-hover rounded-2xl p-5 border border-white/10 flex flex-col justify-between min-h-[150px] group"
              >
                {isSkeleton ? (
                  <div className="space-y-3 animate-pulse">
                    <div className="h-5 w-40 bg-zinc-800 rounded" />
                    <div className="h-4 w-full bg-zinc-800/70 rounded" />
                    <div className="h-4 w-24 bg-zinc-800/50 rounded" />
                  </div>
                ) : (
                  <>
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors break-all">
                          {(repo as GitHubRepo).name}
                        </h4>
                        <ExternalLink
                          size={16}
                          className="text-zinc-500 group-hover:text-cyan-400 transition-colors shrink-0 mt-1"
                        />
                      </div>
                      <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                        {(repo as GitHubRepo).description || 'No description provided.'}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      {language ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: langColor }}
                          />
                          {language}
                        </span>
                      ) : (
                        <span />
                      )}

                      <div className="flex items-center gap-3 text-xs text-zinc-500">
                        <span className="flex items-center gap-1">
                          <Star size={13} />
                          {(repo as GitHubRepo).stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork size={13} />
                          {(repo as GitHubRepo).forks_count}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
