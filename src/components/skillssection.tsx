'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';

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
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
      >
        {skills.map(({ category, skills }) => (
          <div key={category} className="rounded-lg border p-5 bg-white/5 backdrop-blur-md shadow-sm">
            <h3 className="text-lg font-semibold mb-3">{category}</h3>
            <ul className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-1 border rounded-full bg-background text-foreground"
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
