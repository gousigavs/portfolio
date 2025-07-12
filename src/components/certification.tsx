'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { SectionHeading } from './section-heading';

import { certificationsData } from '@/lib/data';

import Image from 'next/image';

export const CertificationSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const total = certificationsData.length;

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);

    return () => clearInterval(interval); // Clear on unmount
  }, [total]);

  const currentData = certificationsData[current];

  return (
    <section id="certifications" className="py-16">
      <div className="mb-10 text-center">
        <SectionHeading
          heading="Certifications & Achievements"
          content="A showcase of my verified accomplishments in tech and cloud."
        />
      </div>

      <div className="relative mx-auto max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-md"
          >
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <Image
                    src={currentData.imageUrl}
                    alt={currentData.title}
                    width={128}
                    height={128}
                    className="w-32 h-32 object-contain rounded-md shadow-md border"
                    />
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-xl font-semibold">{currentData.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {currentData.issuer} &middot; {currentData.date}
                </p>
                <p className="text-muted-foreground text-sm">
                  {currentData.description}
                </p>
                <a
                  href={currentData.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 mt-2 inline-block underline transition"
                >
                  View Certificate →
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="mt-4 flex justify-center gap-2">
          {certificationsData.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`size-2 cursor-pointer rounded-full transition-all ${
                current === index ? 'bg-primary scale-125' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
