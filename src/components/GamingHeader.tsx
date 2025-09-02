import { useState } from "react";

export function GamingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900/95 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Gaming Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">⚡</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-white text-xl">GamerPortfolio</h1>
              <div className="text-xs text-cyan-400">Level 99 Developer</div>
            </div>
          </div>
          
          {/* Gaming Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="relative text-gray-300 hover:text-cyan-400 transition-colors group">
              <span className="relative z-10">HOME</span>
              <div className="absolute inset-0 bg-cyan-400/10 rounded px-3 py-1 scale-0 group-hover:scale-100 transition-transform"></div>
            </a>
            <a href="#about" className="relative text-gray-300 hover:text-purple-400 transition-colors group">
              <span className="relative z-10">ABOUT</span>
              <div className="absolute inset-0 bg-purple-400/10 rounded px-3 py-1 scale-0 group-hover:scale-100 transition-transform"></div>
            </a>
            <a href="#skills" className="relative text-gray-300 hover:text-green-400 transition-colors group">
              <span className="relative z-10">SKILLS</span>
              <div className="absolute inset-0 bg-green-400/10 rounded px-3 py-1 scale-0 group-hover:scale-100 transition-transform"></div>
            </a>
            <a href="#projects" className="relative text-gray-300 hover:text-yellow-400 transition-colors group">
              <span className="relative z-10">PROJECTS</span>
              <div className="absolute inset-0 bg-yellow-400/10 rounded px-3 py-1 scale-0 group-hover:scale-100 transition-transform"></div>
            </a>
            <a href="#blog" className="relative text-gray-300 hover:text-pink-400 transition-colors group">
              <span className="relative z-10">BLOG</span>
              <div className="absolute inset-0 bg-pink-400/10 rounded px-3 py-1 scale-0 group-hover:scale-100 transition-transform"></div>
            </a>
          </nav>
          
          {/* Gaming CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              <span className="text-green-400">●</span> Online
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 py-2 rounded-lg transition-all transform hover:scale-105 relative overflow-hidden">
              <span className="relative z-10">CONNECT</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/20">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors">HOME</a>
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">ABOUT</a>
              <a href="#skills" className="text-gray-300 hover:text-green-400 transition-colors">SKILLS</a>
              <a href="#projects" className="text-gray-300 hover:text-yellow-400 transition-colors">PROJECTS</a>
              <a href="#blog" className="text-gray-300 hover:text-pink-400 transition-colors">BLOG</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}