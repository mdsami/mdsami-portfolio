'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Briefcase } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-20 relative bg-[#030712]/60 border-t border-white/5 bg-grid-pattern">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Rocket size={13} />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            From engineer to founder-led architecture.
          </h2>
          <p className="mt-4 text-zinc-400 text-base leading-relaxed">
            A decade-long track record of building scalable software, leading engineering teams, and founding AI-driven product companies.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-zinc-800 ml-4 sm:ml-36 space-y-10">
          {portfolioData.journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                  item.current
                    ? 'bg-emerald-500 border-emerald-300 ring-4 ring-emerald-500/20'
                    : 'bg-zinc-900 border-zinc-600 group-hover:border-emerald-400 group-hover:bg-emerald-400/20'
                }`}
              />

              {/* Period Stamp for Desktop */}
              <div className="hidden sm:block absolute -left-40 top-1 text-right w-32">
                <span
                  className={`text-xs font-mono font-bold ${
                    item.current ? 'text-emerald-400' : 'text-zinc-500'
                  }`}
                >
                  {item.period}
                </span>
                <div className="text-[10px] font-mono text-zinc-600 uppercase">
                  {item.category}
                </div>
              </div>

              {/* Card content */}
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10">
                {/* Period tag for mobile */}
                <div className="sm:hidden flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {item.period}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {item.category}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                    {item.role}
                  </h3>
                  {item.current && (
                    <span className="text-[10px] font-mono uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-2.5 py-0.5 rounded-full shrink-0">
                      Active
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3">
                  <Briefcase size={12} className="text-emerald-400" />
                  <span>{item.company}</span>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Skills tags in this era */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 text-[11px] font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
