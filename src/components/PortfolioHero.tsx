import { useState, useEffect } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

interface PortfolioHeroProps {
  onNavigateToPayment?: () => void;
}

export function PortfolioHero({ onNavigateToPayment }: PortfolioHeroProps = {}) {
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Full-Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Tech Innovator"
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-content px-6 mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Status Badge */}
          <div className="inline-flex items-center mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-caption text-green-400">Available for New Opportunities</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-display text-white mb-6">
            Hi, I'm <span className="text-blue-400">Rith</span>
          </h1>
          
          {/* Dynamic Role */}
          <div className="text-heading-2 text-gray-400 mb-8 h-12">
            <span className="text-blue-400 text-code">{">"} </span>
            {typedText}
            <span className="animate-pulse text-blue-400">|</span>
          </div>
          
          {/* Value Proposition */}
          <p className="text-body-large text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            I create innovative digital solutions that <span className="text-blue-400 font-medium">drive business growth</span>. 
            Specializing in modern web development, UI/UX design, and scalable software architecture.
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-heading-3 text-white font-bold">25+</div>
              <div className="text-body-small text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-heading-3 text-white font-bold">5+</div>
              <div className="text-body-small text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-heading-3 text-white font-bold">100%</div>
              <div className="text-body-small text-gray-400">Client Satisfaction</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 font-medium flex items-center justify-center"
            >
              View My Work
              <ArrowRight size={20} className="ml-2" />
            </button>
            
            <button 
              onClick={onNavigateToPayment}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 font-medium flex items-center justify-center"
            >
              View Services & Pricing
              <ArrowRight size={20} className="ml-2" />
            </button>
            
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'public/resume.pdf';
                link.download = 'Rith.resume.pdf';
                link.click();
              }}
              className="border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 font-medium flex items-center justify-center backdrop-blur-sm"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/RiTGit3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors p-2"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors p-2"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:theariththeman@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors p-2"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}