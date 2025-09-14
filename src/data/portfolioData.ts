
import {
  Briefcase,
  User,
  Lightbulb,
  Code,
  Server,
  Database
} from "lucide-react";
import { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Valereyna", 
  title: "Aspiring Web Developer & ERP Enthusiast",
  tagline: "Final year Information Systems student passionate about building innovative web solutions and optimizing business processes through technology.",
  shortBio: "IS Student | Web Dev | ERP", // For sidebar
  location: "Jakarta, Indonesia", // For sidebar
  profileImage: "/profile_photo.jpg", // For Hero and Sidebar
  cvLink: "/CV_Valereyna.pdf", // Link to your CV PDF
  about: { 
    bio: "I am a dedicated and enthusiastic final year Information Systems student with a strong foundation in software development principles and a keen interest in full-stack web development and Enterprise Resource Planning (ERP) systems. I am eager to apply my academic knowledge and passion for technology to solve real-world problems and contribute to impactful projects. I am a quick learner, a collaborative team player, and I am always looking for opportunities to grow and develop my skills in a dynamic environment.",
    details: [
      { icon: "GraduationCap", text: "B.Sc. Information Systems, Sampoerna University" },
      { icon: "Target", text: "Expected Graduation: Sept 2025" },
      { icon: "Lightbulb", text: "Key Interests: Full-Stack Development, ERP Implementation, Cloud Computing, Data Analytics" }
    ]
  },
  skills: [ 
    { category: "Web Development (Frontend)", items: [
      { name: "HTML5", level: 95, logoName: "HTML" }, { name: "CSS3", level: 90, logoName: "CSS" }, 
      { name: "JavaScript (ES6+)", level: 85, logoName: "JS" }, { name: "React.js", level: 80, logoName: "React" }, 
      { name: "Tailwind CSS", level: 88, logoName: "Tailwind" }, { name: "Laravel", level: 75, logoName: "Laravel" },
      { name: "FilamentPHP", level: 70, logoName: "Filament" }
    ]},
    { category: "Web Development (Backend)", items: [
      { name: "Node.js", level: 70, logoName: "Node" }, { name: "Express.js", level: 65, logoName: "Express" },
      { name: "PHP", level: 80, logoName: "PHP" }, { name: "Python (Flask/Django)", level: 60, logoName: "Python" }
    ]},
    { category: "Databases", items: [
      { name: "SQL (MySQL, PostgreSQL)", level: 75, logoName: "SQL" },{ name: "MongoDB", level: 60, logoName: "Mongo" }
    ]},
    { category: "ERP Knowledge", items: [
      { name: "SAP S/4HANA (Conceptual)", level: 70, logoName: "SAP" }, { name: "Oracle NetSuite (Familiarity)", level: 60, logoName: "Oracle" },
      { name: "Business Process Modeling", level: 75, logoName: "BPMN" }
    ]},
    { category: "Tools & Others", items: [
      { name: "Git & GitHub", level: 85, logoName: "Git" }, { name: "VS Code", level: 90, logoName: "VSCode" },
      { name: "Figma (Basic)", level: 65, logoName: "Figma" }
    ]}
  ],
  projects: [ 
    {
      title: "E-commerce Website (Laravel Filament)",
      category: "Web Development",
      description: "Full-featured e-commerce platform built with Laravel, FilamentPHP, and Tailwind CSS, focusing on admin panel and user experience.",
      longDescription: "This project is a comprehensive e-commerce solution developed using the TALL stack (Tailwind CSS, Alpine.js, Laravel, Livewire) with FilamentPHP for a powerful admin panel. It includes all standard e-commerce functionalities, from product browsing and searching to a secure checkout process and order management. Special attention was given to creating an intuitive user interface and a highly efficient administrative backend.",
      technologies: ["Laravel", "FilamentPHP", "Livewire", "Alpine.js", "Tailwind CSS", "MySQL", "PHP"],
      keyFeatures: ["Advanced Admin Panel (Filament)", "Product Catalog Management", "User Authentication & Profiles", "Shopping Cart & Wishlist", "Order Processing & Management", "Payment Gateway Integration (Conceptual)", "Responsive Design"],
      challengesAndSolutions: "Integrating various FilamentPHP components to create a seamless admin experience while maintaining performance was a key challenge. This was addressed by carefully structuring resources and leveraging Filament's customization options. Ensuring robust security for user data and transactions was paramount, involving best practices in Laravel for data validation, sanitization, and protection against common web vulnerabilities.",
      link: "https://github.com/yourusername/ecommerce-laravel-filament", // Replace
      liveDemoLink: "#", // Replace if you have a live demo
      image: "https://placehold.co/600x400/8B5CF6/FFFFFF?text=E-commerce+Site&font=Inter", // Main project image
      icon: Briefcase, // Lucide icon for project card
      detailedFeatures: [ // NEW: Add detailed features with screenshots
        {
          featureTitle: "Admin Dashboard & Product Management",
          featureDescription: "The FilamentPHP admin panel provides a comprehensive dashboard for site analytics, user management, and detailed product management. Admins can easily add, edit, and categorize products, manage stock levels, and set pricing.",
          screenshots: [
            "https://placehold.co/600x338/6D28D9/FFFFFF?text=Admin+Dashboard&font=Inter",
            "https://placehold.co/600x338/6D28D9/FFFFFF?text=Product+Listing+(Admin)&font=Inter",
            "https://placehold.co/600x338/6D28D9/FFFFFF?text=Add+New+Product+Form&font=Inter"
          ]
        },
        {
          featureTitle: "Frontend User Experience",
          featureDescription: "The customer-facing frontend features a clean design with Tailwind CSS. Users can browse products, use search and filter functionalities, add items to their cart, and proceed through a secure checkout process.",
          screenshots: [
            "https://placehold.co/600x338/A78BFA/FFFFFF?text=Homepage+View&font=Inter",
            "https://placehold.co/600x338/A78BFA/FFFFFF?text=Product+Details+Page&font=Inter",
            "https://placehold.co/600x338/A78BFA/FFFFFF?text=Shopping+Cart&font=Inter"
          ]
        },
        {
          featureTitle: "User Authentication and Profiles",
          featureDescription: "Secure user registration and login system. Registered users have profiles where they can view their order history, manage addresses, and update their account details.",
          screenshots: [
            "https://placehold.co/600x338/C4B5FD/FFFFFF?text=Login+Page&font=Inter",
            "https://placehold.co/600x338/C4B5FD/FFFFFF?text=User+Profile+Dashboard&font=Inter"
          ]
        }
      ]
    },
    {
      title: "Personal Portfolio Website",
      category: "Web Development",
      description: "This very website! A responsive personal portfolio built with React and Tailwind CSS.",
      longDescription: "The development of this personal portfolio was a great opportunity to showcase my skills in modern frontend technologies. It's designed to be fully responsive, providing an optimal viewing experience across all devices. The site features a clean, dark-themed UI with smooth navigation and interactive elements.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Lucide Icons"],
      keyFeatures: ["Multi-page layout with client-side routing", "Responsive design for all screen sizes", "Interactive project showcase with modals", "Skills section with proficiency bars", "Contact form (mailto)"],
      challengesAndSolutions: "One challenge was ensuring smooth state management for the active page and modal displays without relying on a dedicated routing library, which was solved using React's built-in state and prop drilling.",
      link: "https://github.com/yourusername/portfolio-react", 
      liveDemoLink: "#", 
      image: "https://placehold.co/600x400/3B82F6/FFFFFF?text=Portfolio+Site&font=Inter",
      icon: User,
      detailedFeatures: [
        {
          featureTitle: "Homepage & Navigation",
          featureDescription: "The homepage provides an introduction and easy navigation to other sections of the portfolio. The sidebar allows for quick access to different pages.",
          screenshots: [
            "https://placehold.co/600x338/0EA5E9/FFFFFF?text=Portfolio+Homepage&font=Inter",
            "https://placehold.co/600x338/0EA5E9/FFFFFF?text=Sidebar+Navigation&font=Inter",
          ]
        },
        {
          featureTitle: "Project Showcase with Modal",
          featureDescription: "Projects are displayed in a card format with category filtering. Clicking 'View Details' opens a modal with comprehensive information about each project, including more screenshots.",
          screenshots: [
            "https://placehold.co/600x338/38BDF8/FFFFFF?text=Projects+Page+View&font=Inter",
            "https://placehold.co/600x338/38BDF8/FFFFFF?text=Project+Detail+Modal&font=Inter",
          ]
        }
      ]
    },
    {
      title: "API Integration Dashboard",
      category: "Development",
      description: "A dashboard interface for managing and monitoring multiple third-party API integrations.",
      longDescription: "This project provides a unified dashboard for businesses to manage their various API integrations with third-party services. It features real-time monitoring, usage metrics, error tracking, and detailed logging to help maintain healthy API connections.",
      technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Chart.js", "WebSockets"],
      keyFeatures: ["Real-time API status monitoring", "Usage metrics visualization", "Error tracking and alerting", "Rate limit monitoring", "API key management", "Historical data access"],
      challengesAndSolutions: "Implementing real-time monitoring while maintaining application performance was a challenge. This was addressed by using WebSockets for instant updates and implementing efficient data aggregation strategies to minimize payload sizes.",
      link: "https://github.com/yourusername/api-dashboard", 
      liveDemoLink: "#", 
      image: "https://placehold.co/600x400/06B6D4/FFFFFF?text=API+Dashboard&font=Inter",
      icon: Code,
      detailedFeatures: [
        {
          featureTitle: "Monitoring Dashboard",
          featureDescription: "A comprehensive dashboard showing the health status of all API integrations with real-time updates. Features include uptime statistics, response time tracking, and quick access to logs.",
          screenshots: [
            "https://placehold.co/600x338/0E7490/FFFFFF?text=API+Status+Dashboard&font=Inter",
            "https://placehold.co/600x338/0E7490/FFFFFF?text=Response+Time+Graph&font=Inter",
          ]
        },
        {
          featureTitle: "API Management Interface",
          featureDescription: "Administrative interface for managing API configurations, credentials, and permissions. Allows for adding new integrations, rotating API keys, and setting usage limitations.",
          screenshots: [
            "https://placehold.co/600x338/06B6D4/FFFFFF?text=API+Configuration+Panel&font=Inter",
            "https://placehold.co/600x338/06B6D4/FFFFFF?text=Access+Control+Settings&font=Inter",
          ]
        }
      ]
    },
    {
      title: "Database Migration Utility",
      category: "Backend",
      description: "A utility tool for managing and automating complex database migrations between different systems.",
      longDescription: "This tool was developed to simplify and automate the process of migrating data between different database systems. It supports incremental migrations, data transformation rules, validation checks, and rollback mechanisms to ensure data integrity throughout the migration process.",
      technologies: ["Python", "SQL", "SQLAlchemy", "Docker", "Celery", "Redis"],
      keyFeatures: ["Cross-database system support", "Schema mapping and transformation", "Data validation", "Incremental migration", "Error handling and rollbacks", "Migration history tracking"],
      challengesAndSolutions: "Ensuring data integrity during migrations while handling large datasets was a significant challenge. The solution involved implementing transaction-based migrations with thorough validation steps and an efficient chunking mechanism for processing large tables.",
      link: "https://github.com/yourusername/db-migration-tool", 
      liveDemoLink: "#", 
      image: "https://placehold.co/600x400/0284C7/FFFFFF?text=DB+Migration+Tool&font=Inter",
      icon: Database,
      detailedFeatures: [
        {
          featureTitle: "Configuration Interface",
          featureDescription: "User interface for setting up migration parameters, including source and destination connections, mapping rules, validation criteria, and scheduling options.",
          screenshots: [
            "https://placehold.co/600x338/0284C7/FFFFFF?text=Migration+Config+Screen&font=Inter",
            "https://placehold.co/600x338/0284C7/FFFFFF?text=Mapping+Rules+Editor&font=Inter",
          ]
        },
        {
          featureTitle: "Migration Monitoring",
          featureDescription: "Real-time monitoring of migration progress with detailed statistics, logs, and error reporting. Includes visual progress indicators and performance metrics.",
          screenshots: [
            "https://placehold.co/600x338/0369A1/FFFFFF?text=Migration+Progress&font=Inter",
            "https://placehold.co/600x338/0369A1/FFFFFF?text=Error+Log+View&font=Inter",
          ]
        }
      ]
    }
  ],
  experience: [ 
    {
      title: "IT Support Intern",
      company: "Local Business Solutions Ltd.",
      duration: "Jun 2024 - Aug 2024", 
      responsibilities: [
        "Provided technical assistance and troubleshooting for hardware and software issues.",
        "Assisted in managing user accounts and permissions.",
        "Contributed to the documentation of IT procedures.",
        "Gained exposure to network basics and ERP system user-side operations."
      ]
    },
    {
      title: "Web Development Assistant",
      company: "University IT Department",
      duration: "Sep 2023 - May 2024",
      responsibilities: [
        "Assisted in maintaining and updating university department websites.",
        "Collaborated with faculty to implement new web features and content.",
        "Helped optimize website performance and accessibility.",
        "Documented web development processes for future student workers."
      ]
    }
  ],
  education: { 
    degree: "Bachelor of Science in Information Systems", 
    university: "[Your University Name]", 
    graduationDate: "Expected: May 2025", 
    relevantCourses: [
      "Web Application Development", 
      "Database Management Systems", 
      "Enterprise Resource Planning Systems", 
      "Systems Analysis and Design", 
      "IT Project Management", 
      "Business Intelligence"
    ]
  },
  contact: { 
    email: "your.email@example.com", 
    linkedin: "https://linkedin.com/in/yourprofile", 
    github: "https://github.com/yourusername" 
  }
};
