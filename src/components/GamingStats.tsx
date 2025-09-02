const stats = [
  { label: "Active Players", value: "50M+", icon: "👥" },
  { label: "Games Available", value: "1,500+", icon: "🎮" },
  { label: "Tournaments", value: "500+", icon: "🏆" },
  { label: "Prize Pools", value: "$2M+", icon: "💰" }
];

export function GamingStats() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6 text-white">
            Gaming <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Statistics</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join millions of gamers in the ultimate gaming experience
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 group-hover:animate-bounce">
                {stat.icon}
              </div>
              <div className="text-3xl lg:text-4xl mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-300 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}