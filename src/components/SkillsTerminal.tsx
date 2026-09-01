'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, RefreshCw } from 'lucide-react';
import { portfolioData, SkillCategory } from '@/data/portfolioData';

export const SkillsTerminal: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('cloud-devops');

  const activeCategoryData = portfolioData.skillCategories.find(
    (cat) => cat.id === selectedCategory
  ) || portfolioData.skillCategories[0];

  const handleCategorySelect = (category: SkillCategory) => {
    setSelectedCategory(category.id);
  };

  const handleClear = () => {
    setSelectedCategory(portfolioData.skillCategories[0].id);
  };

  return (
    <section id="skills" className="py-20 relative bg-[#030712]/70 border-t border-white/5 bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Terminal size={13} />
            <span>Interactive Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical skills & engineering stack.
          </h2>
          <p className="mt-4 text-zinc-400 text-base leading-relaxed">
            Explore my engineering capabilities through the interactive CLI terminal. Select categories to inspect specialized tools and architectures.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="max-w-4xl mx-auto terminal-window rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
          
          {/* Terminal Header Bar */}
          <div className="bg-[#0c121e] px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-zinc-400 ml-2 font-medium">skills_terminal.sh</span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-semibold">ONLINE</span>
              </div>
              <button
                onClick={handleClear}
                className="hover:text-white transition-colors flex items-center gap-1 text-[11px] bg-zinc-800/60 px-2 py-0.5 rounded"
              >
                <RefreshCw size={11} />
                <span>Wipe</span>
              </button>
            </div>
          </div>

          {/* Interactive Trigger Matrix */}
          <div className="bg-[#060910] p-4 sm:p-5 border-b border-zinc-800/80">
            <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2.5">
              Trigger Command Matrix:
            </div>
            <div className="flex flex-wrap gap-2">
              {portfolioData.skillCategories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-emerald-500 text-black font-semibold shadow-md shadow-emerald-500/20 scale-[1.02]'
                        : 'bg-zinc-900/90 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                    }`}
                  >
                    <span>./{cat.command}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Terminal Body Screen */}
          <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm text-zinc-300 min-h-[340px] space-y-4 bg-[#03060c]">
            {/* Command Line Prompt */}
            <div className="flex items-center gap-2 text-zinc-400 border-b border-zinc-900 pb-2">
              <span className="text-emerald-400">sami@mars-node:~$</span>
              <span className="text-cyan-300 font-semibold">./inspect-skills --module={activeCategoryData.name}</span>
            </div>

            {/* Skills Grid for Active Category */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2"
              >
                {activeCategoryData.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="font-semibold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                        <span className="text-emerald-500 text-xs">›</span>
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-xs mt-2 font-sans font-normal leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Terminal Status Output */}
            <div className="pt-4 mt-4 border-t border-zinc-900 flex flex-wrap items-center justify-between text-zinc-500 text-[11px]">
              <div>
                Loaded <span className="text-emerald-400 font-semibold">{activeCategoryData.skills.length}</span> tools in <span className="text-zinc-300">{activeCategoryData.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-zinc-400">Architecture:</span>
                <span className="text-cyan-400">Microservices & Cloud Native</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
