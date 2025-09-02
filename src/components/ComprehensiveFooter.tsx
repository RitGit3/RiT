import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Youtube, 
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Heart,
  Code,
  Zap,
  Star
} from "lucide-react";

export function ComprehensiveFooter() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const serviceLinks = [
    { label: "Web Development", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
    { label: "Consulting", href: "#services" }
  ];

  const resourceLinks = [
    { label: "Blog", href: "#blog" },
    { label: "Case Studies", href: "#projects" },
    { label: "Tech Stack", href: "#tech" },
    { label: "Process", href: "#process" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Disclaimer", href: "/disclaimer" }
  ];

  const socialLinks = [
    { 
      name: "GitHub", 
      href: "https://github.com/promhaksoksothearith", 
      icon: Github,
      handle: "@promhaksoksothearith"
    },
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com/in/promhaksoksothearith", 
      icon: Linkedin,
      handle: "/in/promhaksoksothearith"
    },
    { 
      name: "YouTube", 
      href: "https://youtube.com/@promhaksoksothearith", 
      icon: Youtube,
      handle: "@promhaksoksothearith"
    },
    { 
      name: "Instagram", 
      href: "https://instagram.com/promhaksoksothearith", 
      icon: Instagram,
      handle: "@promhaksoksothearith"
    },
    { 
      name: "Discord", 
      href: "https://discord.gg/promhaksoksothearith", 
      icon: MessageCircle,
      handle: "promhaksoksothearith#0001"
    }
  ];

  const achievements = [
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "25+" },
    { label: "Years Experience", value: "3+" },
    { label: "Response Time", value: "24h" }
  ];

  return (
    <footer className="relative bg-gray-900 border-t border-gray-800">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -top-40 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-40 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-content px-6 mx-auto pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand & Description */}
            <div className="lg:col-span-1 space-y-6">
              {/* Logo */}
              <div className="flex items-center">
                <div className="gaming-border w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <div>
                  <div className="text-heading-3 text-white font-bold">RiT</div>
                  <div className="text-body-small text-gray-400">Full-Stack Developer</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-body text-gray-300 leading-relaxed max-w-sm">
                Crafting exceptional digital experiences from Cambodia. 
                Specializing in modern web applications that drive real business results.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-body-small text-gray-400">
                  <MapPin size={16} className="mr-3 text-purple-400 flex-shrink-0" />
                  <span>Phnom Penh, Cambodia 🇰🇭</span>
                </div>
                <div className="flex items-center text-body-small text-gray-400">
                  <Mail size={16} className="mr-3 text-cyan-400 flex-shrink-0" />
                  <a href="mailto:promhak.dev@gmail.com" className="hover:text-white transition-colors">
                    promhak.dev@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-body-small text-gray-400">
                  <Phone size={16} className="mr-3 text-green-400 flex-shrink-0" />
                  <a href="tel:+85512345678" className="hover:text-white transition-colors">
                    +855 12 345 678
                  </a>
                </div>
              </div>

              {/* Availability Status */}
              <div className="flex items-center bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-body-small text-green-400 font-medium">Available for new projects</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-heading-3 text-white font-semibold">Quick Links</h4>
              <div className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-body text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <h5 className="text-body text-white font-medium pt-4">Services</h5>
              <div className="space-y-3">
                {serviceLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-body text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Resources & Legal */}
            <div className="space-y-6">
              <h4 className="text-heading-3 text-white font-semibold">Resources</h4>
              <div className="space-y-3">
                {resourceLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-body text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <h5 className="text-body text-white font-medium pt-4">Legal</h5>
              <div className="space-y-3">
                {legalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-body-small text-gray-400 hover:text-gray-300 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Social & Stats */}
            <div className="space-y-6">
              <h4 className="text-heading-3 text-white font-semibold">Connect</h4>
              
              {/* Social Links */}
              <div className="space-y-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-body-small text-gray-400 hover:text-white transition-colors duration-200 group"
                    >
                      <IconComponent 
                        size={16} 
                        className="mr-3 text-purple-400 group-hover:text-purple-300 transition-colors flex-shrink-0" 
                      />
                      <div>
                        <div className="font-medium">{social.name}</div>
                        <div className="text-xs text-gray-500">{social.handle}</div>
                      </div>
                      <ExternalLink size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  );
                })}
              </div>

              {/* Mini Stats */}
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4 space-y-3">
                <h5 className="text-body text-white font-medium flex items-center">
                  <Star size={16} className="mr-2 text-yellow-400" />
                  Quick Stats
                </h5>
                <div className="grid grid-cols-2 gap-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-body text-white font-bold">{achievement.value}</div>
                      <div className="text-caption text-gray-400">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50">
          <div className="container-content px-6 mx-auto py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* Copyright */}
              <div className="flex items-center text-body-small text-gray-400">
                <span>© {currentYear} RiT (Promhak Soksothearith). Made with</span>
                <Heart size={14} className="mx-1 text-red-400 fill-current" />
                <span>in Cambodia</span>
                <span className="ml-1">🇰🇭</span>
              </div>

              {/* Tech Badge */}
              <div className="flex items-center text-body-small text-gray-400">
                <Code size={14} className="mr-2 text-cyan-400" />
                <span>Built with React + Tailwind CSS</span>
                <Zap size={14} className="ml-2 text-yellow-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group z-50"
          aria-label="Scroll to top"
        >
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-white group-hover:transform group-hover:-translate-y-0.5 transition-transform"></div>
        </button>
      </div>
    </footer>
  );
}