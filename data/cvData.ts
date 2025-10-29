// data/cvData.ts

export const userData = {
  name: "BYISHIMO KEVIN",
  title: "Full Stack Web Developer & Creative Media Producer",
  tagline: "Motivated and passionate developer eager to build innovative solutions.",
  
  contact: {
    email: "kbusije@gmail.com",
    phone: "+250 795 863 410",
    location: "Kigali, Rwanda",
    github: "busihe",
    githubLink: "https://github.com/busihe",
    // linkedin: "your-linkedin-profile" // Uncomment and add if you have one
  },

  profile: `As a motivated and passionate <strong>web and mobile developer</strong>, I bring hands-on experience in computer maintenance and full stack web development. My journey includes proficiency in troubleshooting hardware and software, building robust web applications, and creative media production. I'm always eager to learn and grow in a dynamic tech environment, contributing my skills to innovative projects.`,

  education: [
    {
      degree: "B.Sc. in Computer Science and Information Technology",
      institution: "Kampala University",
      year: "Expected 2025",
    },
    {
      degree: "A-Level Certificate (Mathematics & Physics)",
      institution: "Institut Mwanga d’Uvira",
      year: "2018",
    },
    {
      degree: "Primary Level Certificate",
      institution: "École Primaire de Kinanira",
      year: "2012",
    },
  ],

  trainings: [
    {
      title: "Full Stack Web Development Training",
      duration: "3 months",
      year: "In Progress (2025)",
      description: `Built web and mobile apps using React, Node.js, and Express. Worked with MongoDB and MySQL; focusing on responsive design and deployment.`,
    },
    {
      title: "Computer Maintenance Training",
      duration: "3 months",
      year: "2024",
      description: `Gained hands-on experience in hardware setup, troubleshooting, and software installation.`,
    },
  ],

  technicalSkills: {
    languages: ["Python (basics)", "Java (basics)", "TypeScript", "JavaScript", "PHP", "SQL"],
    frameworks: ["React", "Node.js", "Express", "Next.js", "Django (basics)"],
    databases: ["MongoDB", "PostgreSQL", "MySQL"],
    tools: ["Git", "Docker", "AWS", "Linux", "VS Code", "Jupyter"],
    creative: ["Adobe Premiere Pro", "Adobe Photoshop"],
  },

  projects: [
    {
      title: "Portfolio Website",
      description: "Built with Next.js & Tailwind CSS to showcase projects, videos, and photos, demonstrating frontend development skills and responsive design.",
      technologies: ["Next.js", "Tailwind CSS"],
      githubLink: "https://github.com/busihe/busihe-nextjs-portfolio", // Placeholder, replace with actual repo
      liveLink: "#", // If you deploy this, update this link
      image: "/images/project-portfolio.jpg", // Placeholder image in public/images
    },
    {
      title: "E-commerce Dashboard",
      description: "A comprehensive dashboard for managing e-commerce operations, featuring data visualization and administrative tools.",
      technologies: ["React", "Node.js", "Express", "MongoDB"], // Infer from typical full-stack projects
      githubLink: "https://github.com/busihe/ecommerce-dashboard", // Placeholder, replace with actual repo
      liveLink: "#", // Placeholder
      image: "/images/project-ecommerce.jpg", // Placeholder image
    },
    {
      title: "React Country Search App",
      description: "An interactive web application allowing users to search and view details about countries using a public API.",
      technologies: ["React", "RESTful API"],
      githubLink: "https://github.com/busihe/react-country-search", // Placeholder, replace with actual repo
      liveLink: "#", // Placeholder
      image: "/images/project-countries.jpg", // Placeholder image
    },
    // Add more projects as needed, ensure you have a corresponding image in public/images/
  ],

  certifications: [
    { title: "Computer Maintenance", year: "2024" },
    { title: "Full Stack Development", year: "In Progress (2025)" },
  ],

  languages: ["English (Fluent)", "French (Fluent)", "Swahili (Fluent)"],

  // References are typically not displayed publicly for privacy reasons.
  // Keep them here for your record if you wish, but I won't include them in the UI.
  references: [
    { name: "Ruboneka Etienne", email: "rubonekaetienne@gmail.com", phone: "+256 787 532 835" },
    { name: "Bonk Ruzirabwoba", email: "ruzirabwobabonk@gmail.com", phone: "+250 788 627 191" },
  ],
};