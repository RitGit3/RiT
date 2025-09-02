const blogPosts = [
  {
    id: 1,
    title: "Building Real-time Gaming Applications",
    excerpt: "Exploring WebSocket implementation for multiplayer gaming experiences and real-time data synchronization.",
    date: "2025-01-20",
    readTime: "8 min read",
    category: "Development",
    difficulty: "Advanced",
    image: "🎮",
    color: "purple"
  },
  {
    id: 2,
    title: "The Future of Web Development",
    excerpt: "Discussing emerging technologies, AI integration, and the evolution of frontend frameworks.",
    date: "2025-01-15",
    readTime: "6 min read",
    category: "Technology",
    difficulty: "Intermediate",
    image: "🚀",
    color: "cyan"
  },
  {
    id: 3,
    title: "Optimizing React Performance",
    excerpt: "Best practices for React optimization, including memoization, lazy loading, and state management.",
    date: "2025-01-10",
    readTime: "10 min read",
    category: "React",
    difficulty: "Expert",
    image: "⚡",
    color: "green"
  },
  {
    id: 4,
    title: "UI/UX Design Principles",
    excerpt: "Creating intuitive user interfaces that enhance user experience and drive engagement.",
    date: "2025-01-05",
    readTime: "5 min read",
    category: "Design",
    difficulty: "Beginner",
    image: "🎨",
    color: "pink"
  }
];

export function GamingBlog() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Expert': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Advanced': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Development': return 'from-purple-500/20 to-purple-600/20 border-purple-500/30';
      case 'Technology': return 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30';
      case 'React': return 'from-green-500/20 to-green-600/20 border-green-500/30';
      case 'Design': return 'from-pink-500/20 to-pink-600/20 border-pink-500/30';
      default: return 'from-gray-500/20 to-gray-600/20 border-gray-500/30';
    }
  };

  return (
    <section id="blog" className="py-20 bg-gray-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-full mb-6">
            <span className="text-sm uppercase tracking-wider">Knowledge Base</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            BLOG <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">POSTS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sharing insights, tutorials, and experiences from my development journey.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article key={post.id} className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-green-600/20 to-cyan-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Blog Card */}
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                
                {/* Post Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(post.category)} border rounded-lg flex items-center justify-center text-2xl`}>
                      {post.image}
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{post.category}</div>
                      <div className="text-gray-500 text-xs">{post.date}</div>
                    </div>
                  </div>
                  <div className={`${getDifficultyColor(post.difficulty)} border px-3 py-1 rounded-full text-xs uppercase tracking-wider`}>
                    {post.difficulty}
                  </div>
                </div>

                {/* Post Content */}
                <h3 className="text-xl text-white mb-4 group-hover:text-green-400 transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Post Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="mr-4">⏱️ {post.readTime}</span>
                    <span>👀 {Math.floor(Math.random() * 500) + 100} views</span>
                  </div>
                  <button className="text-green-400 hover:text-green-300 transition-colors flex items-center text-sm">
                    Read More
                    <span className="ml-2">→</span>
                  </button>
                </div>

                {/* Achievement Badge */}
                {index === 0 && (
                  <div className="absolute -top-3 -right-3 bg-yellow-500 text-yellow-900 p-2 rounded-full text-xs">
                    🔥
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl text-white mb-4">Join the Guild!</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to get the latest posts, tutorials, and development insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800/50 border border-gray-600/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500/50 transition-colors"
              />
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}