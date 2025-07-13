'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Intro = () => {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id="home"
      className="my-10 scroll-mt-96 px-4 sm:mt-28 md:px-10"
    >
      <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
        {/* LEFT TEXT CONTENT */}
        <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Link
              href="#contact"
              className="flex items-center gap-3 rounded border px-3 py-1"
            >
              <span className="relative flex size-2">
                <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative flex size-2 rounded-full bg-green-400"></span>
              </span>
              <span className="font-mono text-sm">Available for work!</span>
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-handwriting max-w-3xl text-4xl font-extrabold md:text-5xl"
          >
            <span className="font-handwriting text-5x">Hi</span> I&#39;m a{' '}
            <span className="bg-gradient-to-r from-purple-700 to-purple-600 bg-clip-text text-transparent">
              Software
            </span>{' '}
            developer creating scalable applications.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-xl"
          >
            A Software developer based in India. I&#39;m passionate about
            building modern web applications using Next.js, React, and Tailwind
            CSS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-2"
          >
            <Button asChild size="lg">
              <Link href="#contact">
                Get in touch <Icons.arrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hidden sm:flex"
              asChild
            >
              <a href="/gousigavs.pdf" download>
                Download CV <Icons.download className="ml-2 size-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/gousigavs/"
                aria-label="Linkedin"
                target="_blank"
              >
                <Icons.linkedin className="size-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://github.com/gousigavs"
                aria-label="Github"
                target="_blank"
              >
                <Icons.github className="size-5" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative size-60 overflow-hidden rounded-full border-4 border-purple-500 shadow-xl md:size-80"
        >
          <Image
            src="/images/profile-pic.png" // 🔁 Replace with your image path
            alt="Gousiga Profile"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};
