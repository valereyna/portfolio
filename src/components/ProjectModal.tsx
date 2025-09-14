
import { useState } from 'react';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/types/portfolio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, open, onClose }) => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  if (!project) return null;

  const openLightbox = (imgSrc: string) => setLightboxImage(imgSrc);
  const closeLightbox = () => setLightboxImage(null);

  // Function to collect all screenshots from all features
  const getAllScreenshots = () => {
    if (!project.detailedFeatures) return [];
    
    const allScreenshots: string[] = [];
    project.detailedFeatures.forEach(feature => {
      if (feature.screenshots) {
        allScreenshots.push(...feature.screenshots);
      }
    });
    return allScreenshots;
  };

  // Navigate to previous/next image in lightbox
  const navigateImage = (direction: 'prev' | 'next') => {
    if (!lightboxImage) return;
    
    const allImages = getAllScreenshots();
    const currentIndex = allImages.findIndex(img => img === lightboxImage);
    
    if (currentIndex === -1) return;
    
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + allImages.length) % allImages.length 
      : (currentIndex + 1) % allImages.length;
    
    setLightboxImage(allImages[newIndex]);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
        <DialogContent className="bg-slate-800 p-0 border-slate-700 max-w-4xl w-full max-h-[90vh] overflow-hidden">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-3xl font-bold text-sky-400">{project.title}</DialogTitle>
          </DialogHeader>
          
          <ScrollArea className="h-[calc(90vh-112px)] pr-4">
            <div className="px-6 py-4">
              <div className="relative w-full mb-6 bg-slate-700 rounded-md overflow-hidden">
                <AspectRatio ratio={16/9} className="bg-slate-700">
                  <img 
                    src={project.image || 'https://placehold.co/800x450/475569/94A3B8?text=Project+Image&font=Inter'} 
                    alt={`${project.title} main image`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://placehold.co/800x450/475569/94A3B8?text=Not+Found&font=Inter';
                    }}
                  />
                </AspectRatio>
              </div>
              
              <div className="mb-2 flex items-center">
                <Badge variant="outline" className="text-sky-300 border-sky-300/30 mr-2">
                  {project.category}
                </Badge>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                {project.longDescription || project.description}
              </p>

              {project.technologies && project.technologies.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-sky-300 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-sky-500/20 text-sky-300 hover:bg-sky-500/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-sky-300 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
                    {project.keyFeatures.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                </div>
              )}
              
              {/* Detailed Features Section with Carousel */}
              {project.detailedFeatures && project.detailedFeatures.length > 0 && (
                <div className="my-8">
                  <h3 className="text-2xl font-bold text-sky-300 mb-6 border-b border-slate-700 pb-2">
                    In-Depth Features & Screenshots
                  </h3>
                  {project.detailedFeatures.map((feature, index) => (
                    <div key={index} className="mb-8 p-4 bg-slate-700/40 rounded-lg">
                      <h4 className="text-xl font-semibold text-sky-400 mb-2">{feature.featureTitle}</h4>
                      <p className="text-slate-300 mb-4 leading-relaxed">{feature.featureDescription}</p>
                      {feature.screenshots && feature.screenshots.length > 0 && (
                        <div className="mt-4">
                          <h5 className="text-sm font-semibold text-slate-400 mb-2">Screenshots:</h5>
                          
                          <Carousel className="w-full">
                            <CarouselContent>
                              {feature.screenshots.map((screenshot, ssIndex) => (
                                <CarouselItem key={ssIndex} className="cursor-pointer" onClick={() => openLightbox(screenshot)}>
                                  <AspectRatio ratio={16/9} className="bg-slate-700 rounded-md overflow-hidden group">
                                    <img 
                                      src={screenshot} 
                                      alt={`${feature.featureTitle} screenshot ${ssIndex + 1}`}
                                      className="w-full h-full object-cover"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = 'https://placehold.co/320x180/475569/94A3B8?text=SS+Error&font=Inter';
                                      }}
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                      <span className="text-white text-sm font-medium">View larger</span>
                                    </div>
                                  </AspectRatio>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-2 opacity-50 hover:opacity-100" />
                            <CarouselNext className="right-2 opacity-50 hover:opacity-100" />
                          </Carousel>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {project.challengesAndSolutions && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-sky-300 mb-2">Challenges & Solutions:</h4>
                  <p className="text-slate-300 leading-relaxed">{project.challengesAndSolutions}</p>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-slate-700">
                {project.liveDemoLink && project.liveDemoLink !== "#" && (
                  <Button asChild className="flex-1">
                    <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
                
                {project.link && project.link !== "#" && (
                  <Button variant="secondary" asChild className="flex-1">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Lightbox with higher z-index to ensure it appears above the modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[200] flex items-center justify-center p-4" 
          onClick={closeLightbox}
        >
          <img 
            src={lightboxImage} 
            alt="Lightbox view" 
            className="max-w-full max-h-full object-contain rounded-lg" 
          />
          <button 
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }} 
            className="absolute top-6 right-6 text-white hover:text-sky-300"
          >
            <X size={32}/>
          </button>
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-black/40 border-white/20 text-white hover:bg-black/60"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-black/40 border-white/20 text-white hover:bg-black/60"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectModal;
