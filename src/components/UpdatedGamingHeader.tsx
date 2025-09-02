import { useState, useEffect } from "react";
import { Menu, X, Home, User, Code, BookOpen, Mail, Github, Linkedin, Youtube, Instagram, MessageCircle } from "lucide-react";

export function UpdatedGamingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: '#home', icon: Home },
    { name: 'ABOUT', href: '#about', icon: User },
    { name: 'PROJECTS', href: '#projects', icon: Code },
    { name: 'BLOG', href: '#blog', icon: BookOpen },
    { name: 'CONTACT', href: '#contact', icon: Mail },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-gray-300' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-400' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { name: 'Discord', icon: MessageCircle, href: '#', color: 'hover:text-indigo-400' },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-lg border-b border-purple-500/30 shadow-lg shadow-purple-500/10' 
          : 'bg-gray-900/80 backdrop-blur-md border-b border-purple-500/20'
      }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* RiT Logo */}
            <div className="flex items-center space-x-3 z-10">
              <div className="relative group cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                  <span className="text-white text-lg font-bold">R</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-white text-xl font-bold tracking-wider">RiT</h1>
                <div className="text-xs text-cyan-400">Level 99 Developer</div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.slice(0, -1).map((item) => (
                <a key={item.name} href={item.href} className="relative text-gray-300 hover:text-cyan-400 transition-colors group">
                  <span className="relative z-10 flex items-center space-x-2">
                    <item.icon size={16} />
                    <span>{item.name}</span>
                  </span>
                  <div className="absolute inset-0 bg-cyan-400/10 rounded px-3 py-1 scale-0 group-hover:scale-100 transition-transform"></div>
                </a>
              ))}
            </nav>
            
            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="text-sm text-gray-400">
                <span className="text-green-400">●</span> Online
              </div>
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 py-2 rounded-lg transition-all transform hover:scale-105 relative overflow-hidden group">
                <span className="relative z-10 flex items-center space-x-2">
                  <Mail size={16} />
                  <span>CONNECT</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-300 hover:text-white transition-colors p-2 relative z-10"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900/95 backdrop-blur-lg border-l border-purple-500/30 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg font-bold">R</span>
                </div>
                <div>
                  <h3 className="text-white font-bold tracking-wider">RiT</h3>
                  <div className="text-xs text-cyan-400">Level 99 Developer</div>
                </div>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400">Available for projects</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 p-6">
            <nav className="space-y-4 mb-8">
              {navItems.map((item, index) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors p-3 rounded-lg hover:bg-gray-800/50 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </a>
              ))}
            </nav>

            {/* Social Links */}
            <div className="border-t border-gray-800 pt-6">
              <h4 className="text-gray-400 text-sm mb-4 uppercase tracking-wider">Connect</h4>
              <div className="grid grid-cols-5 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 ${social.color} hover:border-purple-500/50 transition-all hover:scale-110`}
                    title={social.name}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
              <div className="mt-4 text-xs text-gray-500 text-center">
                Follow me on social media for updates
              </div>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-gray-800">
            <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-4 py-3 rounded-lg transition-all flex items-center justify-center space-x-2">
              <Mail size={16} />
              <span>Get In Touch</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}