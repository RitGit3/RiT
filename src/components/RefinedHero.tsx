import { useState, useEffect } from "react";
import { ArrowRight, Mail, Code, Zap, Star } from "lucide-react";

export function RefinedHero() {
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [showKhmerName, setShowKhmerName] = useState(false);
  
  const roles = [
    "Full-Stack Developer",
    "React Specialist", 
    "UI/UX Designer",
    "Problem Solver"
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

  useEffect(() => {
    const nameToggle = setInterval(() => {
      setShowKhmerName(prev => !prev);
    }, 4000);

    return () => clearInterval(nameToggle);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center py-32 relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-content px-4 sm:px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            
            {/* Status */}
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-caption text-green-400">Available for Projects</span>
            </div>
            
            {/* Main Headline */}
            <div>
              <div className="text-body-large text-gray-400 mb-4">Hello, I'm</div>
              <h1 className="text-display text-white mb-6">
                <div className="relative name-animation-container overflow-hidden">
                  <div className={`absolute inset-0 transition-all duration-1000 ${
                    showKhmerName ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                  }`}>
                    <span className="text-gaming-gradient font-khmer block leading-tight">
                      ព្រុំហាក់ សុខសុធារិទ្ធិ
                    </span>
                  </div>
                  <div className={`absolute inset-0 transition-all duration-1000 ${
                    !showKhmerName ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}>
                    <span className="text-gaming-gradient block leading-tight break-words">
                      PROMHAK<br className="sm:hidden" /><span className="hidden sm:inline"> </span>SOKSOTHEARITH
                    </span>
                  </div>
                </div>
              </h1>
              
              {/* Dynamic Role */}
              <div className="text-heading-2 text-gray-400 mb-8">
                <span className="text-cyan-400 text-code">&gt; </span>
                {typedText}
                <span className="animate-pulse text-cyan-400">|</span>
              </div>
            </div>
            
            {/* Value Proposition */}
            <p className="text-body-large text-gray-300 max-w-lg leading-relaxed">
              I craft digital experiences that <span className="text-purple-400 font-medium">drive results</span>. 
              From concept to deployment, I deliver clean code and exceptional user experiences 
              from <span className="text-cyan-400 font-medium">Cambodia</span> 🇰🇭.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-heading-3 text-white font-bold">50+</div>
                <div className="text-body-small text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-heading-3 text-white font-bold">3+</div>
                <div className="text-body-small text-gray-400">Years</div>
              </div>
              <div className="text-center">
                <div className="text-heading-3 text-white font-bold">24h</div>
                <div className="text-body-small text-gray-400">Response</div>
              </div>
            </div>
            
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary group">
                <span className="flex items-center justify-center">
                  Start Your Project
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="btn-secondary">
                <span className="flex items-center justify-center">
                  <Mail size={20} className="mr-2" />
                  Get In Touch
                </span>
              </button>
            </div>
          </div>
          
          {/* Right Content - Gaming Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-sm w-full">
              
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl blur-xl opacity-75"></div>
              
              {/* Main Card */}
              <div className="relative gaming-border bg-gray-850/90 backdrop-blur-lg rounded-2xl p-8 text-center">
                
                {/* Avatar */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="w-full h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl p-1">
                    <div className="w-full h-full bg-gray-850 rounded-lg flex items-center justify-center text-3xl">
                      👨‍💻
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    LVL 99
                  </div>
                  <div className="absolute -top-2 -left-2 bg-yellow-500 text-yellow-900 p-2 rounded-full text-sm">
                    🏆
                  </div>
                </div>
                
                {/* Gaming Info */}
                <h3 className="text-heading-3 text-white mb-6 flex items-center justify-center">
                  <Star size={20} className="mr-2 text-yellow-400" />
                  Developer Stats
                </h3>
                
                {/* Skills */}
                <div className="space-y-4 mb-8">
                  {[
                    { skill: "React/Next.js", level: 5, color: "bg-cyan-400" },
                    { skill: "Node.js", level: 5, color: "bg-green-400" },
                    { skill: "UI/UX Design", level: 4, color: "bg-purple-400" },
                    { skill: "Problem Solving", level: 5, color: "bg-yellow-400" }
                  ].map((stat, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-body-small text-gray-400">{stat.skill}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              i < stat.level 
                                ? `${stat.color} shadow-lg animate-glow` 
                                : 'bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Achievement Badges */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 text-center hover:bg-yellow-500/20 transition-colors">
                    <div className="text-lg mb-1">🎯</div>
                    <div className="text-caption text-yellow-400">Expert</div>
                  </div>
                  <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3 text-center hover:bg-cyan-500/20 transition-colors">
                    <div className="text-lg mb-1">🚀</div>
                    <div className="text-caption text-cyan-400">Fast</div>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center hover:bg-green-500/20 transition-colors">
                    <div className="text-lg mb-1">🌟</div>
                    <div className="text-caption text-green-400">Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}