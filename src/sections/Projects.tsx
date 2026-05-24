import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import type { Project } from '../components/ProjectCard';

// 1. Explicit static array for the clean category tabs
const CATEGORIES = ['All', 'CMS Platforms', 'Funnels'];

// 2. Clear, fully typed array referencing your public image location
const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'The Task Ninja',
    description: 'A custom SquareSpace portfolio website.',
    tech: ['Square Space'],
    image: '/images/thetaskninja.png', // Correct absolute root path from the public folder
    demoUrl: 'https://thetaskninja.com',
    //githubUrl: 'https://thetaskninja.com',
    category: 'CMS Platforms',
  },
  {
    id: 2,
    title: 'Apex SaaS Sales Funnel',
    description: 'A high-converting multi-step landing page and automated opt-in pipeline.',
    tech: ['GoHighLevel', 'ClickFunnels', 'Lead Capture', 'Zapier'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    category: 'Funnels',
  },
  {
    id: 3,
    title: 'Zenuth E-Commerce Shop',
    description: 'A clean, modern online store designed on Squarespace, featuring integrated checkout and SEO setups.',
    tech: ['Squarespace', 'Squarespace Commerce', 'SEO', 'UI Design'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    demoUrl: 'https://github.com',
    //githubUrl: 'https://github.com',
    category: 'CMS Platforms',
  },
];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter computation logic safely linked below your declarations
  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-24 lg:py-32 px-6 lg:px-16 bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-900"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header Setup */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] text-neutral-400 dark:text-neutral-500 uppercase block mb-3">
              02 / Selected Works
            </span>
            <h2 className="font-sans font-normal text-3xl sm:text-4xl tracking-tight text-neutral-950 dark:text-white">
              Crafted digital solutions.
            </h2>
          </div>

          {/* Minimal Tab Selector */}
          <div className="flex gap-1 p-1 bg-neutral-50 dark:bg-neutral-900/40 rounded-md border border-neutral-200/60 dark:border-neutral-800/60 shrink-0 self-start lg:self-auto">
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className="relative px-4 py-2 text-xs font-medium rounded-sm transition-colors duration-200 cursor-pointer text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white group"
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeCategoryBg"
                      className="absolute inset-0 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700/50 rounded-sm shadow-xs"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-15 ${isSelected ? 'text-neutral-950 dark:text-white font-semibold' : ''}`}>
                    {category}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Project Grid Section */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};