import { useState, useEffect } from "react";

const techSkills = [
  { name: "React", color: "#61DAFB", icon: "⚛️" },
  { name: "Next.js", color: "#000000", icon: "▲" },
  { name: "TypeScript", color: "#3178C6", icon: "📘" },
  { name: "JavaScript", color: "#F7DF1E", icon: "🟨" },
  { name: "Node.js", color: "#339933", icon: "🟢" },
  { name: "Python", color: "#3776AB", icon: "🐍" },
  { name: "HTML5", color: "#E34F26", icon: "🌐" },
  { name: "CSS3", color: "#1572B6", icon: "🎨" },
  { name: "Sass", color: "#CC6699", icon: "💅" },
  { name: "Tailwind", color: "#06B6D4", icon: "🌊" },
  { name: "Vue.js", color: "#4FC08D", icon: "💚" },
  { name: "Angular", color: "#DD0031", icon: "🅰️" },
  { name: "Express", color: "#000000", icon: "🚂" },
  { name: "MongoDB", color: "#47A248", icon: "🍃" },
  { name: "PostgreSQL", color: "#336791", icon: "🐘" },
  { name: "Redis", color: "#DC382D", icon: "📦" },
  { name: "Docker", color: "#2496ED", icon: "🐳" },
  { name: "AWS", color: "#FF9900", icon: "☁️" },
  { name: "Git", color: "#F05032", icon: "📚" },
  { name: "GraphQL", color: "#E10098", icon: "🔗" },
  { name: "Figma", color: "#F24E1E", icon: "🎯" },
  { name: "Photoshop", color: "#31A8FF", icon: "🖼️" },
];

export function TechSkillsSlider() {
  const [animatedItems, setAnimatedItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * techSkills.length);
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
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 sm:py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            TECH <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">ARSENAL</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I master to build incredible digital experiences
          </p>
        </div>

        {/* First Row - Moving Right */}
        <div className="relative h-20 mb-8 overflow-hidden">
          <div className="absolute inset-0 flex items-center">
            <div className="flex space-x-8 animate-slide-right whitespace-nowrap">
              {[...techSkills, ...techSkills].map((skill, index) => (
                <div
                  key={`right-${index}`}
                  className={`flex items-center space-x-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl px-6 py-3 min-w-fit transition-all duration-300 hover:scale-110 ${
                    animatedItems.has(index % techSkills.length) 
                      ? 'animate-jump animate-tech-glow transform scale-110' 
                      : ''
                  }`}
                  style={{
                    borderColor: animatedItems.has(index % techSkills.length) ? skill.color : undefined,
                    boxShadow: animatedItems.has(index % techSkills.length) 
                      ? `0 0 20px ${skill.color}40` 
                      : undefined
                  }}
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span 
                    className="text-white text-lg transition-colors"
                    style={{
                      color: animatedItems.has(index % techSkills.length) ? skill.color : undefined
                    }}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - Moving Left */}
        <div className="relative h-20 overflow-hidden">
          <div className="absolute inset-0 flex items-center">
            <div className="flex space-x-8 animate-slide-left whitespace-nowrap">
              {[...techSkills.slice().reverse(), ...techSkills.slice().reverse()].map((skill, index) => (
                <div
                  key={`left-${index}`}
                  className={`flex items-center space-x-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl px-6 py-3 min-w-fit transition-all duration-300 hover:scale-110 ${
                    animatedItems.has(index % techSkills.length) 
                      ? 'animate-jump animate-tech-glow transform scale-110' 
                      : ''
                  }`}
                  style={{
                    borderColor: animatedItems.has(index % techSkills.length) ? skill.color : undefined,
                    boxShadow: animatedItems.has(index % techSkills.length) 
                      ? `0 0 20px ${skill.color}40` 
                      : undefined
                  }}
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span 
                    className="text-white text-lg transition-colors"
                    style={{
                      color: animatedItems.has(index % techSkills.length) ? skill.color : undefined
                    }}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Message */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            <span className="inline-flex items-center">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
              Hover over skills for interactive effects
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}