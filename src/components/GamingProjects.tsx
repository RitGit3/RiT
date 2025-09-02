import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Gaming Dashboard Pro",
    category: "Web Application",
    rarity: "Legendary",
    description: "Advanced gaming analytics dashboard with real-time statistics and player insights.",
    image: "https://images.unsplash.com/photo-1613160717888-faa82cdb8a94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU2MzA2NjAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tech: ["React", "Node.js", "WebSocket", "Chart.js"],
    status: "Completed",
    color: "purple"
  },
  {
    id: 2,
    title: "Mobile Gaming App",
    category: "Mobile Development",
    rarity: "Epic",
    description: "Cross-platform mobile game with multiplayer functionality and real-time chat.",
    image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU2MjM1MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tech: ["React Native", "Firebase", "Unity", "Socket.io"],
    status: "In Progress",
    color: "cyan"
  },
  {
    id: 3,
    title: "Code Editor Suite",
    category: "Development Tools",
    rarity: "Rare",
    description: "Modern code editor with AI assistance and collaborative features.",
    image: "https://images.unsplash.com/photo-1546900703-cf06143d1239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzU2MjI3MzA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tech: ["Electron", "Monaco Editor", "Python", "AI/ML"],
    status: "Planning",
    color: "green"
  }
];

export function GamingProjects() {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Legendary': return 'from-purple-500/20 to-purple-600/20 border-purple-500/50 text-purple-400';
      case 'Epic': return 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/50 text-cyan-400';
      case 'Rare': return 'from-green-500/20 to-green-600/20 border-green-500/50 text-green-400';
      default: return 'from-gray-500/20 to-gray-600/20 border-gray-500/50 text-gray-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Progress': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Planning': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full mb-6">
            <span className="text-sm uppercase tracking-wider">Project Inventory</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            MY <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">PROJECTS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of digital adventures I've crafted. Each project represents a unique challenge overcome.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 border border-purple-500/20 rounded-lg p-1 inline-flex">
            {["All", "Web", "Mobile", "Tools"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded transition-all ${
                  activeFilter === filter
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Project Card */}
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                
                {/* Rarity Banner */}
                <div className={`absolute top-4 right-4 z-10 bg-gradient-to-r ${getRarityColor(project.rarity)} border px-3 py-1 rounded-full text-xs uppercase tracking-wider`}>
                  {project.rarity}
                </div>

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className={`absolute bottom-4 left-4 ${getStatusColor(project.status)} border px-3 py-1 rounded-full text-xs uppercase tracking-wider`}>
                    {project.status}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-2xl">
                      {project.category.includes('Mobile') ? '📱' : 
                       project.category.includes('Web') ? '💻' : '🛠️'}
                    </div>
                  </div>

                  <p className="text-sm text-gray-400 mb-4">{project.category}</p>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs border border-gray-600/50">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 text-purple-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 px-4 py-2 rounded-lg transition-all text-sm">
                      View Details
                    </button>
                    <button className="flex-1 bg-gray-700/50 border border-gray-600/50 text-gray-300 hover:text-white hover:bg-gray-600/50 px-4 py-2 rounded-lg transition-all text-sm">
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 relative overflow-hidden group">
            <span className="relative z-10 flex items-center justify-center">
              <span className="mr-2">🎮</span>
              LOAD MORE PROJECTS
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>
    </section>
  );
}