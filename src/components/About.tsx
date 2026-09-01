'use client';

import React from 'react';
import { Code2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export const About: React.FC = () => {
  const { t, data } = useApp();

  const pillars = [
    t.about.pillar1,
    t.about.pillar2,
    t.about.pillar3,
    t.about.pillar4,
  ];

  return (
    <section id="about" className="py-20 relative bg-background/50 border-t border-border-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/20 text-emerald-500 text-xs font-mono mb-3">
            <Code2 size={13} />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            {t.about.heading}
          </h2>
          <p className="mt-4 text-muted text-base leading-relaxed">
            {t.about.paragraph}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Engineering Bio & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="glass-panel rounded-2xl p-7 border border-border-soft space-y-4">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <span>{data.profile.name}</span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-500">
                  {data.profile.title}
                </span>
              </h3>

              <p className="text-foreground-soft text-sm sm:text-base leading-relaxed">
                {data.profile.bio}
              </p>

              <p className="text-muted text-sm leading-relaxed">
                {data.profile.extendedBio}
              </p>

              <div className="pt-4 border-t border-border-soft grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pillars.map((pillar) => (
                  <div key={pillar} className="flex items-center gap-2.5 text-xs font-mono text-foreground-soft">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core focus pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {data.profile.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-panel rounded-xl p-4 text-center border border-border-soft hover:border-emerald-500/30 transition-all"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-gradient-emerald">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-muted mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technical Card / Visual Badge */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-panel rounded-2xl p-7 border border-border-soft relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-border-soft">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[11px] font-mono text-muted-2">mdsami@mars:~$</span>
              </div>

              <div className="mt-5 space-y-4 font-mono text-xs text-foreground-soft">
                <div>
                  <span className="text-emerald-500"># {t.about.profileComment}</span>
                  <p className="text-muted mt-1">
                    {t.about.specialization} &quot;{t.about.specializationValue}&quot;
                  </p>
                </div>

                <div className="bg-black/40 rounded-lg p-3.5 border border-white/5 space-y-1.5 text-zinc-300">
                  <div className="text-zinc-500">{t.about.stackSnapshot}</div>
                  <div><span className="text-cyan-400">const</span> languages = [<span className="text-emerald-300">&apos;TypeScript&apos;</span>, <span className="text-emerald-300">&apos;Golang&apos;</span>, <span className="text-emerald-300">&apos;Python&apos;</span>, <span className="text-emerald-300">&apos;Dart&apos;</span>];</div>
                  <div><span className="text-cyan-400">const</span> cloud = [<span className="text-emerald-300">&apos;Kubernetes&apos;</span>, <span className="text-emerald-300">&apos;Docker&apos;</span>, <span className="text-emerald-300">&apos;Terraform&apos;</span>, <span className="text-emerald-300">&apos;AWS&apos;</span>];</div>
                  <div><span className="text-cyan-400">const</span> mindset = <span className="text-yellow-300">&apos;Think. Code. Love.&apos;</span>;</div>
                </div>

                <div className="text-muted">
                  <p className="leading-relaxed">
                    &quot;{t.about.quote}&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border-soft flex items-center justify-between">
              <span className="text-xs font-mono text-muted">{t.about.available}</span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-500 hover:text-emerald-400 transition-colors"
              >
                <span>{t.about.hire}</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
