import { Heart, Github, Linkedin, Youtube, Instagram, MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export function UpdatedGamingPersonalFooter() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-gray-300' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-400' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { name: 'Discord', icon: MessageCircle, href: '#', color: 'hover:text-indigo-400' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Web Development',
    'UI/UX Design',
    'Mobile Apps',
    'Game Development',
    'E-commerce',
    'Consulting'
  ];

  return (
    <footer className="bg-gray-900 border-t border-purple-500/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8 sm:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">R</span>
              </div>
              <div>
                <h3 className="text-white text-2xl font-bold tracking-wider">RiT</h3>
                <p className="text-cyan-400 text-sm">Promhak Soksothearith</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Passionate full-stack developer from Cambodia 🇰🇭, crafting digital experiences 
              through innovative code and creative design. Let's build something amazing together!
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={16} className="text-cyan-400" />
                <span>Phnom Penh, Cambodia</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={16} className="text-cyan-400" />
                <span>contact@rit-portfolio.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={16} className="text-cyan-400" />
                <span>+855 XX XXX XXXX</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 ${social.color} hover:border-purple-500/50 transition-all hover:scale-110`}
                    title={social.name}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-6">Services</h4>
            <div className="space-y-3">
              {services.map((service) => (
                <div key={service} className="text-gray-400">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-purple-600/10 to-cyan-600/10 border border-purple-500/30 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div>
                <h4 className="text-white text-xl mb-2">Stay Updated</h4>
                <p className="text-gray-400">Get notified about my latest projects and articles</p>
              </div>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800/50 border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                />
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 py-2 rounded-lg transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="text-gray-400 text-sm text-center sm:text-left">
            <p>© 2024 RiT Portfolio. Made with <Heart size={16} className="inline text-red-400 mx-1" /> in Cambodia</p>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}