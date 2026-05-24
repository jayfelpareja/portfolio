import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 px-6 lg:px-16 border-t border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-950/40">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Left Side: Inline Brand & Copyright metadata combo */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
          <a
            href="#home"
            onClick={handleScrollTop}
            className="text-xs font-bold tracking-widest lowercase text-neutral-950 dark:text-white cursor-pointer"
          >
            {"</jayfel>"}
          </a>
          <span className="hidden sm:inline text-neutral-300 dark:text-neutral-800">|</span>
          <p className="text-xs font-sans text-neutral-400 dark:text-neutral-500 font-light">
            &copy; {currentYear} All rights reserved. Crafted by hand.
          </p>
        </div>

        {/* Right Side: Clean pill-interactive scroll action button */}
        <div className="shrink-0">
          <a
            href="#home"
            onClick={handleScrollTop}
            className="px-4 py-2 text-[11px] font-mono uppercase tracking-wider text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white border border-neutral-200 dark:border-neutral-800 hover:border-neutral-950 dark:hover:border-white rounded-full bg-white dark:bg-neutral-950 shadow-xs transition-all duration-300 cursor-pointer"
          >
            Top &uarr;
          </a>
        </div>

      </div>
    </footer>
  );
};