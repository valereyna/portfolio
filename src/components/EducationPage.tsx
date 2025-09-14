
import { motion } from "framer-motion";
import { GraduationCap } from 'lucide-react';
import { Education } from "@/types/portfolio";
import PageSection from './PageSection';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';

interface EducationPageProps {
  data: Education;
}

const EducationPage: React.FC<EducationPageProps> = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
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
    <PageSection title="Education" icon={GraduationCap} id="education-page">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Card className="bg-slate-700/50 border-slate-600 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-sky-400">{data.degree}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 p-6 sm:p-8">
              <p className="text-lg text-slate-300 mb-1">{data.university}</p>
              <p className="text-md text-slate-400 mb-6">{data.graduationDate}</p>
              
              <h4 className="text-lg font-semibold text-sky-300 mb-3">Relevant Coursework:</h4>
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2"
              >
                {data.relevantCourses.map((course) => (
                  <motion.div key={course} variants={itemVariants}>
                    <Badge variant="outline" className="bg-slate-800 text-slate-300 border-slate-700 px-3 py-1.5 w-full justify-start font-normal text-sm">
                      {course}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </PageSection>
  );
};

export default EducationPage;
