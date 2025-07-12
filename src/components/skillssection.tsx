'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { skills } from '@/lib/data';

export const SkillsSection = () => {
  const { ref } = useSectionInView('Skills');

  return (
    <section ref={ref} id="skills" className="my-10 scroll-mt-28 md:mb-20">
      <SectionHeading
        heading="My Skills"
        content="Here are the core skills and technologies I specialize in."
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map(({ category, skills }) => (
          <div
            key={category}
            className="rounded-lg border bg-white/5 p-5 shadow-sm backdrop-blur-md"
          >
            <h3 className="mb-3 text-lg font-semibold">{category}</h3>
            <ul className="text-muted-foreground flex flex-wrap gap-2 text-sm">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-background text-foreground rounded-full border px-3 py-1"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
