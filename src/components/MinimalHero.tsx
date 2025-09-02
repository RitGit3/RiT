import { useState, useEffect } from "react";
import { ArrowRight, Mail } from "lucide-react";

export function MinimalHero() {
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [showKhmerName, setShowKhmerName] = useState(false);
  
  const roles = [
    "Full-Stack Developer",
    "React Specialist", 
    "Node.js Expert",
    "UI/UX Designer"
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
    <section id="home" className="min-h-screen flex items-center py-32">
      <div className="container-content px-6 mx-auto">
        <div className="max-w-4xl">
          
          {/* Status */}
          <div className="flex items-center mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-caption text-green-400">Available for Projects</span>
          </div>
          
          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="text-display text-white mb-6">
              <div className="mb-4">I'm</div>
              <div className="relative h-20 overflow-hidden">
                <div className={`absolute inset-0 transition-all duration-1000 ${
                  showKhmerName ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                }`}>
                  <span className="text-purple-400 font-khmer block">
                    ព្រុំហាក់ សុខសុធារិទ្ធិ
                  </span>
                </div>
                <div className={`absolute inset-0 transition-all duration-1000 ${
                  !showKhmerName ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}>
                  <span className="text-purple-400 block">
                    Promhak Soksothearith
                  </span>
                </div>
              </div>
            </h1>
            
            {/* Dynamic Role */}
            <div className="text-heading-2 text-gray-400 mb-8">
              {typedText}<span className="animate-pulse text-cyan-400">|</span>
            </div>
          </div>
          
          {/* Value Proposition */}
          <div className="mb-12">
            <p className="text-body-large text-gray-300 mb-8 max-w-2xl">
              I help businesses build modern web applications that drive results. 
              From concept to deployment, I deliver clean code and exceptional user experiences.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 mb-12">
              <div>
                <div className="text-heading-3 text-white">50+</div>
                <div className="text-body-small text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-heading-3 text-white">3+</div>
                <div className="text-body-small text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-heading-3 text-white">24h</div>
                <div className="text-body-small text-gray-400">Response Time</div>
              </div>
            </div>
          </div>
          
          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
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
      </div>
    </section>
  );
}