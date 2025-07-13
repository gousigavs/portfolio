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
      className="flex h-[470px] w-full flex-col justify-between rounded border border-zinc-200 bg-white p-4 shadow-md transition-colors duration-300 md:w-[48%] dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-lg"
    >
      <Link
        href={links.github}
        aria-label={title}
        target="_blank"
        className="block"
      >
        {/* Blurred Border Container */}
        <div className="relative h-[250px] w-full overflow-hidden rounded-xl before:absolute before:inset-0 before:z-[-1] before:bg-gradient-to-br before:from-white/30 before:to-white/10 before:blur-md dark:before:from-zinc-800/30 dark:before:to-zinc-700/10">
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-xl object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>

      <div className="mt-3 flex grow flex-col justify-between">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          {title}
        </h3>
        <p className="mb-3 mt-2 line-clamp-3 text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <div className="mt-auto flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
