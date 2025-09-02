import { ImageWithFallback } from "./figma/ImageWithFallback";

export function GamingPersonalHero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
            {/* Status Badge */}
            <div className="inline-flex items-center bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm uppercase tracking-wider">Available for Projects</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl lg:text-7xl mb-6 text-white leading-tight">
              <span className="block">HELLO, I'M</span>
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Rith
              </span>
            </h1>
            
            {/* Subtitle with Typing Effect */}
            <div className="text-xl lg:text-2xl text-gray-300 mb-8">
              <span className="text-cyan-400">&gt;</span> Full Stack Developer
              <span className="animate-pulse">|</span>
            </div>
            
            {/* Description */}
            <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Crafting digital experiences through code, design, and creativity. 
              Specializing in modern web technologies and bringing ideas to life.
            </p>
            
            {/* Gaming Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-800/50 border border-purple-500/20 rounded-lg p-4 text-center">
                <div className="text-2xl text-cyan-400 mb-1">50+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Projects</div>
              </div>
              <div className="bg-gray-800/50 border border-purple-500/20 rounded-lg p-4 text-center">
                <div className="text-2xl text-green-400 mb-1">3+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Years Exp</div>
              </div>
              <div className="bg-gray-800/50 border border-purple-500/20 rounded-lg p-4 text-center">
                <div className="text-2xl text-yellow-400 mb-1">99%</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Success Rate</div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 relative overflow-hidden group">
                <span className="relative z-10 flex items-center justify-center">
                  <span className="mr-2">🚀</span>
                  VIEW PROJECTS
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              <button className="border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-4 rounded-lg transition-all hover:border-purple-400">
                <span className="flex items-center justify-center">
                  <span className="mr-2">📄</span>
                  DOWNLOAD CV
                </span>
              </button>
            </div>
          </div>
          
          {/* Right Content - Gaming Card */}
          <div className="flex-1 max-w-lg">
            <div className="relative">
              {/* Glow Effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-3xl blur-lg"></div>
              
              {/* Main Gaming Card */}
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center">
                {/* Profile Image */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="w-full h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full p-1">
                    <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center text-4xl">
                      👨‍💻
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                    LVL 99
                  </div>
                </div>
                
                {/* Gaming Info */}
                <h3 className="text-xl text-white mb-2">Player Stats</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Coding Skills</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Creativity</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Problem Solving</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Achievement Badges */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-yellow-500/20 border border-yellow-500/30 rounded p-2 text-center">
                    <div className="text-lg">🏆</div>
                    <div className="text-xs text-yellow-400">Expert</div>
                  </div>
                  <div className="bg-purple-500/20 border border-purple-500/30 rounded p-2 text-center">
                    <div className="text-lg">💎</div>
                    <div className="text-xs text-purple-400">Premium</div>
                  </div>
                  <div className="bg-cyan-500/20 border border-cyan-500/30 rounded p-2 text-center">
                    <div className="text-lg">⚡</div>
                    <div className="text-xs text-cyan-400">Fast</div>
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