export function GamingAbout() {
  const skills = [
    { name: "React", level: 95, color: "cyan" },
    { name: "Node.js", level: 90, color: "green" },
    { name: "TypeScript", level: 88, color: "blue" },
    { name: "Python", level: 85, color: "yellow" },
    { name: "UI/UX Design", level: 80, color: "purple" },
    { name: "Database", level: 87, color: "pink" }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan': return 'from-cyan-500 to-cyan-600 text-cyan-400 border-cyan-500/30';
      case 'green': return 'from-green-500 to-green-600 text-green-400 border-green-500/30';
      case 'blue': return 'from-blue-500 to-blue-600 text-blue-400 border-blue-500/30';
      case 'yellow': return 'from-yellow-500 to-yellow-600 text-yellow-400 border-yellow-500/30';
      case 'purple': return 'from-purple-500 to-purple-600 text-purple-400 border-purple-500/30';
      case 'pink': return 'from-pink-500 to-pink-600 text-pink-400 border-pink-500/30';
      default: return 'from-gray-500 to-gray-600 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-500/10 border border-purple-500/20 text-purple-400 px-4 py-2 rounded-full mb-6">
            <span className="text-sm uppercase tracking-wider">Player Information</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            ABOUT <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">PLAYER</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Story */}
          <div>
            <div className="bg-gray-800/50 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl text-white mb-6 flex items-center">
                <span className="text-2xl mr-3">📖</span>
                My Story
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Started my journey in the digital realm as a curious explorer, fascinated by the 
                  endless possibilities of code and creativity. What began as simple experiments 
                  evolved into a passion for crafting meaningful digital experiences.
                </p>
                <p>
                  Today, I specialize in full-stack development, bringing together modern technologies 
                  to create solutions that matter. Every project is a new quest, every challenge 
                  an opportunity to level up.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Achievement Unlocked */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🏆</span>
                <div>
                  <h4 className="text-yellow-400 text-lg">Achievement Unlocked!</h4>
                  <p className="text-gray-400 text-sm">Master Developer Status</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Successfully completed 50+ projects with 99% client satisfaction rate.
              </p>
            </div>
          </div>

          {/* Right Side - Skills & Stats */}
          <div>
            <div className="bg-gray-800/50 border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-2xl text-white mb-6 flex items-center">
                <span className="text-2xl mr-3">⚡</span>
                Skill Tree
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className={`text-sm ${getColorClasses(skill.color).split(' ')[2]}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${getColorClasses(skill.color).split(' ')[0]} ${getColorClasses(skill.color).split(' ')[1]} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      {/* Skill Level Indicator */}
                      <div 
                        className="absolute top-0 w-3 h-3 bg-white rounded-full transform -translate-y-0.5 transition-all duration-1000 ease-out"
                        style={{ left: `calc(${skill.level}% - 6px)` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-2xl text-cyan-400 mb-1">500+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Commits</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-green-400 mb-1">24/7</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-purple-400 mb-1">5★</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-yellow-400 mb-1">∞</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}