
import { motion } from "framer-motion";
import { GraduationCap, Zap, Lightbulb, User } from 'lucide-react';
import { AboutSection } from "@/types/portfolio";
import PageSection from './PageSection';
import { Card, CardContent } from "@/components/ui/card";
import { Info } from 'lucide-react';

interface AboutPageProps {
  data: AboutSection;
}

const AboutPage: React.FC<AboutPageProps> = ({ data }) => {
  const iconMap: Record<string, JSX.Element> = {
    GraduationCap: <GraduationCap className="h-6 w-6 text-sky-400" />,
    Target: <Zap className="h-6 w-6 text-sky-400" />,
    Lightbulb: <Lightbulb className="h-6 w-6 text-sky-400" />,
    User: <User className="h-6 w-6 text-sky-400" />
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <PageSection title="About Me" icon={Info} id="about-page">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Card className="bg-slate-700/50 border-slate-600 shadow-2xl mb-8">
            <CardContent className="p-6 sm:p-8">
              <p className="text-slate-300 text-lg leading-relaxed">{data.bio}</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {data.details.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-slate-800 border-slate-700 card-hover">
                <CardContent className="p-4 flex items-start space-x-3">
                  {iconMap[item.icon] || <Lightbulb className="h-6 w-6 text-sky-400" />}
                  <span className="text-slate-300">{item.text}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </PageSection>
  );
};

export default AboutPage;
