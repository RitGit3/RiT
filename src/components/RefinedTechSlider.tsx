import { useState, useEffect } from "react";

const technologies = [
  { name: "React", color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", color: "#000000", category: "Framework" },
  { name: "TypeScript", color: "#3178C6", category: "Language" },
  { name: "Node.js", color: "#339933", category: "Backend" },
  { name: "Python", color: "#3776AB", category: "Language" },
  { name: "PostgreSQL", color: "#336791", category: "Database" },
  { name: "MongoDB", color: "#47A248", category: "Database" },
  { name: "AWS", color: "#FF9900", category: "Cloud" },
  { name: "Docker", color: "#2496ED", category: "DevOps" },
  { name: "Git", color: "#F05032", category: "Tool" },
  { name: "Tailwind CSS", color: "#06B6D4", category: "Styling" },
  { name: "Figma", color: "#F24E1E", category: "Design" },
];

export function RefinedTechSlider() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [animatedItems, setAnimatedItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * technologies.length);
      setAnimatedItems(prev => {
        const newSet = new Set(prev);
        newSet.add(randomIndex);
        return newSet;
      });

      setTimeout(() => {
        setAnimatedItems(prev => {
          const newSet = new Set(prev);
          newSet.delete(randomIndex);
          return newSet;
        });
      }, 2000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 border-y border-gray-800/50 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container-content px-6 mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-caption text-purple-400 mb-4 block">Tech Stack</span>
          <h2 className="text-heading-2 text-white mb-4">
            Technologies I Use
          </h2>
          <p className="text-body text-gray-400 max-w-2xl mx-auto">
            Modern tools and frameworks I leverage to build exceptional digital experiences
          </p>
        </div>

        {/* Animated Tech Grid */}
        <div className="relative">
          {/* Moving Background Elements - Subtle floating shapes */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="flex space-x-12 animate-tech-slide">
              {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`bg-${index}`}
                  className="flex-shrink-0 w-20 h-10 bg-gray-800/10 border border-gray-700/10 rounded-lg flex items-center justify-center"
                >
                  <span className="text-gray-700 text-xs font-medium">{tech.name.charAt(0)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Tech Grid */}
          <div className="relative bg-gray-900/80 backdrop-blur-sm py-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-3 sm:gap-4 max-w-5xl mx-auto">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`card-interactive group p-4 text-center transition-all duration-300 ${
                    animatedItems.has(index) ? 'animate-glow scale-105' : ''
                  }`}
                  style={{
                    borderColor: animatedItems.has(index) ? `${tech.color}40` : undefined,
                    boxShadow: animatedItems.has(index) ? `0 0 20px ${tech.color}20` : undefined
                  }}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className="mb-2">
                    <div 
                      className="w-8 h-8 rounded-lg mx-auto mb-2 flex items-center justify-center text-white font-bold text-sm transition-colors"
                      style={{
                        backgroundColor: hoveredTech === tech.name ? tech.color : '#374151',
                        color: hoveredTech === tech.name ? '#fff' : '#9CA3AF'
                      }}
                    >
                      {tech.name.charAt(0)}
                    </div>
                    <div 
                      className="text-body-small font-medium transition-colors"
                      style={{
                        color: hoveredTech === tech.name || animatedItems.has(index) ? tech.color : '#fff'
                      }}
                    >
                      {tech.name}
                    </div>
                    <div className="text-caption text-gray-500 mt-1">
                      {tech.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Indicator */}
        <div className="text-center mt-8">
          <p className="text-body-small text-gray-500 flex items-center justify-center">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
            Hover over technologies to see them highlighted
          </p>
        </div>
      </div>
    </section>
  );
}