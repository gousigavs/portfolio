import { About } from '@/components/about';
import { CertificationSlideshow } from '@/components/certification';
import { Contact } from '@/components/contact';
import { Education } from '@/components/education';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { Projects } from '@/components/projects';
import { SectionDivider } from '@/components/section-divider';
import { SkillsSection } from '@/components/skillssection';
import { ThemeToggle } from '@/components/theme-toggle';

const HomePage = async () => {
  return (
    <>
      <div className="container flex flex-col items-center">
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        <SkillsSection />
        <Experience />
        <Education />
        <Projects />
        <CertificationSlideshow />
        <Contact />
        <Footer />
      </div>
      <ThemeToggle className="bg-background hidden sm:fixed sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
};

export default HomePage;
