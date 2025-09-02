// 🔗 RiT Portfolio - Centralized Links & Data
// Edit this file to update links across the entire website

export const PERSONAL_INFO = {
  name: {
    english: "PROMHAK SOKSOTHEARITH",
    khmer: "ព្រុំហាក់ សុខសុធារិទ្ធិ",
    brand: "RiT"
  },
  title: "Full-Stack Developer",
  location: "Phnom Penh, Cambodia 🇰🇭",
  availability: "Available for Projects",
  responseTime: "24h"
} as const;

export const CONTACT_INFO = {
  email: "promhak.dev@gmail.com",
  phone: "+855 12 345 678", 
  location: "Phnom Penh, Cambodia",
  timezone: "ICT (UTC+7)"
} as const;

export const SOCIAL_LINKS = {
  github: {
    name: "GitHub",
    url: "https://github.com/promhaksoksothearith",
    handle: "@promhaksoksothearith"
  },
  linkedin: {
    name: "LinkedIn", 
    url: "https://linkedin.com/in/promhaksoksothearith",
    handle: "/in/promhaksoksothearith"
  },
  youtube: {
    name: "YouTube",
    url: "https://youtube.com/@promhaksoksothearith", 
    handle: "@promhaksoksothearith"
  },
  instagram: {
    name: "Instagram",
    url: "https://instagram.com/promhaksoksothearith",
    handle: "@promhaksoksothearith"
  },
  discord: {
    name: "Discord",
    url: "https://discord.gg/promhaksoksothearith",
    handle: "promhaksoksothearith#0001"
  },
  twitter: {
    name: "Twitter",
    url: "https://twitter.com/promhaksoksothearith",
    handle: "@promhaksoksothearith"
  }
} as const;

export const NAVIGATION_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" }, 
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
] as const;

export const FOOTER_LINKS = {
  services: [
    { label: "Web Development", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
    { label: "Consulting", href: "#services" }
  ],
  resources: [
    { label: "Blog", href: "#blog" },
    { label: "Case Studies", href: "#projects" },
    { label: "Tech Stack", href: "#tech" },
    { label: "Process", href: "#process" }
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Disclaimer", href: "/disclaimer" }
  ]
} as const;

export const PROJECT_LINKS = {
  // 🎯 REPLACE WITH YOUR ACTUAL PROJECT URLs
  featured: [
    {
      title: "E-commerce Platform",
      liveUrl: "https://your-ecommerce-demo.vercel.app",
      githubUrl: "https://github.com/promhaksoksothearith/ecommerce-platform",
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID", // YouTube embed URL
      description: "Full-stack e-commerce platform with React, Node.js, and Stripe integration",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"]
    },
    {
      title: "SaaS Analytics Dashboard", 
      liveUrl: "https://your-saas-demo.vercel.app",
      githubUrl: "https://github.com/promhaksoksothearith/saas-dashboard",
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
      description: "Real-time analytics dashboard with data visualization and user management",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js", "Tailwind CSS"]
    },
    {
      title: "Mobile Food Delivery App",
      liveUrl: "https://your-mobile-app-demo.vercel.app", 
      githubUrl: "https://github.com/promhaksoksothearith/food-delivery-app",
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
      description: "Cross-platform mobile app for food ordering and delivery tracking",
      technologies: ["React Native", "Firebase", "Node.js", "Express", "MongoDB"]
    }
  ],
  additional: [
    {
      title: "Portfolio Website",
      liveUrl: "https://promhaksoksothearith.com",
      githubUrl: "https://github.com/promhaksoksothearith/portfolio",
      description: "Personal portfolio website built with React and modern web technologies",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"]
    },
    {
      title: "REST API Service",
      liveUrl: "https://your-api-docs.vercel.app",
      githubUrl: "https://github.com/promhaksoksothearith/api-service",
      description: "RESTful API service with authentication, rate limiting, and documentation",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Swagger"]
    },
    {
      title: "Task Management Tool",
      liveUrl: "https://your-task-app.vercel.app",
      githubUrl: "https://github.com/promhaksoksothearith/task-manager",
      description: "Collaborative task management tool with real-time updates and team features",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Material-UI"]
    },
    {
      title: "Weather Forecast App",
      liveUrl: "https://your-weather-app.vercel.app",
      githubUrl: "https://github.com/promhaksoksothearith/weather-app",
      description: "Weather application with location-based forecasts and interactive maps",
      technologies: ["React", "OpenWeather API", "Mapbox", "Chart.js", "PWA"]
    }
  ]
} as const;

export const SKILLS_DATA = {
  roles: [
    "Full-Stack Developer",
    "React Specialist", 
    "UI/UX Designer",
    "Problem Solver"
  ],
  technologies: [
    // Update with your actual tech stack
    "React", "Next.js", "TypeScript", "Node.js", 
    "Express", "MongoDB", "PostgreSQL", "Tailwind CSS",
    "Firebase", "AWS", "Docker", "Git"
  ],
  stats: [
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "25+" },
    { label: "Years Experience", value: "3+" },
    { label: "Response Time", value: "24h" }
  ]
} as const;

export const CV_DOWNLOAD_URL = "/path/to/your/cv.pdf"; // Update with actual CV path

// 🎯 Quick Update Instructions:
// 1. Update SOCIAL_LINKS with your actual URLs
// 2. Update PROJECT_LINKS with your real project URLs  
// 3. Update CONTACT_INFO with your real contact details
// 4. Update CV_DOWNLOAD_URL with your actual CV file path
// 5. Import and use these constants in your components