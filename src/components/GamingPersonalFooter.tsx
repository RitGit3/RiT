export function GamingPersonalFooter() {
  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: '#', color: 'text-gray-400 hover:text-white' },
    { name: 'LinkedIn', icon: '💼', url: '#', color: 'text-blue-400 hover:text-blue-300' },
    { name: 'Twitter', icon: '🐦', url: '#', color: 'text-cyan-400 hover:text-cyan-300' },
    { name: 'Discord', icon: '🎮', url: '#', color: 'text-purple-400 hover:text-purple-300' },
    { name: 'Email', icon: '📧', url: '#', color: 'text-green-400 hover:text-green-300' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-black border-t border-purple-500/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 left-20 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-white text-xl">GamerPortfolio</h3>
                <div className="text-xs text-cyan-400">Level 99 Developer</div>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Crafting digital experiences through code, design, and creativity. 
              Always ready for the next challenge and eager to collaborate on exciting projects.
            </p>

            {/* Gaming Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-800/50 border border-purple-500/20 rounded p-3 text-center">
                <div className="text-lg text-cyan-400">50+</div>
                <div className="text-xs text-gray-400">Projects</div>
              </div>
              <div className="bg-gray-800/50 border border-purple-500/20 rounded p-3 text-center">
                <div className="text-lg text-green-400">3+</div>
                <div className="text-xs text-gray-400">Years</div>
              </div>
              <div className="bg-gray-800/50 border border-purple-500/20 rounded p-3 text-center">
                <div className="text-lg text-yellow-400">∞</div>
                <div className="text-xs text-gray-400">Learning</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-6 flex items-center">
              <span className="mr-2">🔗</span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">▶</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-white mb-6 flex items-center">
              <span className="mr-2">🌐</span>
              Connect
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`flex items-center space-x-3 ${social.color} transition-colors group`}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                  <span className="text-sm">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Bar */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="bg-gray-800/50 border border-purple-500/20 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Currently Working On</span>
              <span className="text-cyan-400 text-sm">Next Level: 85%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-purple-600 to-cyan-600 h-2 rounded-full w-[85%] animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 GamerPortfolio. All rights reserved. Built with React & Tailwind CSS.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Status:</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">Available for hire</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}