'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I&apos;m Gousiga V S, I&apos;m a software developer from Chennai,
          Tamil Nadu, India. I&apos;ve been exploring software development for
          over 4 years. After entering high school, I decided to turn my passion
          for coding into a career path. My favorite aspect of development is
          solving real-world challenges with smart solutions. I&apos;ve built
          and contributed to projects like a multilingual heritage voice
          assistant and secure healthcare platforms. My core stack is React,
          Next.js, TypeScript, and Tailwind CSS. I&apos;m also experienced with
          Java, and DevOps tools like Docker and Jenkins. I enjoy learning new
          tech and applying it practically.
        </p>
        <p>
          I&apos;m open to job opportunities where I can apply my skills,
          contribute meaningfully, and grow. If there&apos;s a role that aligns
          with my profile and interests, please don&apos;t hesitate to connect
          with me.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
