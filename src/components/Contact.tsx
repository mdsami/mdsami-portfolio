'use client';

import React, { useState } from 'react';
import { Send, Terminal, Mail, MapPin, CheckCircle, Clock, Calendar } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import confetti from 'canvas-confetti';
import { useApp } from '@/context/AppContext';

export const Contact: React.FC = () => {
  const { t, data } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 relative bg-background border-t border-border-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/20 text-emerald-500 text-xs font-mono mb-3">
            <Terminal size={13} />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            {t.contact.heading}
          </h2>
          <p className="mt-4 text-muted text-base leading-relaxed">
            {t.contact.paragraph}
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Links & Status */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="glass-panel rounded-2xl p-7 border border-border-soft space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-500">
                  {t.contact.directLine}
                </span>
                <h3 className="text-2xl font-bold text-foreground tracking-tight mt-1">
                  {t.contact.letsWork}
                </h3>
                <p className="text-muted text-sm mt-2 leading-relaxed">
                  {t.contact.paragraph2}
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-3">
                <a
                  href={`mailto:${data.profile.email}`}
                  className="p-4 rounded-xl bg-surface-2 border border-border hover:border-emerald-500/40 transition-all flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-2 font-mono">{t.contact.emailAddress}</div>
                    <div className="text-sm font-semibold text-foreground group-hover:text-emerald-500 transition-colors">
                      {data.profile.email}
                    </div>
                  </div>
                </a>

                <a
                  href={data.profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-surface-2 border border-border hover:border-cyan-500/40 transition-all flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 group-hover:scale-105 transition-transform">
                    <LinkedinIcon size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-2 font-mono">{t.contact.linkedinProfile}</div>
                    <div className="text-sm font-semibold text-foreground group-hover:text-cyan-500 transition-colors">
                      linkedin.com/in/mdsami55
                    </div>
                  </div>
                </a>

                <a
                  href={data.profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-surface-2 border border-border hover:border-purple-500/40 transition-all flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500 group-hover:scale-105 transition-transform">
                    <GithubIcon size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-2 font-mono">{t.contact.githubProfile}</div>
                    <div className="text-sm font-semibold text-foreground group-hover:text-purple-500 transition-colors">
                      github.com/mdsami
                    </div>
                  </div>
                </a>

                <a
                  href={data.profile.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-surface-2 border border-border hover:border-emerald-500/40 transition-all flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:scale-105 transition-transform">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-2 font-mono">{t.contact.bookMeeting}</div>
                    <div className="text-sm font-semibold text-foreground group-hover:text-emerald-500 transition-colors">
                      calendly.com/appifydevs/30min
                    </div>
                  </div>
                </a>
              </div>

              {/* Location Badge */}
              <div className="pt-4 border-t border-border-soft flex items-center justify-between text-xs font-mono text-muted">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-emerald-500" />
                  {data.profile.location}
                </span>
                <span className="flex items-center gap-1 text-muted-2">
                  <Clock size={13} />
                  {data.profile.timezone}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Interactive Form */}
          <div className="lg:col-span-7 terminal-window rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl flex flex-col justify-between">
            {/* Terminal Header */}
            <div className="bg-[#0c121e] px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-zinc-400 ml-2">sami@portfolio:~/contact</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400">./send-message</span>
            </div>

            {/* Terminal Form Body */}
            <div className="p-6 sm:p-8 bg-[#03060c] flex-1 flex flex-col justify-between">
              {submitted ? (
                <div className="my-auto py-8 text-center space-y-4 font-mono animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle size={28} />
                  </div>
                  <h4 className="text-lg font-bold text-white">{t.contact.transmitted}</h4>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                    {t.contact.thanks}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-zinc-300 hover:text-white"
                  >
                    {t.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-xs font-mono text-zinc-500 mb-2">
                    {t.contact.fillPayload}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      › {t.contact.name} <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full bg-[#080d1a] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 font-mono transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      › {t.contact.email} <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full bg-[#080d1a] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 font-mono transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      › {t.contact.messageScope} <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full bg-[#080d1a] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 font-mono transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>{t.contact.dispatching}</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>{t.contact.transmit}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
