import { useState } from "react";
import { ExternalLink, Github, Play, Pause, Maximize2, Eye, Code, Star } from "lucide-react";
import { AnimatedText, AnimatedContainer } from "./hooks/useScrollAnimation";

const projects = [
  {
    id: 1,
    title: "Gaming Portfolio Website",
    description: "A fully responsive gaming-themed portfolio with advanced animations, particle effects, and modern UI components.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web Development",
    featured: true,
    videoThumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjB1aSUyMGRlc2lnbnxlbnwxfHx8fDE3NTYzMDY2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    videoUrl: "sample_video_1"
  },
  {
    id: 2,
    title: "E-Commerce Gaming Store",
    description: "Modern e-commerce platform for gaming accessories with real-time inventory, payment integration, and admin dashboard.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
    featured: true,
    videoThumbnail: "https://images.unsplash.com/photo-1556438064-2d7646166914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBnYW1pbmd8ZW58MXx8fHwxNzU2MzA2NjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    videoUrl: "sample_video_2"
  },
  {
    id: 3,
    title: "2D Browser Game",
    description: "Retro-style platformer game built with HTML5 Canvas and JavaScript featuring level editor and multiplayer support.",
    tech: ["JavaScript", "HTML5 Canvas", "WebGL", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Game Development",
    featured: true,
    videoThumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93c2VyJTIwZ2FtZXxlbnwxfHx8fDE3NTYzMDY2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    videoUrl: "sample_video_3"
  },
  {
    id: 4,
    title: "Mobile Gaming App",
    description: "Cross-platform mobile game with leaderboards, achievements, and in-app purchases using React Native.",
    tech: ["React Native", "Firebase", "Redux", "Expo"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Mobile Development",
    featured: true,
    videoThumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBnYW1lJTIwYXBwfGVufDF8fHx8MTc1NjMwNjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    videoUrl: "sample_video_4"
  }
];

const regularProjects = [
  {
    id: 5,
    title: "Discord Bot Dashboard",
    description: "Management dashboard for Discord bots with real-time statistics and configuration panels.",
    tech: ["Vue.js", "Express", "Discord.js", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Dashboard"
  },
  {
    id: 6,
    title: "Streaming Platform UI",
    description: "Netflix-style streaming interface with video player, recommendations, and user profiles.",
    tech: ["React", "SCSS", "Video.js", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    category: "UI/UX"
  }
];

interface VideoProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function VideoProjectCard({ project, index }: VideoProjectCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Main Card */}
      <div className="relative bg-gray-800/90 backdrop-blur-lg border border-gray-700/50 rounded-xl overflow-hidden shadow-2xl group-hover:border-purple-500/50 transition-all duration-300">
        
        {/* Video Container */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.videoThumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`bg-purple-600/90 hover:bg-purple-500 text-white p-4 rounded-full transition-all transform ${
                isHovered ? 'scale-110' : 'scale-100'
              } ${isPlaying ? 'animate-pulse' : ''}`}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-cyan-500/90 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              {project.category}
            </span>
          </div>
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4">
              <div className="bg-yellow-500/90 text-yellow-900 px-3 py-1 rounded-full text-sm flex items-center backdrop-blur-sm">
                <Star size={14} className="mr-1 fill-current" />
                Featured
              </div>
            </div>
          )}
          
          {/* Video Controls */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button className="bg-gray-900/80 hover:bg-gray-800 text-white p-2 rounded-full transition-all backdrop-blur-sm">
              <Maximize2 size={16} />
            </button>
          </div>
        </div>
        
        {/* Project Info */}
        <div className="p-6">
          <h3 className="text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4 leading-relaxed">
            {project.description}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50 hover:border-purple-500/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-4 py-2 rounded-lg transition-all flex items-center justify-center space-x-2 transform hover:scale-105">
              <Eye size={16} />
              <span>View Demo</span>
            </button>
            <button className="bg-gray-700/50 hover:bg-gray-600/50 text-white px-4 py-2 rounded-lg transition-all flex items-center space-x-2">
              <Code size={16} />
              <span>Code</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EnhancedGamingProjects() {
  return (
    <section id="projects" className="py-12 sm:py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <AnimatedText delay={0}>
            <div className="inline-flex items-center bg-purple-500/10 border border-purple-500/20 text-purple-400 px-4 py-2 rounded-full mb-6">
              <Code size={16} className="mr-2" />
              <span className="text-sm uppercase tracking-wider">Portfolio Showcase</span>
            </div>
          </AnimatedText>
          <AnimatedText delay={200}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              FEATURED <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">PROJECTS</span>
            </h2>
          </AnimatedText>
          <AnimatedText delay={400}>
            <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              Showcasing my latest work in web development, gaming, and interactive applications
            </p>
          </AnimatedText>
        </div>

        {/* Featured Video Projects */}
        <AnimatedText delay={600}>
          <div className="mb-16">
            <h3 className="text-2xl text-white mb-8 flex items-center">
              <Play size={24} className="mr-3 text-cyan-400" />
              Video Demonstrations
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <VideoProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </AnimatedText>

        {/* Regular Projects */}
        <AnimatedText delay={800}>
          <div>
            <h3 className="text-2xl text-white mb-8 flex items-center">
              <Github size={24} className="mr-3 text-purple-400" />
              Additional Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 group hover:border-purple-500/30 transition-all hover:transform hover:scale-105"
                >
                  <div className="mb-4">
                    <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                  <h4 className="text-lg text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    <button className="flex-1 text-cyan-400 hover:text-cyan-300 text-sm flex items-center justify-center space-x-2 transition-colors">
                      <ExternalLink size={14} />
                      <span>Live</span>
                    </button>
                    <button className="flex-1 text-purple-400 hover:text-purple-300 text-sm flex items-center justify-center space-x-2 transition-colors">
                      <Github size={14} />
                      <span>Code</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedText>

        {/* CTA Section */}
        <AnimatedText delay={1000}>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-600/10 to-cyan-600/10 border border-purple-500/30 rounded-2xl p-8">
              <h3 className="text-2xl text-white mb-4">Ready to Start Your Project?</h3>
              <p className="text-gray-400 mb-6">
                Let's build something amazing together. Contact me to discuss your ideas!
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg transition-all transform hover:scale-105">
                Get In Touch
              </button>
            </div>
          </div>
        </AnimatedText>
      </div>
    </section>
  );
}