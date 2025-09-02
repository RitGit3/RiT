import { Code, Palette, Zap, Users, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function PortfolioAbout() {
  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express"]
    },
    {
      category: "Tools & Others",
      technologies: ["Git", "Docker", "AWS", "Figma", "REST APIs"]
    }
  ];

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code following industry best practices."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces with a focus on user experience and accessibility."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and excellent user experience."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams using Agile methodologies and modern development workflows."
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="container-content px-6 mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-heading-1 text-white mb-6">About Me</h2>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-body-large">
                I'm a passionate <span className="text-blue-400 font-medium">Full-Stack Developer</span> with 
                over 5 years of experience creating digital solutions that make a difference. I specialize in 
                modern web technologies and have a keen eye for design.
              </p>
              
              <p className="text-body">
                My journey started with a Computer Science degree, and I've since worked with startups and 
                established companies, delivering high-quality software solutions. I'm particularly interested 
                in <span className="text-blue-400 font-medium">React ecosystem, cloud technologies, and user-centered design</span>.
              </p>
              
              <p className="text-body">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Resume Download */}
            <div className="mt-8">
              <button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = 'public/resume.pdf';
                  link.download = 'Rith.resume.pdf';
                  link.click();
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 font-medium flex items-center"
              >
                <Download size={20} className="mr-2" />
                Download Full Resume
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1615285307672-09b361d7c61a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBzZXR1cHxlbnwxfHx8fDE3NTY2NDk3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Developer workspace"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/10"></div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h3 className="text-heading-2 text-white mb-12 text-center">Technical Skills</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skills.map((skillGroup, index) => (
              <div 
                key={skillGroup.category}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <h4 className="text-heading-3 text-white mb-4">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-blue-600/10 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mt-16">
          <h3 className="text-heading-2 text-white mb-12 text-center">What I Bring</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div 
                  key={highlight.title}
                  className="text-center group"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                    <IconComponent size={24} className="text-blue-400" />
                  </div>
                  <h4 className="text-heading-3 text-white mb-2">{highlight.title}</h4>
                  <p className="text-body-small text-gray-400">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}