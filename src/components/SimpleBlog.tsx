const blogPosts = [
  {
    id: 1,
    title: "Blog Post Title 1",
    excerpt: "This is a preview of your blog post content. Write a brief summary here to give readers an idea of what the post is about.",
    date: "January 15, 2025",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Blog Post Title 2",
    excerpt: "This is a preview of your blog post content. Write a brief summary here to give readers an idea of what the post is about.",
    date: "January 10, 2025",
    readTime: "3 min read"
  },
  {
    id: 3,
    title: "Blog Post Title 3",
    excerpt: "This is a preview of your blog post content. Write a brief summary here to give readers an idea of what the post is about.",
    date: "January 5, 2025",
    readTime: "7 min read"
  }
];

export function SimpleBlog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-black">
          Blog
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="border-b border-gray-200 pb-8 last:border-b-0">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              
              <h3 className="text-2xl mb-3 text-black hover:text-purple-600 transition-colors cursor-pointer">
                {post.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <button className="text-purple-600 hover:text-purple-700 transition-colors">
                Read More →
              </button>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-purple-600 text-white px-8 py-3 rounded hover:bg-purple-700 transition-colors">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
}