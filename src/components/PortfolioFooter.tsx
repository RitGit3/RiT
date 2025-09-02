import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function PortfolioFooter() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container-content px-6 mx-auto py-12">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand & Description */}
          <div>
            <h3 className="text-heading-3 text-white mb-4">Rith</h3>
            <p className="text-body-small text-gray-400 mb-4">
              Full-Stack Developer & UI/UX Designer passionate about creating 
              innovative digital solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/RitGit3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:theariththeman@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-heading-3 text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-heading-3 text-white mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <a 
                href="mailto:your.email@example.com"
                className="block text-gray-400 hover:text-blue-400 transition-colors"
              >
                theariththeman@gmail.com
              </a>
              <a 
                href="tel:+15551234567"
                className="block text-gray-400 hover:text-blue-400 transition-colors"
              >
                +855 (011) 59-2229
              </a>
              <span className="block text-gray-400">
                Phnom Penh, Cambodia
              </span>
            </div>
            
            {/* Resume Download */}
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'public/resume.pdf';
                link.download = 'Rith.resume.pdf';
                link.click();
              }}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
            >
              Download Resume
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-body-small text-gray-400 mb-4 md:mb-0">
              © {currentYear} RiT. All rights reserved.
            </p>
            <p className="text-body-small text-gray-400 flex items-center">
              Made with <Heart size={16} className="text-red-400 mx-1" /> and lots of coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}