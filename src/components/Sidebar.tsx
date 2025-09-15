
import { useState, useEffect } from 'react';
import { X, Menu, Linkedin, Github, Mail } from 'lucide-react';
import { PortfolioData, NavItem } from '@/types/portfolio';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarProps {
  portfolioData: PortfolioData;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  navItems: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ portfolioData, currentPage, setCurrentPage, navItems }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Close mobile menu when switching to desktop view
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile, isMobileMenuOpen]);

  // When menu is open on mobile, prevent background scrolling
  useEffect(() => {
    if (isMobile && isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobile, isMobileMenuOpen]);

  const sidebarVariants = {
    hidden: { x: -300, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const handleNavItemClick = (pageId: string) => {
    setCurrentPage(pageId);
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <div className="md:hidden bg-slate-900 p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 shadow-lg">
        <a 
          href="#" 
          onClick={(e) => { 
            e.preventDefault(); 
            handleNavItemClick('home'); 
          }} 
          className="text-xl font-bold text-sky-400"
        >
          {portfolioData.name.split(' ')[0]}
          <span className="text-slate-200">
            {portfolioData.name.split(' ').slice(1).join(' ')}
          </span>
        </a>
        <Button 
          variant="ghost" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-slate-300 hover:text-white hover:bg-slate-800"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      <motion.aside 
        initial="hidden"
        animate="visible"
        variants={sidebarVariants}
        className={`fixed top-0 left-0 h-full z-40 transition-all duration-300 ease-in-out md:translate-x-0 md:w-72 bg-slate-900 text-slate-200 flex flex-col shadow-2xl
          ${isMobileMenuOpen ? 'translate-x-0 w-full pt-16' : '-translate-x-full pt-16 md:pt-0 md:translate-x-0'}`}
      >
        <div className="flex-shrink-0 p-6 text-center border-b border-slate-700 hidden md:block">
          <img 
            src={portfolioData.profileImage || "https://placehold.co/100x100/3B82F6/FFFFFF?text=Me&font=Inter"} 
            alt={portfolioData.name} 
            className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-sky-500" 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/100x100/CCCCCC/FFFFFF?text=Error&font=Inter';
            }}
          />
          <h2 className="text-xl font-semibold text-white">{portfolioData.name}</h2>
          <p className="text-sm text-sky-400">{portfolioData.shortBio || "Web Developer | ERP Enthusiast"}</p>
          {portfolioData.location && <p className="text-xs text-slate-400 mt-1">{portfolioData.location}</p>}
        </div>
        
        <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
          {navItems.map(item => (
            <motion.a 
              key={item.id} 
              href={`#${item.id}`} 
              onClick={(e) => { 
                e.preventDefault(); 
                handleNavItemClick(item.id);
              }} 
              className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${currentPage === item.id ? 'bg-sky-500 text-white shadow-md' : 'hover:bg-slate-700 hover:text-sky-300'}`}
              variants={itemVariants}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.label}
            </motion.a>
          ))}
        </nav>
        
        <motion.div 
          variants={itemVariants}
          className="p-6 border-t border-slate-700 flex-shrink-0"
        >
          {portfolioData.contact.linkedin && (
            <a 
              href={portfolioData.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block text-slate-400 hover:text-sky-400 mr-4"
            >
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Linkedin size={20}/>
              </motion.div>
            </a>
          )}
          
          {portfolioData.contact.github && (
            <a 
              href={portfolioData.contact.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block text-slate-400 hover:text-sky-400 mr-4"
            >
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Github size={20}/>
              </motion.div>
            </a>
          )}
          
          {portfolioData.contact.email && (
            <a 
              href={`mailto:${portfolioData.contact.email}`} 
              className="inline-block text-slate-400 hover:text-sky-400"
            >
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Mail size={20}/>
              </motion.div>
            </a>
          )}
          
          <p className="text-xs text-slate-500 mt-4">&copy; {new Date().getFullYear()} {portfolioData.name}.</p>
        </motion.div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
