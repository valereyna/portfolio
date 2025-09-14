
import React from 'react';
import { LucideIcon, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PageSectionProps {
  title?: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  id?: string;
  extraPadding?: boolean;
  className?: string;
}

const PageSection: React.FC<PageSectionProps> = ({ 
  title, 
  icon: IconComponent = Lightbulb, 
  children, 
  id, 
  extraPadding = false,
  className
}) => {
  return (
    <section 
      id={id} 
      className={cn(
        "py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-slate-800 min-h-[calc(100vh-4rem)] md:min-h-screen w-full",
        extraPadding && "pb-24 md:pb-32",
        className
      )}
    >
      <div className="max-w-5xl mx-auto animate-fadeInUp">
        {title && (
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 sm:mb-12 text-center sm:text-left flex items-center justify-center sm:justify-start">
            <IconComponent className="inline-block h-8 w-8 mr-3 text-sky-400" /> 
            <span className="gradient-text">{title}</span>
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default PageSection;
