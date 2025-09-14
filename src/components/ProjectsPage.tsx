
import { useState } from 'react';
import { motion } from "framer-motion";
import { Lightbulb, Eye, Github, ImageIcon } from 'lucide-react';
import { Project } from "@/types/portfolio";
import PageSection from './PageSection';
import ProjectModal from './ProjectModal';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';

interface ProjectsPageProps {
  data: Project[];
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(data.map(p => p.category))];
  const filteredProjects = activeCategory === 'All' 
    ? data 
    : data.filter(p => p.category === activeCategory);

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
    <PageSection title="My Projects" icon={Lightbulb} id="projects-page" extraPadding={true}>
      <div className="mb-10 flex flex-wrap gap-3 justify-center">
        {categories.map(category => (
          <Button
            key={category}
            onClick={() => setActiveCategory(category)}
            variant={activeCategory === category ? "default" : "outline"}
            className={activeCategory === category ? "" : "bg-slate-700 border-slate-600 text-slate-300"}
            size="sm"
          >
            {category}
          </Button>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-slate-400 text-center col-span-full">No projects found in this category.</p>
      )}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.title} variants={itemVariants}>
            <Card className="bg-slate-700/50 border-slate-600 h-full flex flex-col overflow-hidden card-hover">
              <div className="w-full h-48 bg-slate-600 flex items-center justify-center">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (project.icon) {
                        const IconComponent = project.icon;
                        target.parentElement!.innerHTML = '<div class="h-16 w-16 text-sky-400"></div>';
                      } else {
                        target.parentElement!.innerHTML = '<div class="h-16 w-16 text-slate-500"></div>';
                      }
                    }}
                  />
                ) : (
                  project.icon ? <project.icon className="h-16 w-16 text-sky-400" /> : <ImageIcon className="h-16 w-16 text-slate-500" />
                )}
              </div>
              
              <CardHeader className="p-6 pb-2">
                <CardTitle className="text-xl font-semibold text-sky-400">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="p-6 pt-0 pb-2 flex-grow">
                <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-sky-500/20 border-none text-sky-300 px-2 py-1">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-sky-400 text-xs flex items-center">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-2 mt-auto flex gap-3">
                <Button 
                  onClick={() => setSelectedProject(project)}
                  className="flex-1"
                  size="sm"
                >
                  <Eye className="mr-2 h-4 w-4" /> View Details
                </Button>
                {project.link && project.link !== "#" && (
                  <Button
                    asChild
                    variant="secondary"
                    className="flex-1 bg-slate-600 hover:bg-slate-500 text-white"
                    size="sm"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      
      <ProjectModal 
        project={selectedProject} 
        open={selectedProject !== null} 
        onClose={() => setSelectedProject(null)} 
      />
    </PageSection>
  );
};

export default ProjectsPage;
