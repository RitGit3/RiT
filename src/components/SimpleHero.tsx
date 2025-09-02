export function SimpleHero() {
  return (
    <section id="home" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl mb-6 text-black">
            Rith
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Description about yourself goes here
          </p>
          <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-8">
            {/* Profile image placeholder */}
          </div>
          <button className="bg-purple-600 text-white px-8 py-3 rounded hover:bg-purple-700 transition-colors">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}