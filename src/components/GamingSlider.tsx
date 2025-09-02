import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";

const sliderImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1723792306904-c417c0da40e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTYzMDY2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Gaming Workspace",
    description: "My ultimate development and gaming setup"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1615511676712-df98fcc708d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBuZW9uJTIwbGlnaHRzfGVufDF8fHx8MTc1NjMwMzgwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Cyberpunk Vibes",
    description: "Inspired by neon aesthetics and future tech"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1672581437674-3186b17b405a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTYyODUyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Future Technology",
    description: "Exploring cutting-edge tech and innovation"
  }
];

export function GamingSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full mb-6">
            <span className="text-sm uppercase tracking-wider">Media Gallery</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            VISUAL <span className="bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">SHOWCASE</span>
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Main Slider Container */}
            <div className="relative bg-gray-800/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl overflow-hidden">
              
              {/* Image Container */}
              <div className="relative h-96 md:h-[500px] overflow-hidden">
                <ImageWithFallback
                  src={sliderImages[currentIndex].url}
                  alt={sliderImages[currentIndex].title}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-2xl text-white mb-2">{sliderImages[currentIndex].title}</h3>
                      <p className="text-gray-300">{sliderImages[currentIndex].description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400 mb-1">
                        {currentIndex + 1} / {sliderImages.length}
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
                        <span className="text-xs text-gray-400">
                          {isAutoPlaying ? 'AUTO' : 'MANUAL'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700/80 border border-purple-500/30 text-white p-3 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                >
                  <span className="text-xl">←</span>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700/80 border border-purple-500/30 text-white p-3 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                >
                  <span className="text-xl">→</span>
                </button>
              </div>
              
              {/* Bottom Controls */}
              <div className="bg-gray-800/90 p-6">
                <div className="flex items-center justify-between">
                  {/* Thumbnail Navigation */}
                  <div className="flex space-x-3">
                    {sliderImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentIndex(index);
                          setIsAutoPlaying(false);
                        }}
                        className={`w-12 h-8 rounded border-2 transition-all ${
                          index === currentIndex
                            ? 'border-cyan-400 bg-cyan-400/20'
                            : 'border-gray-600 hover:border-gray-500'
                        }`}
                      >
                        <div className={`w-full h-full rounded-sm ${
                          index === currentIndex ? 'bg-cyan-400/30' : 'bg-gray-600/30'
                        }`}></div>
                      </button>
                    ))}
                  </div>
                  
                  {/* Play/Pause Control */}
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 text-purple-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 px-4 py-2 rounded-lg transition-all flex items-center space-x-2"
                  >
                    <span>{isAutoPlaying ? '⏸️' : '▶️'}</span>
                    <span className="text-sm">{isAutoPlaying ? 'Pause' : 'Play'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}