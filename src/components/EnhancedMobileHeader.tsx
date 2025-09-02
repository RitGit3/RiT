import { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  Home,
  User, 
  Briefcase, 
  Mail, 
  Github, 
  Linkedin, 
  Youtube, 
  Instagram, 
  MessageCircle,
  ExternalLink,
  MapPin,
  Phone,
  Clock,
  Zap
} from "lucide-react";

export function EnhancedMobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/promhaksoksothearith", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/promhaksoksothearith", icon: Linkedin },
    { name: "YouTube", href: "https://youtube.com/@promhaksoksothearith", icon: Youtube },
    { name: "Instagram", href: "https://instagram.com/promhaksoksothearith", icon: Instagram },
    { name: "Discord", href: "https://discord.gg/promhaksoksothearith", icon: MessageCircle },
  ];

  const quickActions = [
    { 
      label: "Download CV", 
      action: () => {
        // Add download CV logic
        console.log("Download CV");
        setIsMenuOpen(false);
      },
      className: "btn-secondary text-sm"
    },
    { 
      label: "Hire Me", 
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      },
      className: "btn-primary text-sm"
    }
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' 
          : 'bg-transparent'
      }`}>
        <div className="container-content px-6 mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="gaming-border w-8 h-8 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-white font-semibold">RiT</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-gray-300 hover:text-white transition-colors text-body"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            
            {/* CTA Button */}
            <div className="hidden lg:block">
              <button className="btn-primary text-sm px-6 py-2">
                Hire Me
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-300 hover:text-white transition-colors relative z-60"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-6 h-6">
                <div className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100'
                }`}>
                  <Menu size={24} />
                </div>
                <div className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-45 opacity-0'
                }`}>
                  <X size={24} />
                </div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`} onClick={() => setIsMenuOpen(false)} />

      {/* Mobile/Tablet Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-96 max-w-[85vw] bg-gray-900/95 backdrop-blur-md border-l border-gray-800 z-50 lg:hidden transform transition-transform duration-300 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
            <div className="flex items-center">
              <div className="gaming-border w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">R</span>
              </div>
              <div>
                <div className="text-body text-white font-semibold">RiT</div>
                <div className="text-body-small text-gray-400">Full-Stack Developer</div>
              </div>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-400 hover:text-white transition-colors p-2"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* User Status */}
          <div className="p-6 border-b border-gray-800/50">
            <div className="flex items-center bg-green-500/10 border border-green-500/20 rounded-lg p-3 mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-body-small text-green-400 font-medium">Available for projects</span>
            </div>
            
            <div className="space-y-2 text-body-small text-gray-400">
              <div className="flex items-center">
                <MapPin size={14} className="mr-2 text-purple-400" />
                <span>Phnom Penh, Cambodia</span>
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-2 text-cyan-400" />
                <span>Responds within 24h</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 px-6 py-4">
            <nav className="space-y-2">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a 
                    key={item.name}
                    href={item.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center text-body text-gray-300 hover:text-white hover:bg-gray-800/50 px-4 py-3 rounded-lg transition-all duration-200 group"
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      animation: isMenuOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
                    }}
                  >
                    <IconComponent size={18} className="mr-3 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    <span className="font-medium">{item.name}</span>
                    <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </nav>

            {/* Quick Actions */}
            <div className="mt-8">
              <h5 className="text-body-small text-gray-500 font-medium mb-3 px-4">Quick Actions</h5>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className={`w-full ${action.className} justify-center`}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Quick Access */}
            <div className="mt-8">
              <h5 className="text-body-small text-gray-500 font-medium mb-3 px-4">Contact</h5>
              <div className="space-y-2">
                <a 
                  href="mailto:promhak.dev@gmail.com"
                  className="flex items-center text-body-small text-gray-400 hover:text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Mail size={16} className="mr-3 text-cyan-400" />
                  <span>promhak.dev@gmail.com</span>
                </a>
                <a 
                  href="tel:+85512345678"
                  className="flex items-center text-body-small text-gray-400 hover:text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Phone size={16} className="mr-3 text-green-400" />
                  <span>+855 12 345 678</span>
                </a>
              </div>
            </div>
          </div>

          {/* Social Links & Footer */}
          <div className="border-t border-gray-800/50 p-6">
            <h5 className="text-body-small text-gray-500 font-medium mb-3">Follow Me</h5>
            <div className="grid grid-cols-5 gap-2 mb-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-800/50 hover:bg-purple-600/20 rounded-lg transition-colors group"
                    aria-label={social.name}
                  >
                    <IconComponent 
                      size={16} 
                      className="text-gray-400 group-hover:text-purple-400 transition-colors" 
                    />
                  </a>
                );
              })}
            </div>
            
            <div className="text-center text-body-small text-gray-500">
              <div className="flex items-center justify-center mb-1">
                <span>Made with</span>
                <span className="text-red-400 mx-1">♥</span>
                <span>in Cambodia</span>
                <span className="ml-1">🇰🇭</span>
              </div>
              <div className="flex items-center justify-center text-xs">
                <Zap size={12} className="mr-1 text-yellow-400" />
                <span>Powered by React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}