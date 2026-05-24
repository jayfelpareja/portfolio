import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // ✅ Optimized scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const onScroll = () => requestAnimationFrame(handleScroll);

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ✅ Improved Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0.1,
      }
    );

    NAV_ITEMS.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
        ? 'py-3 bg-white/70 dark:bg-neutral-950/70 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-800/50'
        : 'py-6 bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, '#home')}
          className="font-bold text-lg md:text-xl tracking-tight text-neutral-900 dark:text-white"
        >
          {"</jayfel>"}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1.5 bg-neutral-100/50 dark:bg-neutral-900/50 border border-neutral-200/40 dark:border-neutral-800/40 p-1 rounded-full backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${isActive
                  ? 'text-neutral-900 dark:text-white font-semibold'
                  : 'text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-white dark:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <ThemeToggle />

          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-100 dark:text-neutral-950 rounded-full transition-all hover:translate-y-[-1px]"
          >
            Let's talk
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center space-x-2.5">
          <ThemeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-full border border-neutral-200/80 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-900/70 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus:outline-none"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 md:hidden"
          >
            <nav className="flex flex-col px-6 py-8 space-y-4">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.slice(1);

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`text-sm font-semibold ${isActive
                      ? 'text-blue-600 dark:text-blue-400 border-l-2 border-blue-500 pl-3'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white pl-3'
                      }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};