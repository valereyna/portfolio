
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Zap } from 'lucide-react';
import { SkillCategory } from "@/types/portfolio";
import PageSection from './PageSection';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SkillsPageProps {
  data: SkillCategory[];
}

const SkillItem = ({ skill, inView }: { skill: { name: string; level: number; logoName?: string }; inView: boolean }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, 100);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [inView, skill.level]);

  return (
    <li className="mb-4">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center">
          {skill.logoName ? (
            <Badge variant="outline" className="h-6 bg-slate-700 text-sky-300 border-slate-600">
              {skill.logoName}
            </Badge>
          ) : (
            <span className="h-6 w-6 text-slate-500" />
          )}
          <span className="text-slate-200 ml-3 text-sm font-medium">{skill.name}</span>
        </div>
        <span className="text-xs text-sky-300">{skill.level || 0}%</span>
      </div>
      <div className="w-full bg-slate-600 rounded-full h-2.5">
        <div
          className="bg-sky-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </li>
  );
};

const SkillsPage: React.FC<SkillsPageProps> = ({ data }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
    <PageSection title="Technical Skills" icon={Zap} id="skills-page">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"
      >
        {data.map((skillCategory, index) => (
          <motion.div key={skillCategory.category} variants={itemVariants}>
            <Card className="bg-slate-700/50 border-slate-600 shadow-xl overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-sky-400">
                  {skillCategory.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[320px] pr-4">
                  <ul className="space-y-5">
                    {skillCategory.items.map((item) => (
                      <SkillItem key={item.name} skill={item} inView={inView} />
                    ))}
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </PageSection>
  );
};

export default SkillsPage;
