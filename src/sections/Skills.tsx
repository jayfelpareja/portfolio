import React from 'react';
import {
  Layout,
  Blocks,
  Wrench,
  Layers,
  MousePointer,
  Smartphone,
  Zap,
  Gauge,
  Search,
  Split,
  Image
} from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

export const Skills: React.FC = () => {
  // Ordered arrays containing matching tech icons for the infinite rows
  const ROW_1_SKILLS: SkillItem[] = [
    { name: 'WordPress', icon: <Layout className="w-3.5 h-3.5" /> },
    { name: 'Elementor Pro', icon: <Layers className="w-3.5 h-3.5" /> },
    { name: 'Divi', icon: <Blocks className="w-3.5 h-3.5" /> },
    { name: 'Duda', icon: <Wrench className="w-3.5 h-3.5" /> },
    { name: 'GoHighLevel (GHL)', icon: <Zap className="w-3.5 h-3.5" /> },
    { name: 'ClickFunnels', icon: <Split className="w-3.5 h-3.5" /> },
  ];

  const ROW_2_SKILLS: SkillItem[] = [
    { name: 'SquareSpace', icon: <Layout className="w-3.5 h-3.5" /> },
    { name: 'Figma UI/UX Design', icon: <MousePointer className="w-3.5 h-3.5" /> },
    { name: 'Photoshop Mockup Design', icon: <Image className="w-3.5 h-3.5" /> },
    { name: 'Responsive Design', icon: <Smartphone className="w-3.5 h-3.5" /> },
    { name: 'Landing Page', icon: <Gauge className="w-3.5 h-3.5" /> },
    { name: 'SEO Optimization', icon: <Search className="w-3.5 h-3.5" /> },
  ];

  // Doubling the arrays to allow for a seamless, un-clipped infinite visual gap jump loop
  const doubleRow1 = [...ROW_1_SKILLS, ...ROW_1_SKILLS, ...ROW_1_SKILLS];
  const doubleRow2 = [...ROW_2_SKILLS, ...ROW_2_SKILLS, ...ROW_2_SKILLS];

  return (
    <section
      id="skills"
      className="py-24 lg:py-32 bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-16">
        {/* Section Header */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-bold tracking-[0.25em] text-neutral-400 dark:text-neutral-500 uppercase block mb-3"
          >
            03 / My Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-normal text-3xl sm:text-4xl tracking-tight text-neutral-950 dark:text-white"
          >
            Tech stack & abilities.
          </motion.h2>
        </div>
      </div>

      {/* Infinite Loop Ticker System Wrapper */}
      <div className="flex flex-col gap-4 w-full relative">

        {/* Row 1: Sliders Moving Left (<---) */}
        <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <motion.div
            animate={{ x: [0, '-33.33%'] }}
            transition={{
              ease: "linear",
              duration: 22,
              repeat: Infinity
            }}
            className="flex gap-3 pr-3 whitespace-nowrap"
          >
            {doubleRow1.map((skill, idx) => (
              <div
                key={`r1-${idx}`}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-sm border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20 text-neutral-800 dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors duration-200 group cursor-default"
              >
                <span className="text-neutral-400 dark:text-neutral-600 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors duration-200">
                  {skill.icon}
                </span>
                <span className="text-xs font-sans font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Sliders Moving Right (--—>) */}
        <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <motion.div
            animate={{ x: ['-33.33%', 0] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity
            }}
            className="flex gap-3 pr-3 whitespace-nowrap"
          >
            {doubleRow2.map((skill, idx) => (
              <div
                key={`r2-${idx}`}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-sm border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20 text-neutral-800 dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors duration-200 group cursor-default"
              >
                <span className="text-neutral-400 dark:text-neutral-600 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors duration-200">
                  {skill.icon}
                </span>
                <span className="text-xs font-sans font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};