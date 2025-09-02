import { User, Zap, Trophy, Target, Coffee, Heart } from "lucide-react";
import { AnimatedText, AnimatedContainer } from "./hooks/useScrollAnimation";

export function EnhancedGamingAbout() {
  const skills = [
    { name: "React & Next.js", level: 95, color: "cyan", icon: "⚛️" },
    { name: "Node.js & APIs", level: 90, color: "green", icon: "🟢" },
    { name: "TypeScript", level: 88, color: "blue", icon: "📘" },
    { name: "Python & AI", level: 85, color: "yellow", icon: "🐍" },
    { name: "UI/UX Design", level: 80, color: "purple", icon: "🎨" },
    { name: "Database & Cloud", level: 87, color: "pink", icon: "☁️" }
  ];

  const achievements = [
    { title: "Senior Developer", desc: "Lead multiple high-impact projects", icon: Trophy, color: "text-yellow-400" },
    { title: "Innovation Award", desc: "Creative solutions & best practices", icon: Zap, color: "text-purple-400" },
    { title: "Team Player", desc: "Collaborative & mentoring focused", icon: Heart, color: "text-pink-400" },
    { title: "Problem Solver", desc: "Complex challenges, elegant solutions", icon: Target, color: "text-green-400" }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: 'from-cyan-500 to-cyan-600 text-cyan-400 border-cyan-500/30',
      green: 'from-green-500 to-green-600 text-green-400 border-green-500/30',
      blue: 'from-blue-500 to-blue-600 text-blue-400 border-blue-500/30',
      yellow: 'from-yellow-500 to-yellow-600 text-yellow-400 border-yellow-500/30',
      purple: 'from-purple-500 to-purple-600 text-purple-400 border-purple-500/30',
      pink: 'from-pink-500 to-pink-600 text-pink-400 border-pink-500/30'
    };
    return colorMap[color as keyof typeof colorMap] || 'from-gray-500 to-gray-600 text-gray-400 border-gray-500/30';
  };

  return (
    <section id="about" className="py-12 sm:py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <AnimatedText delay={0}>
            <div className="inline-flex items-center bg-purple-500/10 border border-purple-500/20 text-purple-400 px-4 py-2 rounded-full mb-6">
              <User size={16} className="mr-2" />
              <span className="text-sm uppercase tracking-wider">Player Information</span>
            </div>
          </AnimatedText>
          <AnimatedText delay={200}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              ABOUT <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">PLAYER</span>
            </h2>
          </AnimatedText>
          <AnimatedText delay={400}>
            <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              Discover the story behind the code and the passion that drives innovation.
            </p>
          </AnimatedText>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left Side - Story & Achievements */}
          <div className="space-y-8">
            <AnimatedText delay={600}>
              <div className="bg-gray-800/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl text-white mb-6 flex items-center">
                  <span className="text-2xl mr-3">📖</span>
                  My Journey
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    My adventure in the digital realm began with curiosity and evolved into a 
                    passion for creating meaningful experiences. From writing my first "Hello World" 
                    to architecting complex applications, every line of code tells a story.
                  </p>
                  <p>
                    Today, I specialize in full-stack development, bringing together cutting-edge 
                    technologies to solve real-world problems. I believe in clean code, user-centered 
                    design, and the power of continuous learning.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring emerging technologies, contributing 
                    to open-source projects, mentoring fellow developers, or enjoying a good cup of 
                    coffee while planning the next big project.
                  </p>
                </div>
              </div>
            </AnimatedText>

            {/* Achievements Grid */}
            <AnimatedContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" stagger={100}>
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 sm:p-6 group hover:border-purple-500/30 transition-all hover:transform hover:scale-105">
                  <div className="flex items-start space-x-3">
                    <achievement.icon size={24} className={`${achievement.color} mt-1`} />
                    <div>
                      <h4 className="text-white text-sm sm:text-base mb-1">{achievement.title}</h4>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{achievement.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </AnimatedContainer>

            {/* Achievement Unlocked */}
            <AnimatedText delay={800}>
              <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl sm:text-3xl mr-3">🏆</span>
                  <div>
                    <h4 className="text-yellow-400 text-lg sm:text-xl">Achievement Unlocked!</h4>
                    <p className="text-gray-400 text-sm">Master Developer Status</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Successfully delivered 50+ projects with 99% client satisfaction. 
                  Specialized in creating scalable, maintainable, and user-friendly applications.
                </p>
              </div>
            </AnimatedText>
          </div>

          {/* Right Side - Skills & Stats */}
          <div className="space-y-8">
            <AnimatedText delay={1000}>
              <div className="bg-gray-800/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl text-white mb-6 flex items-center">
                  <Zap size={24} className="mr-3 text-yellow-400" />
                  Skill Tree
                </h3>
                
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="relative group" style={{animationDelay: `${index * 100}ms`}}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="text-gray-300 text-sm sm:text-base">{skill.name}</span>
                        </div>
                        <span className={`text-sm ${getColorClasses(skill.color).split(' ')[2]} font-mono`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3 overflow-hidden">
                          <div 
                            className={`bg-gradient-to-r ${getColorClasses(skill.color).split(' ')[0]} ${getColorClasses(skill.color).split(' ')[1]} h-full rounded-full transition-all duration-1000 ease-out shadow-lg`}
                            style={{ 
                              width: `${skill.level}%`,
                              boxShadow: `0 0 10px rgba(139, 92, 246, 0.5)` 
                            }}
                          ></div>
                        </div>
                        {/* Skill Level Indicator */}
                        <div 
                          className="absolute top-0 w-3 h-3 bg-white rounded-full transform -translate-y-0.5 transition-all duration-1000 ease-out shadow-lg border-2 border-gray-900"
                          style={{ left: `calc(${skill.level}% - 6px)` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedText>

            {/* Quick Stats */}
            <AnimatedContainer className="grid grid-cols-2 gap-4" stagger={150}>
              {[
                { value: "500+", label: "Commits", icon: "💻", color: "text-cyan-400" },
                { value: "24/7", label: "Available", icon: "🚀", color: "text-green-400" },
                { value: "5★", label: "Rating", icon: "⭐", color: "text-purple-400" },
                { value: "∞", label: "Learning", icon: "📚", color: "text-yellow-400" }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center group hover:border-purple-500/30 transition-all hover:scale-105">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className={`text-xl sm:text-2xl ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </AnimatedContainer>

            {/* Fun Fact */}
            <AnimatedText delay={1200}>
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-6">
                <div className="flex items-center mb-3">
                  <Coffee size={20} className="text-cyan-400 mr-2" />
                  <h4 className="text-cyan-400">Fun Fact</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  I've consumed approximately 2,847 cups of coffee while coding. 
                  That's enough caffeine to power a small rocket ship! ☕🚀
                </p>
              </div>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
}