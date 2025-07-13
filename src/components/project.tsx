'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { projectsData } from '@/lib/data';

type TProject = (typeof projectsData)[number];

type TProps = {
  project: TProject;
  index: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export const Project = ({ project, index }: TProps) => {
  const { image, title, description, technologies, links } = project;

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className="w-full md:w-[48%] h-[470px] flex flex-col justify-between rounded border p-4 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 shadow-md dark:shadow-lg transition-colors duration-300"
    >
      <Link
        href={links.github}
        aria-label={title}
        target="_blank"
        className="block"
      >
        {/* Blurred Border Container */}
        <div className="relative w-full h-[250px] rounded-xl overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/30 before:to-white/10 before:blur-md before:z-[-1] dark:before:from-zinc-800/30 dark:before:to-zinc-700/10">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>

      <div className="flex flex-col justify-between flex-grow mt-3">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          {title}
        </h3>
        <p className="text-sm mt-2 mb-3 text-zinc-600 dark:text-zinc-400 line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border px-3 py-1 text-sm border-zinc-300 dark:border-zinc-600 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
