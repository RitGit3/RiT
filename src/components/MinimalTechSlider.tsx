const technologies = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#000000" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "MongoDB", color: "#47A248" },
  { name: "AWS", color: "#FF9900" },
  { name: "Docker", color: "#2496ED" },
  { name: "Git", color: "#F05032" },
];

export function MinimalTechSlider() {
  return (
    <section className="py-16 border-y border-gray-800">
      <div className="container-content px-6 mx-auto">
        <div className="text-center mb-12">
          <span className="text-caption text-gray-400 mb-4 block">Technologies</span>
          <h2 className="text-heading-2 text-white">
            Tools I work with
          </h2>
        </div>

        {/* Simple Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="card p-6 text-center group hover:border-gray-600 transition-colors"
            >
              <div className="text-body text-white group-hover:text-purple-400 transition-colors">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}