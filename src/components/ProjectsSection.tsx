import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce solution with advanced features and seamless user experience",
    tech: ["React", "Node.js", "MongoDB"],
    status: "Completed"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Secure and intuitive banking application with biometric authentication",
    tech: ["React Native", "TypeScript", "Redux"],
    status: "In Progress"
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    description: "Analytics dashboard for SaaS companies with real-time data visualization",
    tech: ["Next.js", "D3.js", "Tailwind"],
    status: "Completed"
  },
  {
    id: 4,
    title: "Learning Management System",
    category: "Web Development",
    description: "Educational platform with interactive courses and progress tracking",
    tech: ["Vue.js", "Laravel", "MySQL"],
    status: "Planning"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise 
            in web development, mobile apps, and digital solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="border-gray-200 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-500">
                      {project.category}
                    </CardDescription>
                  </div>
                  <Badge 
                    variant={project.status === 'Completed' ? 'default' : project.status === 'In Progress' ? 'secondary' : 'outline'}
                    className={
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-600'
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <div className="text-4xl mb-4">
                  {project.category.includes('Mobile') ? '📱' : 
                   project.category.includes('Design') ? '🎨' : '💻'}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50">
                    View Details
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}