
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
  name: "Valereyna J", 
  title: "Aspiring Web Developer & ERP Enthusiast",
  tagline: "I am a fresh Information Systems graduate currently interning as an Oracle Developer at PT Enseval Putera Megatrading (Kalbe Group). With a strong academic foundation and hands-on experience in both enterprise systems and web development, I am passionate about building innovative digital solutions that enhance business processes and user experiences. While my current focus is on Oracle technologies and ERP systems, I continue to explore web development projects to strengthen my full-stack development skills.",
  shortBio: "Fresh Graduate | Web Dev | ERP", 
  location: "Jakarta, Indonesia", 
  profileImage: "/profile_photo.jpg", 
  cvLink: "/CV_ValereynaJK.pdf",  
  about: { 
    bio: "I am a dedicated and enthusiastic Information Systems graduate with a strong foundation in software development, databases, and enterprise systems. Currently, I am interning as an Oracle Developer at PT Enseval Putera Megatrading (Kalbe Group), where I work on ERP-related solutions and business process optimization. Alongside my ERP and Oracle development experience, I have a keen interest in full-stack web development and continue to build projects that enhance both my technical expertise and problem-solving skills. I am passionate about applying technology to solve real-world challenges, whether through enterprise applications, data-driven insights, or modern web solutions. As a quick learner and collaborative team player, I am always seeking opportunities to grow, take on new challenges, and contribute to impactful projects in a dynamic environment.",
    details: [
      { icon: "GraduationCap", text: "B.Sc. Information Systems, Sampoerna University" },
      { icon: "Bag", text: "Current Job: Oracle Developer Intern @PT Enseval Putera Megatrading (Kalbe Group)"},
      { icon: "Target", text: "Graduated on Sept 2025" },
      { icon: "Lightbulb", text: "Key Interests: Full-Stack Development, Web Development, ERP Developer, Oracle EBS" }
    ]
  },
  skills: [ 
    { category: "Web Development (Frontend)", items: [
      { name: "HTML5", level: 95, logoName: "HTML" }, { name: "CSS3", level: 90, logoName: "CSS" }, 
      { name: "JavaScript", level: 85, logoName: "JS" }, { name: "React.js", level: 80, logoName: "React" }, 
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
      { name: "Oracle EBS", level: 90, logoName: "Oracle" },
      { name: "Odoo", level: 75, logoName: "Odoo" }
    ]},
    { category: "Tools & Others", items: [
      { name: "Git & GitHub", level: 85, logoName: "Git" },
      { name: "VS Code", level: 90, logoName: "VSCode" }
    ]}
  ],
  projects: [ 
    {
      title: "E-commerce Website (Laravel Filament)",
      category: "Web Development",
      description: "Full-featured e-commerce platform built with Laravel, FilamentPHP, and Tailwind CSS, focusing on admin panel and user experience.",
      longDescription: "This project is a comprehensive e-commerce solution developed using Tailwind CSS, Laravel, Livewire with FilamentPHP for a powerful admin panel. It includes all standard e-commerce functionalities, from product browsing and searching to a secure checkout process and order management. Special attention was given to creating an intuitive user interface and a highly efficient administrative backend.",
      technologies: ["Laravel", "FilamentPHP", "Livewire", "Tailwind CSS", "MySQL", "PHP"],
      keyFeatures: ["Advanced Admin Panel (Filament)", "Product Catalog Management", "User Authentication & Profiles", "Shopping Cart & Wishlist", "Order Processing & Management", "Payment Gateway Integration (Conceptual)"],
      challengesAndSolutions: "Integrating various FilamentPHP components to create a seamless admin experience while maintaining performance was a key challenge. This was addressed by carefully structuring resources and leveraging Filament's customization options. Ensuring robust security for user data and transactions was paramount, involving best practices in Laravel for data validation, sanitization, and protection against common web vulnerabilities.",
      link: "https://github.com/valereyna/SKZOO-WebProg", 
      liveDemoLink: "https://drive.google.com/file/d/1QFx0_dWdXlYjXWHXudIaFtgKyXWUkvUv/view?usp=sharing", 
      image: "/skzoo-1.jpg", 
      icon: Briefcase, 
      detailedFeatures: [ 
        {
          featureTitle: "Admin Dashboard & Product Management",
          featureDescription: "The FilamentPHP admin panel provides a comprehensive dashboard for site analytics, user management, and detailed product management. Admins can easily add, edit, and categorize products, manage stock levels, and set pricing.",
          screenshots: [
            "Screenshot_42.jpg",
            "Screenshot_43.jpg",
            "Screenshot_44.jpg",
            "Screenshot_45.jpg",
            "Screenshot_46.jpg",
            "Screenshot_47.jpg",
            "Screenshot_48.jpg",
            "Screenshot_49.jpg",
            "Screenshot_50.jpg",
            "Screenshot_51.jpg",
            "Screenshot_52.jpg"
          ]
        },
        {
          featureTitle: "Frontend User Experience",
          featureDescription: "The customer-facing frontend features a clean design with Tailwind CSS. Users can browse products, use search and filter functionalities, add items to their cart, and proceed through a secure checkout process.",
          screenshots: [
            "skzoo-1.jpg",
            "Screenshot_28.jpg",
            "Screenshot_29.jpg",
            "Screenshot_30.jpg",
            "Screenshot_31.jpg",
            "Screenshot_32.jpg",
            "Screenshot_33.jpg",
            "Screenshot_34.jpg",
            "Screenshot_35.jpg",
            "Screenshot_36.jpg",
            "Screenshot_37.jpg",
            "Screenshot_38.jpg",
            "Screenshot_39.jpg",
          ]
        },
        {
          featureTitle: "User Authentication and Profiles",
          featureDescription: "Secure user registration and login system. Registered users have profiles where they can view their order history, manage addresses, and update their account details.",
          screenshots: [
            "Screenshot_35.jpg",
            "Screenshot_36.jpg"
          ]
        }
      ]
    },
    {
      title: "Internship Management System for Senior Capstone",
      category: "Web Development",
      description: "A web-based system developed to streamline internship processes at the university, covering document requests, registrations, activity logs, consultations, and evaluations.",
      longDescription: "This project was developed as part of my Bachelor’s degree capstone. The Internship Management System (IMS) was designed to simplify and digitalize the entire internship process for students, advisors, coordinators, and administrators. Built with Laravel for the backend and Blade for the frontend, the system integrates multiple modules to handle pre-internship documents, internship registrations, daily/weekly logbooks, consultations, evaluations, and final report submissions. The system ensures transparency, efficiency, and easier monitoring of student progress.",
      technologies: ["Laravel (PHP)", "MySQL", "ReactJS", "Bootstrap", "JavaScript", "HTML", "CSS"],
      keyFeatures: [
        "Role-based access for students, advisors, coordinators, and administrators",
        "Pre-internship document requests and approvals",
        "Internship registration and company assignment",
        "Activity logbook submission and monitoring",
        "Consultation records and evaluation forms",
        "Final report submission and approval workflow"
      ],
      challengesAndSolutions: "One challenge was ensuring that different user roles (students, advisors, coordinators, admins) had the right access and permissions without conflicts. This was solved by implementing a role-based access control system, separating views, and securing routes to ensure each role could only access its intended features.",
      link: "https://github.com/valereyna", 
      liveDemoLink: "https://drive.google.com/file/d/1cWD9i8pyq57vNHKk7Q06GyESjzjhFfv3/view?usp=sharing", 
      image: "Screenshot_2.jpg",
      icon: User,
      detailedFeatures: [
        {
          featureTitle: "Student Dashboard",
          featureDescription: "Students can request pre-internship documents, register for internships, submit logbooks, and upload final reports through a centralized dashboard.",
          screenshots: [
            "Screenshot_2.jpg",
            "Screenshot_8.jpg",
            "Screenshot_9.jpg",
            "Screenshot_10.jpg",
            "Screenshot_11.jpg",
            "Screenshot_12.jpg",
            "Screenshot_13.jpg",
            "Screenshot_14.jpg",
            "Screenshot_15.jpg",
            "Screenshot_16.jpg",
            "Screenshot_17.jpg",
            "Screenshot_18.jpg",
          ]
        },
        {
          featureTitle: "Advisor & Coordinator Panel",
          featureDescription: "Advisors and coordinators can review internship registrations, approve documents, monitor logbooks, record consultations, and evaluate student performance.",
          screenshots: [
            "Screenshot_19.jpg",
            "Screenshot_20.jpg",
            "Screenshot_21.jpg",
            "Screenshot_22.jpg",
            "Screenshot_23.jpg",
            "Screenshot_24.jpg",
            "Screenshot_25.jpg",
            "Screenshot_26.jpg",
          ]
        },
        {
          featureTitle: "Admin Management",
          featureDescription: "Administrators manage users, roles, and system configurations, ensuring smooth operation across all internship processes.",
          screenshots: [
            "Screenshot_3.jpg",
            "Screenshot_4.jpg",
            "Screenshot_5.jpg",
            "Screenshot_6.jpg",
            "Screenshot_7.jpg",
          ]
        }
      ]
    },
    {
      title: "Hyve – Notes Sharing Platform",
      category: "Web Development",
      description: "A collaborative notes-sharing platform designed to help students upload, search, and access study notes with gamification features.",
      longDescription: "Hyve was developed as the final group project for my Software Engineering course. The platform addresses a common challenge faced by students—finding reliable and centralized study materials during exam preparation. Hyve allows students to upload and share notes, search by category or keyword, and interact with others’ content through comments and collections. To encourage participation, the system integrates gamification features where users earn experience points (EXP) and unique titles for their contributions. As a Frontend Developer, I built responsive interfaces using React.js, implementing note listings, search and filter features, and upload forms while ensuring smooth integration with the backend APIs.",
      technologies: ["React.js", "JavaScript", "CSS", "Figma (Design)"],
      keyFeatures: [
        "User authentication and profile management",
        "Upload, search, and filter notes across multiple categories",
        "Gamification with EXP points and user titles (Worker Bee, Soldier Bee, Queen Bee, etc.)",
        "Collections for saving favorite notes",
        "Admin features for verifying, featuring, and managing notes"
      ],
      challengesAndSolutions: "One challenge was ensuring smooth integration between the frontend and backend APIs for note uploads and search results. This was solved by coordinating closely with the backend team, standardizing API endpoints, and handling asynchronous data fetching with clear state management in React.",
      link: "https://github.com/Axeldarren/Hyve-Notes-App", 
      liveDemoLink: "https://hyveapp.netlify.app", 
      image: "Screenshot_53.jpg",
      icon: Code,
      detailedFeatures: [
        {
          featureTitle: "User Interface",
          featureDescription: "Students can browse through uploaded notes, filter by categories, and search for specific topics or keywords.",
          screenshots: [
            "Screenshot_54.jpg",
            "Screenshot_55.jpg",
            "Screenshot_56.jpg",
            "Screenshot_57.jpg",
            "Screenshot_58.jpg",
            "Screenshot_59.jpg",
            "Screenshot_60.jpg",
          ]
        }
      ]
    }
  ],
  experience: [ 
    {
      title: "Oracle Developer Intern",
      company: "PT Enseval Putera Megatrading (Kalbe Group)",
      duration: "Jul 2025 -  Now", 
      responsibilities: [
        "Developed and customized Oracle Reports and Oracle Forms to support ERP operations in Oracle E-Business Suite (EBS).",
        "Created and maintained PL/SQL procedures, functions, and triggers for business process automation.",
        "Utilized TOAD for SQL querying, data validation, and performance optimization.",
        "Assisted in troubleshooting, debugging, and enhancing Oracle-based enterprise applications."
      ]
    },
    {
      title: "ERP Functional",
      company: "TILABS",
      duration: "Jun 2024 - Sept 2024",
      responsibilities: [
          "Created Business Requirement Documents (BRDs) and process flowcharts to streamline client operations.",
        "Developed Standard Operating Procedures (SOPs) and guidebooks for Helpdesk and Recruitment modules.",
        "Tested and revised ERP modules and templates, including website and MOU templates, to improve usability."
      ]
    }
  ],
  education: { 
    degree: "Bachelor of Applied Science in Information Systems", 
    university: "Sampoerna University, The University of Arizona", 
    graduationDate: "Sept 2025", 
    relevantCourses: [
      "Web Programming", 
      "Fundamental Database Management Systems", 
      "Enterprise Architecture", 
      "Software Engineering", 
      "IT Project Management", 
      "Database Design",
      "Principles of Web Design",
      "Computer Programming"
    ]
  },
  contact: { 
    email: "valereyna635@gmail.com", 
    linkedin: "https://linkedin.com/in/valereynaj", 
    github: "https://github.com/valereyna" 
  }
};
