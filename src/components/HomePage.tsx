
import { motion } from "framer-motion";
import { Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PageSection from './PageSection';
import { useIsMobile } from "@/hooks/use-mobile";

interface HomePageProps {
  data: {
    name: string;
    title: string;
    tagline: string;
    profileImage: string;
    cvLink?: string;
  };
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  const isMobile = useIsMobile();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <PageSection id="home-page" className="flex items-center justify-center">
      <div className="min-h-[calc(90vh-10rem)] flex flex-col items-center justify-center text-center py-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <img 
              src={data.profileImage || "https://placehold.co/150x150/3B82F6/FFFFFF?text=You&font=Inter"} 
              alt={data.name} 
              className="w-36 h-36 md:w-48 md:h-48 rounded-full mx-auto border-4 border-sky-500 shadow-xl animate-float"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/150x150/CCCCCC/FFFFFF?text=Error&font=Inter';
              }}
            />
          </motion.div>
          
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4"
          >
            Hi, I'm <span className="text-sky-400">{data.name}</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants} 
            className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-300 mb-6"
          >
            {data.title}
          </motion.p>
          
          <motion.p 
            variants={itemVariants} 
            className="text-md sm:text-lg text-slate-400 mb-10 max-w-2xl mx-auto"
          >
            {data.tagline}
          </motion.p>
          
          {data.cvLink && (
            <motion.div variants={itemVariants}>
              <Button size={isMobile ? "default" : "lg"} asChild>
                <a
                  href={data.cvLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  Download CV <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </PageSection>
  );
};

export default HomePage;
