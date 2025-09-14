
import { motion } from "framer-motion";
import { BriefcaseBusiness } from 'lucide-react';
import { Experience } from "@/types/portfolio";
import PageSection from './PageSection';
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";

interface ExperiencePageProps {
  data: Experience[];
}

const ExperiencePage: React.FC<ExperiencePageProps> = ({ data }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  if (!data || data.length === 0) {
    return (
      <PageSection title="Professional Experience" icon={BriefcaseBusiness} id="experience-page">
        <p className="text-slate-400 text-center">No professional experience listed yet. Check back later!</p>
      </PageSection>
    );
  }
  
  return (
    <PageSection title="Professional Experience" icon={BriefcaseBusiness} id="experience-page">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="space-y-12"
      >
        {data.map((exp, index) => (
          <motion.div key={index} variants={itemVariants} className="relative pl-8 sm:pl-12 group">
            <div className="absolute left-0 sm:left-2.5 top-1 bottom-0 w-0.5 bg-slate-600 group-last:hidden"></div>
            <div className="absolute left-[-4px] sm:left-0 top-1 h-5 w-5 rounded-full bg-sky-500 border-4 border-slate-800 animate-pulse-dot"></div>
            <Card className="bg-slate-700/50 border-slate-600 shadow-xl hover:shadow-sky-500/30 transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-sky-400 mb-1">{exp.title}</h3>
                <p className="text-md text-slate-400 mb-1">{exp.company}</p>
                <p className="text-sm text-slate-500 mb-3">{exp.duration}</p>
                <ul className="list-disc list-inside space-y-1 text-slate-300 text-sm">
                  {exp.responsibilities.map((resp, idx) => <li key={idx}>{resp}</li>)}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </PageSection>
  );
};

export default ExperiencePage;
