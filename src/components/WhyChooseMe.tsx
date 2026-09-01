'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Layers, Cloud, Smartphone, CheckCircle, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const iconMap = {
  Zap: Zap,
  Layers: Layers,
  Cloud: Cloud,
  Smartphone: Smartphone,
  Sparkles: Sparkles,
};

export const WhyChooseMe: React.FC = () => {
  return (
    <section id="services" className="py-20 relative bg-[#030712] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Sparkles size={13} />
            <span>Why Choose Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Building reliable digital products that scale.
          </h2>
          <p className="mt-4 text-zinc-400 text-base leading-relaxed">
            I architect and engineer resilient applications utilizing modern technologies, continuous delivery pipelines, and clean architectural principles.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.features.map((feature, idx) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Zap;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between border border-white/10 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 group-hover:border-emerald-400 transition-all">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight mb-2.5 group-hover:text-emerald-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs font-mono text-zinc-500 group-hover:text-emerald-400 transition-colors">
                  <CheckCircle size={14} className="text-emerald-500" />
                  <span>Production Tested</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
