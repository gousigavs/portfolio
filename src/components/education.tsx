'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { educationData } from '@/lib/data';
import { cn } from '@/lib/utils';

export const Education = () => {
  const { ref: sectionRef } = useSectionInView('Education');

  return (
    <section
      ref={sectionRef}
      id="education"
      className="my-10 scroll-mt-28 md:mb-20"
    >
      <SectionHeading
        heading="My Education"
        content="A quick overview of my academic journey and achievements."
      />

      <div className="relative max-w-screen-md">
        {educationData.map(
          ({ title, company, description, period, technologies, score }) => (
            <div
              key={company + title}
              className="relative pl-8 [&:not(:last-child)]:pb-10"
            >
              {/* Timeline line */}
              <div className="bg-muted absolute left-0 top-2.5 h-full w-[2px]">
                <div className="border-primary bg-background absolute left-[-5px] top-0 size-3 rounded-full border-2" />
              </div>

              {/* Animated card */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className={cn('space-y-3 opacity-0')}
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full border">
                    <Icons.graduationCap className="size-5" />
                  </div>
                  <span className="text-lg font-semibold">{company}</span>
                </div>

                <div>
                  <h3 className="text-xl font-medium">{title}</h3>
                  <div className="mt-1 flex items-center gap-2 text-sm">
                    <Icons.calendar className="size-4" />
                    <span>{period}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="font-semibold">{score}</span>
                  </div>
                </div>

                <p className="text-muted-foreground">{description}</p>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <div
                      key={tech}
                      className="rounded-full border px-3 py-1 text-sm"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
