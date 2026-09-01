'use client';

import React from 'react';
import { Mail, ArrowUp, MapPin, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/icons';
import { useApp } from '@/context/AppContext';

export const Footer: React.FC = () => {
  const { t, data } = useApp();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-border-soft bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-emerald-500 text-xs">
              {data.profile.initials}
            </div>
            <div>
              <p className="text-foreground font-semibold text-sm">{data.profile.name}</p>
              <p className="text-xs font-mono text-muted-2">{data.profile.subTitle}</p>
            </div>
          </div>

          {/* Navigation + Info */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-4 text-xs font-mono text-muted-2">
              <span className="flex items-center gap-1"><MapPin size={12} />{data.profile.location}</span>
              <span className="flex items-center gap-1"><Clock size={12} />{data.profile.timezone}</span>
            </div>
            <p className="text-xs text-muted-2">
              © {new Date().getFullYear()} {data.profile.name}. {t.footer.rights}
            </p>
          </div>

          {/* Socials & Top */}
          <div className="flex items-center gap-3">
            <a href={data.profile.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-2 hover:text-foreground transition-colors" aria-label="GitHub">
              <GithubIcon size={17} />
            </a>
            <a href={data.profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-2 hover:text-cyan-500 transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={17} />
            </a>
            <a href={data.profile.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-2 hover:text-sky-500 transition-colors" aria-label="Twitter">
              <TwitterIcon size={17} />
            </a>
            <a href={`mailto:${data.profile.email}`} className="p-2 text-muted-2 hover:text-emerald-500 transition-colors" aria-label="Email">
              <Mail size={17} />
            </a>
            <button
              onClick={scrollToTop}
              className="ml-2 p-2 rounded-lg bg-surface-2 border border-border text-muted hover:text-emerald-500 hover:border-emerald-500/40 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
