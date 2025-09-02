import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export function GamingHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background particles effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-40 w-2 h-2 bg-cyan-300 rounded-full animate-ping"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
          <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0">
            🎮 Level Up Your Gaming Experience
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Epic Gaming
            <br />
            <span className="text-white">Adventures</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl">
            Discover the latest games, join epic tournaments, and connect with gamers worldwide. Your next gaming adventure starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 px-8 py-3">
              🚀 Start Gaming
            </Button>
            <Button size="lg" variant="outline" className="border-gray-400 text-gray-300 hover:bg-gray-800 px-8 py-3">
              📺 Watch Trailer
            </Button>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <div className="relative w-full max-w-md mx-auto lg:max-w-lg">
            {/* Gaming controller illustration */}
            <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="text-8xl lg:text-9xl">🎮</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}