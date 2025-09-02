import { Button } from "./ui/button";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export function ModernHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0 lg:pr-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
              <span className="text-sm">✨ Welcome to ModernWeb</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl mb-6 text-gray-900 leading-tight">
              Build Amazing
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Create stunning websites and applications with our modern design system. 
              Fast, responsive, and built for the future of web development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                Start Building
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3">
                View Portfolio
              </Button>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="relative max-w-lg mx-auto">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl transform -rotate-3 opacity-20"></div>
              
              {/* Main content area */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <h3 className="text-xl text-gray-800 mb-2">Modern Design</h3>
                  <p className="text-gray-600">Clean, responsive, and user-friendly interfaces</p>
                  
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="bg-blue-100 rounded-lg p-3 text-center">
                      <div className="text-2xl mb-1">⚡</div>
                      <div className="text-xs text-gray-600">Fast</div>
                    </div>
                    <div className="bg-purple-100 rounded-lg p-3 text-center">
                      <div className="text-2xl mb-1">📱</div>
                      <div className="text-xs text-gray-600">Mobile</div>
                    </div>
                    <div className="bg-pink-100 rounded-lg p-3 text-center">
                      <div className="text-2xl mb-1">🎨</div>
                      <div className="text-xs text-gray-600">Beautiful</div>
                    </div>
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