import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment processing, inventory management, and admin dashboard. Built for a retail client in Cambodia.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    impact: "Increased online sales by 300%",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "Analytics dashboard for small businesses with real-time data visualization and reporting features.",
    tech: ["React", "TypeScript", "Express", "MongoDB"],
    impact: "Reduced reporting time by 80%",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Mobile App",
    description: "Cross-platform mobile application for food delivery service with real-time tracking and payment integration.",
    tech: ["React Native", "Firebase", "Expo"],
    impact: "50K+ downloads in first month",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  }
];

const otherProjects = [
  {
    title: "Portfolio Website",
    description: "Responsive portfolio site with modern animations",
    tech: ["React", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "API Service", 
    description: "RESTful API with authentication and rate limiting",
    tech: ["Node.js", "Express", "JWT"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export function MinimalProjects() {
  return (
    <section id="projects" className="py-32">
      <div className="container-content px-6 mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <span className="text-caption text-purple-400 mb-4 block">Portfolio</span>
          <h2 className="text-heading-1 text-white mb-6">
            Selected Work
          </h2>
          <p className="text-body-large text-gray-300 max-w-2xl">
            Here are some projects I've built for clients. Each one solved a real business problem and delivered measurable results.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-24">
          {projects.map((project, index) => (
            <div key={project.id} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              
              {/* Project Image/Video */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="aspect-video bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center">
                  <div className="text-gray-500">Project Screenshot</div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="mb-4">
                  <h3 className="text-heading-2 text-white mb-4">{project.title}</h3>
                  <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-lg inline-block mb-6">
                    <span className="text-body-small font-medium">{project.impact}</span>
                  </div>
                </div>
                
                <p className="text-body text-gray-300 mb-8">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-body-small text-gray-400 bg-gray-800 px-3 py-1 rounded border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl} 
                    className="text-body text-purple-400 hover:text-purple-300 transition-colors flex items-center"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Site
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="text-body text-gray-400 hover:text-gray-300 transition-colors flex items-center"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-heading-3 text-white mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="card p-6 group hover:border-gray-600 transition-colors">
                <h4 className="text-heading-3 text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-body-small text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-caption text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.liveUrl} className="text-body-small text-purple-400 hover:text-purple-300 transition-colors">
                    Live
                  </a>
                  <a href={project.githubUrl} className="text-body-small text-gray-400 hover:text-gray-300 transition-colors">
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}