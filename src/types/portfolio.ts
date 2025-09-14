
import { LucideIcon } from "lucide-react";

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  shortBio: string;
  location: string;
  profileImage: string;
  cvLink?: string;
  about: AboutSection;
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  education: Education;
  contact: ContactInfo;
}

export interface AboutSection {
  bio: string;
  details: AboutDetail[];
}

export interface AboutDetail {
  icon: string;
  text: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: number;
  logoName?: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  keyFeatures: string[];
  challengesAndSolutions?: string;
  link: string;
  liveDemoLink?: string;
  image?: string;
  icon?: LucideIcon;
  detailedFeatures?: DetailedFeature[];
}

export interface DetailedFeature {
  featureTitle: string;
  featureDescription: string;
  screenshots?: string[];
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  university: string;
  graduationDate: string;
  relevantCourses: string[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}
