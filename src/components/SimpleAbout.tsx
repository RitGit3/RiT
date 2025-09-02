export function SimpleAbout() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-black">
            About
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-64 bg-gray-200 rounded mb-6">
                {/* Image placeholder */}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl mb-4 text-black">Your Story</h3>
              <p className="text-gray-600 mb-4">
                Write about yourself here. This is where you can share your background, 
                experience, and what drives you.
              </p>
              <p className="text-gray-600 mb-6">
                Add more details about your skills, interests, and goals.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-purple-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Skill or Interest 1</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-purple-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Skill or Interest 2</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-purple-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Skill or Interest 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}