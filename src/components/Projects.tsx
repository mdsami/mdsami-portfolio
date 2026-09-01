'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, FolderGit2 } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { portfolioData } from '@/data/portfolioData';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'AI & SaaS', 'Cloud & DevOps', 'Mobile & Web Platforms'];

  const filteredProjects = activeCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative bg-[#030712] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <FolderGit2 size={13} />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Production-ready applications & repositories.
          </h2>
          <p className="mt-4 text-zinc-400 text-base leading-relaxed">
            A selection of projects demonstrating containerization, multi-cloud Kubernetes deployments, scalable backend APIs, and modern frontends.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-black font-semibold shadow-md shadow-emerald-500/25'
                  : 'glass-panel text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between border border-white/10 group"
            >
              <div>
                {/* Top Badge & Stars */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                      project.status === 'Production Ready'
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                        : project.status === 'Open Source'
                        ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                        : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                    }`}
                  >
                    {project.status}
                  </span>

                  {project.stars && (
                    <div className="flex items-center gap-1 text-xs font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                      <Star size={12} className="fill-amber-400 text-amber-400" />
                      <span>{project.stars}</span>
                    </div>
                  )}
                </div>

                {/* Title and Subtitle */}
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-1 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-zinc-300 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-1.5 mb-6 text-xs text-zinc-400 font-sans border-t border-white/5 pt-3">
                  {project.keyFeatures.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-mono text-sm leading-none">›</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer: Tech tags + Action buttons */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 text-[11px] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/60 text-white text-xs font-medium transition-all"
                    >
                      <GithubIcon size={14} />
                      <span>Source Code</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-semibold transition-all shadow-md shadow-emerald-500/20"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
