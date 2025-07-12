import { Icons } from '@/components/icons';

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
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Education',
    hash: '#education',
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
  // {
  //   title: 'Devops Intern',
  //   company: 'CDC IT Solutions Private Limitied, Chennai',
  //   description: (
  //     <>
  //       Contributing to{' '}
  //       <Link
  //         className={cn(
  //           buttonVariants({ variant: 'link' }),
  //           'm-0 h-fit p-0 text-base'
  //         )}
  //         href="https://heritage-explorer.in"
  //         target="_blank"
  //       >
  //         heritage-explorer.in
  //       </Link>{' '}
  //       — an AI-powered platform for exploring heritage sites. Responsible for
  //       frontend architecture, performance optimization, and voice assistant UI
  //       integration.
  //     </>
  //   ),
  //   period: '2024 - present',
  //   technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Whisper', 'Mapbox'],
  // },
  {
    title: 'Devops Intern',
    company: 'CDC IT Solutions Private Limitied, Chennai',
    description: (
      <>
        My DevOps internship provided hands-on experience with CI/CD pipelines,
        containerization, and cloud infrastructure. I collaborated with
        cross-functional teams to streamline deployment workflows and enhance
        system reliability.
      </>
    ),
    period: '2023 - 2024',
    technologies: ['Docker', 'Jenkins', 'Git', 'Ansible', 'Maven'],
  },
] as const;

export const educationData = [
  {
    title: 'Bachelor of Engineering - Computer Science',
    company: 'Sri Venkateswara College of Engineering, Sriperumbudur',
    description: (
      <>
        Pursuing a Bachelor's degree in Computer Science, focusing on core
        programming, system design, and emerging technologies. Developed
        multiple projects integrating software development with AI and cloud
        computing.
      </>
    ),
    period: '2021 - 2025',
    technologies: ['Python', 'Java', 'Flutter', 'ML', 'Cloud'],
    score: '9.33 CGPA',
  },
  {
    title:
      'Grade 12 - All India Senior School Certificate Examination (AISSCE)',
    company: "St. John's English School and Junior College, Chennai",
    description: (
      <>
        Completed Higher Secondary with a strong foundation in Mathematics,
        Physics, and Computer Science. Actively participated in academic and
        technical competitions.
      </>
    ),
    period: '2019 - 2021',
    technologies: ['Maths', 'Physics', 'CS'],
    score: '97.4%',
  },
  {
    title: 'Grade 10 - All India Secondary School Examination (AISSE)',
    company: "St. John's English School and Junior College, Chennai",
    description: (
      <>
        Successfully completed SSLC with consistent academic excellence and
        strong analytical skills. Built early interest in computer technology
        and logical reasoning.
      </>
    ),
    period: '2018 - 2019',
    technologies: ['Science', 'Maths', 'English'],
    score: '97.8%',
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

export const certificationsData = [
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services (AWS)',
    date: 'March 2024',
    description:
      'Gained foundational cloud knowledge, covering AWS services, architecture, and security best practices.',
    certificateUrl: 'https://example.com/aws-certificate',
    imageUrl: '/images/image.png',
  },
  {
    title: 'DevOps with Docker',
    issuer: 'Udemy',
    date: 'January 2024',
    description:
      'Hands-on experience in Docker, container orchestration, and image deployment strategies.',
    certificateUrl: 'https://example.com/docker-certificate',
    imageUrl: '/images/image.png',
  },
  {
    title: 'Git & GitHub Mastery',
    issuer: 'Coursera',
    date: 'February 2023',
    description:
      'Mastered version control concepts, branching, pull requests, and collaborative GitHub workflows.',
    certificateUrl: 'https://example.com/git-certificate',
    imageUrl: '/images/image.png',
  },
] as const;

export const skills = [
  {
    category: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Framer Motion',
    ],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Docker', 'GitHub Actions', 'Jenkins', 'Git', 'Postman'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'MySQL', 'SQLite'],
  },
  {
    category: 'Languages',
    skills: ['Python', 'Java', 'Dart', 'TypeScript'],
  },
  {
    category: 'Cloud & Platforms',
    skills: ['AWS', 'Vercel', 'Netlify', 'Firebase'],
  },
] as const;
