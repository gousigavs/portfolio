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
    image: '/images/portfolio.jpg',
    title: 'DevPortfolio',
    description:
      'A modern portfolio template built with React, showcasing developer profiles, skills, projects, and blogs. Fully responsive and customizable.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Resend'],
    links: {
      preview: 'https://gousigavs.vercel.app',
      github: 'https://github.com/gousigavs/portfolio',
      githubApi: 'https://api.github.com/repos/gousigavs/portfolio',
    },
  },
  {
    image: '/images/multilingual.png',
    title: 'Multilingual Heritage Assistant',
    description:
      'The Multilingual Heritage Assistant is an AI-powered voice assistant designed to provide personalized cultural and historical insights about Tamil Nadu heritage sites in over 20 Indian languages.',
    technologies: ['Flutter', 'Python', 'Flask', 'SQLite', 'LLM'],
    links: {
      preview: 'https://multilingual.vercel.app',
      github: 'https://github.com/gousigavs/heritage_assistant',
      githubApi: 'https://api.github.com/repos/gousigavs/heritage_assistant',
    },
  },
  {
    image: '/images/fitness.png',
    title: 'Fitness App',
    description:
      'Fitness Tracker App helps users monitor workouts, set goals, and track progress in real-time. It offers personalized routines, performance stats, and reminders to stay consistent.',
    technologies: ['Android Studio', 'Java', 'Firebase', 'XML'],
    links: {
      preview: 'https://github.com/gousigavs/fitness-app',
      github: 'https://github.com/gousigavs/fitness-app',
      githubApi: 'https://api.github.com/repos/gousigavs/fitness-app',
    },
  },
  {
    image: '/images/ehr.png',
    title: 'Secure EHR Management System',
    description:
      'It enables safe storage, retrieval, and sharing of electronic health records with role-based access control. It ensures patient data privacy through end-to-end encryption and secure authentication.',
    technologies: ['HTML', 'CSS', 'Flask', 'Python'],
    links: {
      preview: 'https://github.com/gousigavs/ehr',
      github: 'https://github.com/gousigavs/ehr',
      githubApi: 'https://api.github.com/repos/gousigavs/ehr',
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
        Pursuing a Bachelor&apos;s degree in Computer Science, focusing on core
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
    title: 'Industrial Visit Programme',
    issuer: 'BSNL, Rajiv Gandhi Memorial Telecom Training Centre',
    date: 'May 2023',
    description:
      'Participated in an industrial visit to gain insight into telecom infrastructure and operations.',
    certificateUrl:
      'https://drive.google.com/file/d/1KyTr0Bt4v1uCgM0wz7RGwkmfvhxyJYuH/view?usp=drive_link',
    imageUrl: '/images/certificates/bsnl.png',
  },
  {
    title: 'Machine Learning Workshop - EM TECH 2.0',
    issuer: 'C2C Club, SVCE',
    date: 'May 2022',
    description:
      'Attended hands-on sessions on core machine learning concepts and applications.',
    certificateUrl:
      'https://drive.google.com/file/d/1cvnJDmdXT0ThkkMj3a-CwC6cc_xnBHuW/view?usp=drive_link',
    imageUrl: '/images/certificates/ml.png',
  },
  {
    title: 'Compose Camp Event',
    issuer: 'Google Developer Student Club - SVCE',
    date: 'September 2022',
    description:
      'Participated in Compose Camp focusing on building Android apps with Jetpack Compose.',
    certificateUrl:
      'https://drive.google.com/file/d/1Jsn_fL4R9EZpvSAKh2C75XmUNV7RdeBH/view?usp=drive_link',
    imageUrl: '/images/certificates/gdsc.png',
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services (AWS)',
    date: 'March 2024',
    description:
      'Completed AWS foundational cloud training including services, architecture, and security.',
    certificateUrl:
      'https://drive.google.com/file/d/1ddm0Bk0SJYajyPZRYa6jmZj5NoRqdcm5/view?usp=drive_link',
    imageUrl: '/images/certificates/aws.png',
  },
  {
    title: 'Introduction to Internet of Things',
    issuer: 'NPTEL',
    date: 'April 2024',
    description:
      'Achieved 96% in a national-level NPTEL course on IoT covering sensors, protocols, and use cases.',
    certificateUrl:
      'https://drive.google.com/file/d/1c6YEQEjXZOF_eov7acNMO-8XroBcee78/view?usp=drive_link',
    imageUrl: '/images/certificates/nptel.png',
  },
  {
    title: 'DevOps Internship',
    issuer: 'CDC IT Solutions Pvt. Ltd.',
    date: 'December 2023',
    description:
      'Completed a 30-day internship on DevOps fundamentals and cloud computing practices.',
    certificateUrl:
      'https://drive.google.com/file/d/1CtwJtYoZcg4hPTprtdpQULFV6Dcv72av/view?usp=drive_link',
    imageUrl: '/images/certificates/devops.png',
  },
  {
    title: 'Java Foundation Certification',
    issuer: 'Infosys Springboard',
    date: 'May 2024',
    description:
      'Certified in core Java programming fundamentals through Infosys Springboard.',
    certificateUrl:
      'https://drive.google.com/file/d/19xdk_7ALnGo6UzgLjQySpoECtkrZEzJl/view?usp=drive_link',
    imageUrl: '/images/certificates/infy.png',
  },
  {
    title: 'Data Structures and Algorithms using Java',
    issuer: 'Infosys Springboard',
    date: 'May 2024',
    description:
      'Learned and applied key DSA concepts using Java through structured hands-on content.',
    certificateUrl:
      'https://drive.google.com/file/d/1HDu65dKOww0lc8wGL7JMHi_UZ0A1_dLa/view?usp=drive_link',
    imageUrl: '/images/certificates/infy.png',
  },
  {
    title: 'Programming using Java',
    issuer: 'Infosys Springboard',
    date: 'May 2024',
    description:
      'Completed a practical programming course covering OOP and Java syntax.',
    certificateUrl:
      'https://drive.google.com/file/d/1B58729EQAOO5t4OpyliGoMAoBdnh8P2x/view?usp=drive_link',
    imageUrl: '/images/certificates/infy.png',
  },
  {
    title: 'ISTE Tamil Nadu Section Convention',
    issuer: 'ISTE & SVCE',
    date: 'April 2023',
    description: 'Presented paper on "Green Cloud Computing".',
    certificateUrl:
      'https://drive.google.com/file/d/1GnM-1e3M3aXacOD7zTZJ-gKPCoBeOs3V/view?usp=drive_link',
    imageUrl: '/images/certificates/iste.png',
  },
  {
    title: 'ICICRCET 25',
    issuer:
      '1st International Conference on Innovative Computing Research and Cutting Edge Technologies in Computer Science',
    date: 'May 2025',
    description:
      'Presented paper on "Multilingual Heritage Assistant Using Recurrent Location-Aware Transformer Approach.',
    certificateUrl:
      'https://drive.google.com/file/d/1D8buVChmN-7X4fsid4EdOYiKO7e2zAmL/view?usp=sharing',
    imageUrl: '/images/certificates/svce.png',
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
