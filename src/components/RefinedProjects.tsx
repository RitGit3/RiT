import { useState } from "react";
import { ExternalLink, Github, Play, Eye, Code2, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment processing, real-time inventory management, and comprehensive admin dashboard. Built for a retail client in Cambodia with mobile-first approach.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind"],
    impact: "Increased online sales by 300%",
    metrics: ["300% sales increase", "50ms avg response time", "99.9% uptime"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "E-commerce",
    year: "2024"
  },
  {
    id: 2,
    title: "SaaS Analytics Dashboard",
    description: "Real-time analytics dashboard for small businesses featuring data visualization, automated reporting, and team collaboration tools with intuitive user experience.",
    tech: ["React", "TypeScript", "Express", "MongoDB", "Chart.js"],
    impact: "Reduced reporting time by 80%",
    metrics: ["80% time reduction", "10K+ data points", "Real-time updates"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "SaaS",
    year: "2024"
  },
  {
    id: 3,
    title: "Mobile Food Delivery App",
    description: "Cross-platform mobile application for food delivery service with real-time order tracking, integrated payment system, and location-based restaurant discovery.",
    tech: ["React Native", "Firebase", "Expo", "Google Maps API"],
    impact: "50K+ downloads in first month",
    metrics: ["50K+ downloads", "4.8★ rating", "25min avg delivery"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Mobile App",
    year: "2023"
  }
];

const otherProjects = [
  {
    title: "Portfolio Website",
    description: "Responsive portfolio site with modern animations and clean design",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "API Service",
    description: "RESTful API with authentication, rate limiting, and documentation",
    tech: ["Node.js", "Express", "JWT", "Swagger"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management Tool",
    description: "Team collaboration tool with real-time updates and file sharing",
    tech: ["Vue.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Weather App",
    description: "Beautiful weather application with forecasts and location detection",
    tech: ["React", "OpenWeather API", "PWA"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex-row gap-8 lg:gap-12 items-center`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Project Visual */}
      <div className="w-full lg:flex-1 relative">
        <div className="relative aspect-video w-full max-w-lg mx-auto lg:max-w-none rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
          <ImageWithFallback
            src={`https://images.unsplash.com/photo-${
              project.id === 1 ? '1556742049-0a24d4bd1b6c' : 
              project.id === 2 ? '1551288049-fdc2c5e8e55f' : 
              '1512941937669-90a1b58e7e9c'
            }?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600`}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex gap-3">
                <button className="btn-primary text-sm px-4 py-2">
                  <Eye size={16} className="mr-2" />
                  View Live
                </button>
                <button className="btn-secondary text-sm px-4 py-2">
                  <Code2 size={16} className="mr-2" />
                  Code
                </button>
              </div>
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-purple-600/90 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          {/* Featured Badge */}
          <div className="absolute top-4 right-4">
            <div className="bg-yellow-500/90 text-yellow-900 px-3 py-1 rounded-full text-sm flex items-center backdrop-blur-sm">
              <Star size={14} className="mr-1 fill-current" />
              Featured
            </div>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="w-full lg:flex-1 space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-heading-2 text-white group-hover:text-gaming-gradient transition-colors">
              {project.title}
            </h3>
            <span className="text-body-small text-gray-500">{project.year}</span>
          </div>
          
          {/* Impact Badge */}
          <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-lg inline-block mb-4">
            <span className="text-body-small font-medium">{project.impact}</span>
          </div>
        </div>
        
        <p className="text-body text-gray-300 leading-relaxed">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 metrics-grid">
          {project.metrics.map((metric, metricIndex) => (
            <div key={metricIndex} className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-3 text-center">
              <div className="text-body-small text-white font-medium">{metric}</div>
            </div>
          ))}
        </div>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="text-code text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700/50 hover:border-purple-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-4">
          <a 
            href={project.liveUrl} 
            className="text-body text-purple-400 hover:text-purple-300 transition-colors flex items-center group"
          >
            <ExternalLink size={16} className="mr-2 group-hover:translate-x-1 transition-transform" />
            Live Demo
          </a>
          <a 
            href={project.githubUrl} 
            className="text-body text-gray-400 hover:text-gray-300 transition-colors flex items-center group"
          >
            <Github size={16} className="mr-2 group-hover:scale-110 transition-transform" />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

export function RefinedProjects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-content px-6 mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-caption text-purple-400 mb-4 block">Portfolio</span>
          <h2 className="text-heading-1 text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-body-large text-gray-300 max-w-2xl mx-auto">
            Here are some projects I've built that solved real problems and delivered measurable results for clients.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Other Projects */}
        <div className="border-t border-gray-800/50 pt-16">
          <h3 className="text-heading-2 text-white mb-12 text-center">More Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="card-interactive p-6 space-y-4">
                <h4 className="text-heading-3 text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-body-small text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-caption text-gray-400 bg-gray-800/50 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2">
                  <a href={project.liveUrl} className="text-body-small text-purple-400 hover:text-purple-300 transition-colors flex items-center">
                    <ExternalLink size={14} className="mr-1" />
                    Live
                  </a>
                  <a href={project.githubUrl} className="text-body-small text-gray-400 hover:text-gray-300 transition-colors flex items-center">
                    <Github size={14} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gaming-gradient border border-purple-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-heading-2 text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-body text-gray-300 mb-6">
              Let's discuss your ideas and build something amazing together.
            </p>
            <button className="btn-primary">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}