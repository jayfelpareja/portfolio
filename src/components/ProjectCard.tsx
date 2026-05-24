import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  demoUrl: string;
  githubUrl?: string; // <-- 1. Added '?' to make the GitHub URL optional
  category: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden glass-card transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]"
    >
      {/* Card Image Container */}
      <div className="relative overflow-hidden aspect-video bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center border-b border-neutral-100 dark:border-neutral-800">
        <motion.div
          className="absolute inset-0 bg-cover bg-center w-full h-full"
          style={{ backgroundImage: `url(${project.image})` }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-colors duration-300 pointer-events-none" />
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Category Tag */}
        <span className="text-[10px] font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-2">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="font-heading text-lg font-bold text-neutral-900 dark:text-white mb-2 leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm font-sans text-neutral-600 dark:text-neutral-400 font-light mb-5 line-clamp-3 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium font-sans px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-850 text-neutral-700 dark:text-neutral-300 border border-neutral-200/30 dark:border-neutral-800/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 pt-3 border-t border-neutral-100 dark:border-neutral-850">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Live Demo</span>
          </a>

          {/* 2. Short-circuit conditional rendering logic wraps the anchor element */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Codebase</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};