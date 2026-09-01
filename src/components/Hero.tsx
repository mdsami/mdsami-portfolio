'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Terminal, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/icons';
import { useApp } from '@/context/AppContext';

export const Hero: React.FC = () => {
  const { t, data } = useApp();

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill border border-emerald-500/30 text-emerald-500 text-xs font-mono mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{data.profile.statusText}</span>
          <span className="text-muted-3">|</span>
          <span className="text-muted flex items-center gap-1">
            <MapPin size={12} className="text-muted-2" />
            {data.profile.location}
          </span>
        </motion.div>

        {/* Name and greeting */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg text-muted font-mono mb-3"
        >
          {t.hero.greeting} <span className="text-foreground font-medium">{data.profile.name}</span>
        </motion.p>

        {/* Primary Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.1]"
        >
          <span className="text-gradient-white">Engineering Resilient</span>
          <br />
          <span className="text-gradient-emerald">AI-Driven SaaS & Cloud</span> Systems.
        </motion.h1>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-base sm:text-lg text-foreground-soft mb-10 leading-relaxed font-light"
        >
          {data.profile.tagline} Focused on Next.js, Kubernetes, microservices, Go, and high-performance cloud infrastructure.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm tracking-wide transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{t.hero.viewProjects}</span>
            <ArrowUpRight size={16} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-panel glass-panel-hover border border-border-soft text-foreground font-medium text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Terminal size={16} className="text-emerald-500" />
            <span>{t.hero.openTerminal}</span>
          </a>
        </motion.div>

        {/* Social Links Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex items-center gap-3 glass-pill px-4 py-2 rounded-full border border-border-soft"
        >
          <a
            href={data.profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={data.profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted hover:text-cyan-500 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={data.profile.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted hover:text-sky-500 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"
            aria-label="Twitter Profile"
          >
            <TwitterIcon size={18} />
          </a>
          <div className="w-[1px] h-4 bg-border" />
          <a
            href={`mailto:${data.profile.email}`}
            className="p-2 text-muted hover:text-emerald-500 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors flex items-center gap-1.5 text-xs font-mono"
            aria-label="Send Email"
          >
            <Mail size={16} />
            <span className="hidden sm:inline">{data.profile.email}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
