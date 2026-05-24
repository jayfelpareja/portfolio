import React, { useState } from 'react';
import { ArrowDownRight, Mail, Layers, Smartphone, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Hero: React.FC = () => {
  const [activeWidget, setActiveWidget] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const handleScroll = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-white dark:bg-neutral-950 overflow-hidden px-6 lg:px-16 pt-24 lg:pt-12"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-12">

        {/* Left Column: Premium Content Blocks (Takes up 7 cols) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Status Capsule Indicator */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800/60 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-mono font-medium tracking-wider text-neutral-500 dark:text-neutral-400 uppercase">
              Operational &mdash; Available for Q2 Projects
            </span>
          </motion.div>

          {/* Main Display Typography */}
          <motion.h1
            variants={itemVariants}
            className="font-sans font-normal text-4xl sm:text-6xl tracking-tight text-neutral-950 dark:text-white mb-6 leading-[1.08]"
          >
            Building high-end custom web systems, dynamic layouts & <span className="font-serif italic font-light text-neutral-400 dark:text-neutral-500">optimized funnels.</span>
          </motion.h1>

          {/* Strategic Context */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg font-sans text-neutral-500 dark:text-neutral-400 font-light max-w-xl mb-10 leading-relaxed"
          >
            A technical designer translating complex branding ideas into tailored online structures using WordPress ecosystem (Elementor/Divi), GoHighLevel sales setups, and clean UI components.
          </motion.p>

          {/* Action Layout Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto mb-16 items-stretch sm:items-center"
          >
            <button
              onClick={() => handleScroll('#projects')}
              className="px-8 py-4 bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-sans font-medium text-xs tracking-wider uppercase rounded-xs hover:opacity-90 transition-opacity duration-200 cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>View Case Studies</span>
              <ArrowDownRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-200" />
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="px-8 py-4 bg-transparent border border-neutral-200 hover:border-neutral-950 dark:border-neutral-800 dark:hover:border-white text-neutral-800 dark:text-neutral-200 font-sans font-medium text-xs tracking-wider uppercase rounded-xs transition-colors duration-200 cursor-pointer"
            >
              Initiate Project
            </button>
          </motion.div>

          {/* Social Channels Integration */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 text-neutral-400 dark:text-neutral-600 border-t border-neutral-100 dark:border-neutral-900 pt-6 w-full lg:w-auto"
          >
            <a
              href="https://github.com/jayfelpareja"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Architecture"
              className="hover:text-neutral-950 dark:hover:text-white transition-colors duration-200"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/jayfelpareja/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Network"
              className="hover:text-neutral-950 dark:hover:text-white transition-colors duration-200"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:jayfel.creatives04@gmail.com"
              aria-label="Direct Pipeline"
              className="hover:text-neutral-950 dark:hover:text-white transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Interactive Bento Grid Widgets (Takes up 5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:grid grid-cols-2 gap-4 lg:col-span-5 aspect-square relative"
        >
          {/* Card 1: Advanced Core CMS */}
          <div
            onMouseEnter={() => setActiveWidget(1)}
            onMouseLeave={() => setActiveWidget(null)}
            className="p-6 rounded-lg border border-neutral-100 dark:border-neutral-900 bg-neutral-50/40 dark:bg-neutral-900/10 flex flex-col justify-between transition-all duration-300 hover:bg-white dark:hover:bg-neutral-900 hover:shadow-xl hover:shadow-neutral-100/40 dark:hover:shadow-none hover:border-neutral-200 dark:hover:border-neutral-800"
          >
            <div className="flex justify-between items-start">
              <div className="p-2.5 bg-neutral-100 dark:bg-neutral-900 rounded-sm text-neutral-800 dark:text-neutral-200">
                <Layers className="w-4 h-4" />
              </div>
              <span className="font-mono text-[10px] text-neutral-400">01 / STACK</span>
            </div>
            <div>
              <h3 className="font-sans font-medium text-sm text-neutral-950 dark:text-white mb-1">WordPress / CMS</h3>
              <p className="text-xs font-light text-neutral-400 dark:text-neutral-500 leading-normal">Dynamic logic loop systems via Elementor & custom setups.</p>
            </div>
          </div>

          {/* Card 2: Funnel Engineering */}
          <div
            onMouseEnter={() => setActiveWidget(2)}
            onMouseLeave={() => setActiveWidget(null)}
            className="p-6 rounded-lg border border-neutral-100 dark:border-neutral-900 bg-neutral-50/40 dark:bg-neutral-900/10 flex flex-col justify-between transition-all duration-300 hover:bg-white dark:hover:bg-neutral-900 hover:shadow-xl hover:shadow-neutral-100/40 dark:hover:shadow-none hover:border-neutral-200 dark:hover:border-neutral-800"
          >
            <div className="flex justify-between items-start">
              <div className="p-2.5 bg-neutral-100 dark:bg-neutral-900 rounded-sm text-neutral-800 dark:text-neutral-200">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-mono text-[10px] text-neutral-400">02 / CRO</span>
            </div>
            <div>
              <h3 className="font-sans font-medium text-sm text-neutral-950 dark:text-white mb-1">Sales Funnels</h3>
              <p className="text-xs font-light text-neutral-400 dark:text-neutral-500 leading-normal">High-converting pipelines on GoHighLevel & ClickFunnels.</p>
            </div>
          </div>

          {/* Card 3: Large Responsive Interaction Canvas (Spans 2 columns) */}
          <div
            onMouseEnter={() => setActiveWidget(3)}
            onMouseLeave={() => setActiveWidget(null)}
            className="col-span-2 p-6 rounded-lg border border-neutral-100 dark:border-neutral-900 bg-neutral-50/40 dark:bg-neutral-900/10 flex flex-col justify-between overflow-hidden relative transition-all duration-300 hover:bg-white dark:hover:bg-neutral-900 hover:shadow-xl hover:shadow-neutral-100/40 dark:hover:shadow-none hover:border-neutral-200 dark:hover:border-neutral-800"
          >
            <div className="flex justify-between items-start z-10">
              <div className="p-2.5 bg-neutral-100 dark:bg-neutral-900 rounded-sm text-neutral-800 dark:text-neutral-200">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="font-mono text-[10px] text-neutral-400">03 / LIVE METRICS</span>
            </div>

            {/* Kinetic visual response box based on active widget states */}
            <div className="my-4 h-24 w-full rounded border border-dashed border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/40 flex items-center justify-center p-4 relative overflow-hidden">
              <div className="absolute inset-0 flex flex-col gap-2 justify-center px-4 opacity-40">
                <div className="h-1 bg-neutral-200 dark:bg-neutral-800 rounded w-full" />
                <div className="h-1 bg-neutral-200 dark:bg-neutral-800 rounded w-5/6" />
                <div className="h-1 bg-neutral-200 dark:bg-neutral-800 rounded w-2/3" />
              </div>
              <span className="font-mono text-[11px] tracking-wider text-neutral-400 z-10 transition-all duration-300 uppercase">
                {activeWidget === 1 && "=> Initializing Elementor Engine Block"}
                {activeWidget === 2 && "=> Compiling GHL Lead Conversion API"}
                {activeWidget === 3 && "=> System Core Fully Responsive"}
                {activeWidget === null && "Active Development Matrix"}
              </span>
            </div>

            <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 dark:text-neutral-500 z-10">
              <span>DESIGN SYSTEM / V1.0</span>
              <span>EST. 2026</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};