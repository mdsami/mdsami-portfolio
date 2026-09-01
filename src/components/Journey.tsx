'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Briefcase } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export const Journey: React.FC = () => {
  const { t, data } = useApp();

  return (
    <section id="journey" className="py-20 relative bg-background/60 border-t border-border-soft bg-grid-pattern">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/20 text-emerald-500 text-xs font-mono mb-3">
            <Rocket size={13} />
            <span>{t.journey.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            {t.journey.heading}
          </h2>
          <p className="mt-4 text-muted text-base leading-relaxed">
            {t.journey.paragraph}
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-border ml-4 sm:ml-36 space-y-10">
          {data.journey.map((item, index) => (
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
                    : 'bg-surface-2 border-border group-hover:border-emerald-500 group-hover:bg-emerald-500/20'
                }`}
              />

              {/* Period Stamp for Desktop */}
              <div className="hidden sm:block absolute -left-40 top-1 text-right w-32">
                <span
                  className={`text-xs font-mono font-bold ${
                    item.current ? 'text-emerald-500' : 'text-muted-2'
                  }`}
                >
                  {item.period}
                </span>
                <div className="text-[10px] font-mono text-muted-3 uppercase">
                  {item.category}
                </div>
              </div>

              {/* Card content */}
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-border-soft">
                {/* Period tag for mobile */}
                <div className="sm:hidden flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {item.period}
                  </span>
                  <span className="text-[11px] font-mono text-muted-2">
                    {item.category}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-foreground tracking-tight group-hover:text-emerald-500 transition-colors">
                    {item.role}
                  </h3>
                  {item.current && (
                    <span className="text-[10px] font-mono uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 px-2.5 py-0.5 rounded-full shrink-0">
                      {t.journey.active}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-muted mb-3">
                  <Briefcase size={12} className="text-emerald-500" />
                  <span>{item.company}</span>
                </div>

                <p className="text-foreground-soft text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Skills tags in this era */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border-soft">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded bg-surface-2 border border-border text-muted text-[11px] font-mono"
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
