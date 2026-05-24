import React from 'react';
import { Sparkles, Code2, Cpu, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'CMS Sites Built', value: '80+' },
    { label: 'Active Funnels', value: '30+' },
  ];

  const pillars = [
    {
      icon: <Code2 className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />,
      title: 'WordPress & CMS',
      desc: 'Building responsive, highly customizable sites on WordPress (Elementor/Divi), Squarespace, and Duda.',
    },
    {
      icon: <Sparkles className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />,
      title: 'High-Converting Funnels',
      desc: 'Creating automated marketing pipelines and landing pages on GoHighLevel and ClickFunnels.',
    },
    {
      icon: <Cpu className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />,
      title: 'UX & Typography',
      desc: 'Focusing on layout hierarchy, accessibility, page-load speed, and modern minimalist web aesthetics.',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 lg:py-32 px-6 lg:px-16 border-t border-neutral-100 dark:border-neutral-900 bg-white dark:bg-neutral-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Main Section Header */}
        <div className="mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-bold tracking-[0.25em] text-neutral-400 dark:text-neutral-500 uppercase block mb-3"
          >
            01 / About Me
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-normal text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-950 dark:text-white max-w-3xl leading-[1.15]"
          >
            Designing high-converting websites and marketing <span className="font-light italic text-neutral-500 dark:text-neutral-400">funnel systems</span>.
          </motion.h2>
        </div>

        {/* 2-Column Split Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Descriptive Story & Core Pillars */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-base font-sans text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-2xl"
            >
              <p>
                Hello! I'm Jayfel, a Web Designer and WordPress Specialist. I focus on creating high-converting websites, functional CMS templates, and automated sales funnels that drive real business growth.
              </p>
              <p>
                I specialize in building custom WordPress setups using Elementor and Divi, designing sleek layouts on Squarespace and Duda, and developing automated lead generation systems on GoHighLevel and ClickFunnels.
              </p>
            </motion.div>

            {/* Core Pillars List */}
            <div className="space-y-6 max-w-2xl">
              <h3 className="text-xs font-bold tracking-wider text-neutral-400 dark:text-neutral-500 uppercase border-b border-neutral-100 dark:border-neutral-900 pb-3">
                Core Focus Areas
              </h3>
              <div className="space-y-4">
                {pillars.map((pillar, idx) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group flex gap-4 p-4 rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-900/30 transition-colors duration-200"
                  >
                    <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shrink-0">
                      {pillar.icon}
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-medium text-neutral-950 dark:text-white mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs font-sans text-neutral-500 dark:text-neutral-400 font-normal leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Statistics & Highlights Grid */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">

            {/* Minimal Numerical Stats */}
            <div className="grid grid-cols-3 lg:grid-cols-1 divide-x lg:divide-x-0 lg:divide-y divide-neutral-100 dark:divide-neutral-900 border-t border-b lg:border-l-0 lg:border-t-0 border-neutral-100 dark:border-neutral-900 py-6 lg:py-0 lg:ps-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col px-4 lg:px-0 lg:py-6 first:pt-0 last:pb-0"
                >
                  <span className="font-sans text-3xl sm:text-4xl font-light text-neutral-950 dark:text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs font-medium tracking-wider text-neutral-400 dark:text-neutral-500 uppercase mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Premium, Clean Result Callout */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/10 flex flex-col justify-between h-48 lg:mx-6"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500">PHILOSOPHY</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </div>
              <div>
                <h4 className="font-sans text-sm font-medium text-neutral-950 dark:text-white mb-2">
                  Result-Driven Web Design
                </h4>
                <p className="text-xs font-sans text-neutral-500 dark:text-neutral-400 font-normal leading-relaxed">
                  I believe web design should drive conversions. I build interfaces that look premium while guiding visitors towards taking clear, measurable action.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

    </section>
  );
};