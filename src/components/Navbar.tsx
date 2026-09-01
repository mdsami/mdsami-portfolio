'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Languages, Check } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { locales } from '@/i18n';

export const Navbar: React.FC = () => {
  const { t, data, theme, toggleTheme, locale, setLocale } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.journey, href: '#journey' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border-soft py-3 shadow-lg shadow-black/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2.5 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-purple-500/20 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-emerald-500 group-hover:border-emerald-500 group-hover:scale-105 transition-all">
            <span className="text-sm tracking-tighter">{data.profile.initials}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-foreground font-semibold text-base tracking-tight group-hover:text-emerald-500 transition-colors">
              {data.profile.name}
            </span>
            <span className="text-[11px] font-mono text-muted -mt-1">
              {data.profile.title}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full border border-border-soft shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1 text-sm text-muted hover:text-foreground hover:bg-white/5 dark:hover:bg-white/5 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg glass-pill border border-border-soft text-muted hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="p-2 rounded-lg glass-pill border border-border-soft text-muted hover:text-foreground transition-colors flex items-center gap-1"
              aria-label="Change language"
            >
              <Languages size={17} />
              <span className="text-xs font-mono font-semibold">
                {locales.find((l) => l.code === locale)?.short}
              </span>
            </button>

            {langOpen && (
              <div
                className="absolute right-0 mt-2 w-36 glass-panel rounded-xl border border-border-soft p-1.5 shadow-xl"
                onMouseLeave={() => setLangOpen(false)}
              >
                {locales.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLocale(l.code);
                      setLangOpen(false);
                    }}
                    className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      locale === l.code
                        ? 'text-emerald-500 font-semibold'
                        : 'text-muted hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{l.label}</span>
                    {locale === l.code && <Check size={14} />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Status indicator & CTA */}
          <div className="hidden lg:flex items-center gap-3 ml-1">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {data.profile.statusText}
            </div>
            <a
              href="#contact"
              className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs tracking-wide transition-all shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40"
            >
              {t.nav.getInTouch}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg glass-pill border border-border-soft text-muted hover:text-foreground focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-border-soft px-6 py-6 mt-2 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-500">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            {data.profile.statusText}
          </div>
          <div className="flex flex-col space-y-2 pt-2 border-t border-border-soft">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-muted hover:text-emerald-500 py-1.5 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center w-full py-2.5 rounded-lg bg-emerald-500 text-black font-semibold text-sm transition-all shadow-lg shadow-emerald-500/20"
          >
            {t.nav.letsTalk}
          </a>
        </div>
      )}
    </header>
  );
};
