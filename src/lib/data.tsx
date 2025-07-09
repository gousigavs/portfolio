import Link from 'next/link';

import { buttonVariants } from '@/components/button';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/project-portfolio.webp',
    title: 'DevPortfolio',
    description:
      'A modern portfolio template built with React, showcasing developer profiles, skills, projects, and blogs. Fully responsive and customizable.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
    links: {
      preview: 'https://devportfolio-demo.vercel.app',
      github: 'https://github.com/gousiga/devportfolio',
      githubApi: 'https://api.github.com/repos/gousiga/devportfolio',
    },
  },
  {
    image: '/images/project-chatapp.webp',
    title: 'ChatSphere',
    description:
      'A real-time chat application with private rooms, emoji support, and status indicators. Built using socket-based communication and modern UI.',
    technologies: ['Next.js', 'Socket.IO', 'Tailwind', 'TypeScript', 'MongoDB'],
    links: {
      preview: 'https://chatsphere.vercel.app',
      github: 'https://github.com/gousiga/chatsphere',
      githubApi: 'https://api.github.com/repos/gousiga/chatsphere',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Frontend Developer Intern',
    company: 'CodeCraft Labs, Chennai IN',
    description:
      'Assisted in building responsive UIs and dashboards for enterprise applications. Focused on bug fixing, accessibility improvements, and component reusability.',
    period: '2023',
    technologies: ['React', 'JavaScript', 'CSS Modules', 'Git'],
  },
  {
    title: 'UI/UX Designer & Web Developer',
    company: 'Freelance Projects, remote',
    description:
      'Worked independently with clients to design and develop interactive websites using Figma for wireframes and Next.js for development.',
    period: '2023 - 2024',
    technologies: ['Figma', 'Next.js', 'Tailwind CSS', 'Sanity CMS'],
  },
  {
    title: 'Software Developer Intern',
    company: 'TechNova Solutions, remote',
    description:
      'Worked closely with senior engineers to create components for a job portal web app. Emphasis was on frontend integration and TypeScript consistency.',
    period: '2024',
    technologies: ['Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind'],
  },
  {
    title: 'Frontend Engineer',
    company: 'Heritage Explorer, remote',
    description: (
      <>
        Contributing to{' '}
        <Link
          className={cn(
            buttonVariants({ variant: 'link' }),
            'm-0 h-fit p-0 text-base'
          )}
          href="https://heritage-explorer.in"
          target="_blank"
        >
          heritage-explorer.in
        </Link>{' '}
        — an AI-powered platform for exploring heritage sites. Responsible for
        frontend architecture, performance optimization, and voice assistant UI
        integration.
      </>
    ),
    period: '2024 - present',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Whisper', 'Mapbox'],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
