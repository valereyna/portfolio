
import { useEffect, useState } from 'react';
import { LucideIcon } from 'lucide-react';
import {
  Briefcase, 
  MessageSquare,
  GraduationCap, 
  HomeIcon, 
  Info, 
  BriefcaseBusiness, 
  Lightbulb,
  Zap
} from 'lucide-react';

import HomePage from '@/components/HomePage';
import AboutPage from '@/components/AboutPage';
import SkillsPage from '@/components/SkillsPage';
import ProjectsPage from '@/components/ProjectsPage';
import ExperiencePage from '@/components/ExperiencePage';
import EducationPage from '@/components/EducationPage';
import ContactPage from '@/components/ContactPage';
import Sidebar from '@/components/Sidebar';
import { useIsMobile } from '@/hooks/use-mobile';

import { portfolioData } from '@/data/portfolioData';

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  component: JSX.Element;
}

const Index = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const isMobile = useIsMobile();

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: HomeIcon, component: <HomePage data={portfolioData} /> },
    { id: 'about', label: 'About Me', icon: Info, component: <AboutPage data={portfolioData.about} /> },
    { id: 'skills', label: 'Skills', icon: Zap, component: <SkillsPage data={portfolioData.skills} /> },
    { id: 'projects', label: 'Projects', icon: Lightbulb, component: <ProjectsPage data={portfolioData.projects} /> },
    { id: 'experience', label: 'Experience', icon: BriefcaseBusiness, component: <ExperiencePage data={portfolioData.experience} /> },
    { id: 'education', label: 'Education', icon: GraduationCap, component: <EducationPage data={portfolioData.education} /> },
    { id: 'contact', label: 'Contact', icon: MessageSquare, component: <ContactPage data={portfolioData.contact} /> },
  ];

  const CurrentPageComponent = navItems.find(item => item.id === currentPage)?.component || <HomePage data={portfolioData} />;

  useEffect(() => {
    // If a modal is open, prevent body scroll
    const projectModalOpen = document.querySelector('.fixed.inset-0.bg-black\\/80');
    if (projectModalOpen || document.querySelector('.fixed.inset-0.bg-black\\/90')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to restore scroll when component unmounts or modal closes
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [currentPage]);

  return (
    <div className="font-sans bg-slate-900 text-slate-200 min-h-screen flex flex-col md:flex-row selection:bg-sky-500 selection:text-white">
      <Sidebar 
        portfolioData={portfolioData} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        navItems={navItems.map(({id, label, icon}) => ({id, label, icon}))} 
      />
      <main className="flex-1 md:ml-72 pt-16 md:pt-0 bg-slate-800 min-h-screen overflow-y-auto"> 
        {CurrentPageComponent}
      </main>
    </div>
  );
};

export default Index;
