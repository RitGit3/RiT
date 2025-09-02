import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { Download, Rocket, FileText, Zap, Trophy, Star, Code } from "lucide-react";
import { AnimatedText, AnimatedContainer } from "./hooks/useScrollAnimation";

export function EnhancedGamingPersonalHero() {
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Full Stack Developer",
    "UI/UX Designer", 
    "Problem Solver",
    "Creative Thinker"
  ];

  useEffect(() => {
    const currentRoleText = roles[currentRole];
    let i = 0;
    setTypedText("");
    
    const typeInterval = setInterval(() => {
      if (i < currentRoleText.length) {
        setTypedText(currentRoleText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRole]);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 sm:left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-4 sm:right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-4 sm:left-20 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px] animate-pulse"></div>
        
        {/* Floating Code Symbols */}
        <div className="absolute top-1/4 left-1/4 text-purple-500/10 text-4xl sm:text-6xl animate-float">{'</>'}</div>
        <div className="absolute top-1/3 right-1/4 text-cyan-500/10 text-3xl sm:text-5xl animate-float" style={{animationDelay: '1s'}}>{'{ }'}</div>
        <div className="absolute bottom-1/3 left-1/5 text-green-500/10 text-2xl sm:text-4xl animate-float" style={{animationDelay: '2s'}}>{'( )'}</div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-8rem)]">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0 w-full lg:max-w-none">
            
            {/* Status Badge */}
            <AnimatedText delay={0}>
              <div className="inline-flex items-center bg-green-500/10 border border-green-500/20 text-green-400 px-3 sm:px-4 py-2 rounded-full mb-6 text-sm sm:text-base">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                <Zap size={16} className="mr-2" />
                <span className="uppercase tracking-wider">Available for Projects</span>
              </div>
            </AnimatedText>
            
            {/* Main Title */}
            <AnimatedText delay={200}>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl mb-6 text-white leading-tight">
                <span className="block mb-2">HELLO, I'M</span>
                <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                  Rith
                </span>
              </h1>
            </AnimatedText>
            
            {/* Dynamic Typing Effect */}
            <AnimatedText delay={400}>
              <div className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 h-8 sm:h-10">
                <span className="text-cyan-400">&gt;</span> {typedText}
                <span className="animate-pulse text-cyan-400">|</span>
              </div>
            </AnimatedText>
            
            {/* Description */}
            <AnimatedText delay={600}>
              <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Crafting digital experiences through code, design, and creativity. 
                Specializing in modern web technologies and bringing innovative ideas to life 
                with passion and precision.
              </p>
            </AnimatedText>
            
            {/* Enhanced Gaming Stats */}
            <AnimatedContainer className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8" stagger={100}>
              <div className="bg-gray-800/60 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3 sm:p-4 text-center group hover:scale-105 transition-transform">
                <Code className="mx-auto mb-2 text-cyan-400" size={20} />
                <div className="text-xl sm:text-2xl text-cyan-400 mb-1">50+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Projects</div>
              </div>
              <div className="bg-gray-800/60 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3 sm:p-4 text-center group hover:scale-105 transition-transform">
                <Star className="mx-auto mb-2 text-green-400" size={20} />
                <div className="text-xl sm:text-2xl text-green-400 mb-1">3+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Years Exp</div>
              </div>
              <div className="bg-gray-800/60 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3 sm:p-4 text-center group hover:scale-105 transition-transform col-span-2 sm:col-span-1">
                <Trophy className="mx-auto mb-2 text-yellow-400" size={20} />
                <div className="text-xl sm:text-2xl text-yellow-400 mb-1">99%</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Success Rate</div>
              </div>
            </AnimatedContainer>
            
            {/* Action Buttons */}
            <AnimatedContainer className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" stagger={150}>
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all transform hover:scale-105 relative overflow-hidden group">
                <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
                  <Rocket size={18} className="mr-2" />
                  VIEW PROJECTS
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              <button className="border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all hover:scale-105">
                <span className="flex items-center justify-center text-sm sm:text-base">
                  <Download size={18} className="mr-2" />
                  DOWNLOAD CV
                </span>
              </button>
            </AnimatedContainer>
          </div>
          
          {/* Right Content - Enhanced Gaming Card */}
          <div className="flex-1 max-w-lg w-full lg:w-auto">
            <AnimatedText delay={800}>
              <div className="relative">
                {/* Enhanced Glow Effects */}
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-3xl blur-2xl animate-pulse"></div>
                
                {/* Main Gaming Card */}
                <div className="relative bg-gray-800/90 backdrop-blur-lg border border-purple-500/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center shadow-2xl">
                  
                  {/* Profile Section */}
                  <div className="relative w-24 sm:w-32 h-24 sm:h-32 mx-auto mb-6">
                    <div className="w-full h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full p-1 animate-pulse">
                      <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center text-2xl sm:text-4xl">
                        👨‍💻
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm animate-bounce">
                      LVL 99
                    </div>
                    <div className="absolute -top-2 -left-2 bg-yellow-500 text-yellow-900 p-1 sm:p-2 rounded-full text-xs sm:text-sm animate-pulse">
                      🏆
                    </div>
                  </div>
                  
                  {/* Gaming Info */}
                  <h3 className="text-lg sm:text-xl text-white mb-6 flex items-center justify-center">
                    <Star size={20} className="mr-2 text-yellow-400" />
                    Player Stats
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    {[
                      { skill: "Coding Skills", level: 5, color: "yellow" },
                      { skill: "Creativity", level: 5, color: "purple" },
                      { skill: "Problem Solving", level: 5, color: "cyan" },
                      { skill: "Team Work", level: 4, color: "green" }
                    ].map((stat, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm sm:text-base">{stat.skill}</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                                i < stat.level 
                                  ? `bg-${stat.color}-400 shadow-lg` 
                                  : 'bg-gray-600'
                              }`}
                              style={{
                                boxShadow: i < stat.level 
                                  ? `0 0 8px var(--tw-${stat.color}-400)` 
                                  : 'none'
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Enhanced Achievement Badges */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <div className="bg-yellow-500/20 border border-yellow-500/40 rounded-lg p-2 sm:p-3 text-center group hover:scale-105 transition-transform">
                      <div className="text-base sm:text-lg mb-1">🏆</div>
                      <div className="text-xs text-yellow-400">Expert</div>
                    </div>
                    <div className="bg-purple-500/20 border border-purple-500/40 rounded-lg p-2 sm:p-3 text-center group hover:scale-105 transition-transform">
                      <div className="text-base sm:text-lg mb-1">💎</div>
                      <div className="text-xs text-purple-400">Premium</div>
                    </div>
                    <div className="bg-cyan-500/20 border border-cyan-500/40 rounded-lg p-2 sm:p-3 text-center group hover:scale-105 transition-transform">
                      <div className="text-base sm:text-lg mb-1">⚡</div>
                      <div className="text-xs text-cyan-400">Fast</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
}