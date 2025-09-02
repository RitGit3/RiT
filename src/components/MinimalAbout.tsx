import { CheckCircle2 } from "lucide-react";

export function MinimalAbout() {
  const services = [
    "Full-Stack Web Development",
    "React & Next.js Applications", 
    "Node.js & API Development",
    "UI/UX Design & Prototyping",
    "E-commerce Solutions",
    "Performance Optimization"
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", 
    "Python", "PostgreSQL", "MongoDB", "AWS"
  ];

  return (
    <section id="about" className="py-32 bg-gray-800/50">
      <div className="container-content px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="text-caption text-purple-400 mb-4 block">About</span>
              <h2 className="text-heading-1 text-white mb-6">
                Building digital solutions that matter
              </h2>
            </div>
            
            <div className="space-y-6 mb-12">
              <p className="text-body text-gray-300">
                I'm a full-stack developer from Cambodia with 3+ years of experience 
                creating web applications that solve real business problems.
              </p>
              
              <p className="text-body text-gray-300">
                I specialize in React, Node.js, and modern web technologies. 
                My focus is on writing clean, maintainable code and delivering 
                exceptional user experiences.
              </p>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h3 className="text-heading-3 text-white mb-6">What I do</h3>
              <div className="grid gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 size={20} className="text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-body text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button className="btn-primary">
              Let's Work Together
            </button>
          </div>

          {/* Technologies */}
          <div>
            <div className="mb-8">
              <h3 className="text-heading-3 text-white mb-6">Technologies I use</h3>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="card p-4 text-center">
                    <span className="text-body text-white">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Highlight */}
            <div className="card p-8">
              <h4 className="text-heading-3 text-white mb-4">Experience</h4>
              <div className="space-y-4">
                <div>
                  <div className="text-body text-white font-medium">Full-Stack Developer</div>
                  <div className="text-body-small text-gray-400">Freelance • 2021 - Present</div>
                  <div className="text-body-small text-gray-300 mt-2">
                    Delivered 50+ projects for clients worldwide
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}