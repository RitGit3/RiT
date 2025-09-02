import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { Play, Pause, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { AnimatedText } from "./hooks/useScrollAnimation";

const sliderImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1723792306904-c417c0da40e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTYzMDY2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Gaming Workspace",
    description: "My ultimate development and gaming setup with RGB lighting and multiple monitors",
    category: "Setup"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1615511676712-df98fcc708d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBuZW9uJTIwbGlnaHRzfGVufDF8fHx8MTc1NjMwMzgwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Cyberpunk Vibes",
    description: "Inspired by neon aesthetics and futuristic technology concepts",
    category: "Inspiration"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1672581437674-3186b17b405a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTYyODUyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Future Technology",
    description: "Exploring cutting-edge technology and innovative solutions",
    category: "Tech"
  }
];

export function EnhancedGamingSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [rgbColor, setRgbColor] = useState({ r: 139, g: 92, b: 246 });

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // RGB color cycling effect
  useEffect(() => {
    const colorCycle = setInterval(() => {
      const colors = [
        { r: 139, g: 92, b: 246 }, // Purple
        { r: 6, g: 182, b: 212 },   // Cyan
        { r: 16, g: 185, b: 129 },  // Green
        { r: 245, g: 158, b: 11 },  // Yellow
        { r: 236, g: 72, b: 153 },  // Pink
      ];
      setRgbColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 2000);

    return () => clearInterval(colorCycle);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
    setIsAutoPlaying(false);
  };

  const currentImage = sliderImages[currentIndex];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated RGB Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.3) 0%, transparent 70%)`
        }}
      />
      
      {/* Floating RGB Orbs */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl animate-pulse"
          style={{ 
            backgroundColor: `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.3)`,
            animationDuration: '3s'
          }}
        />
        <div 
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full blur-3xl animate-pulse"
          style={{ 
            backgroundColor: `rgba(${rgbColor.g}, ${rgbColor.b}, ${rgbColor.r}, 0.3)`,
            animationDuration: '4s',
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full blur-2xl animate-pulse"
          style={{ 
            backgroundColor: `rgba(${rgbColor.b}, ${rgbColor.r}, ${rgbColor.g}, 0.2)`,
            animationDuration: '5s',
            animationDelay: '2s'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <AnimatedText delay={0}>
            <div className="inline-flex items-center bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full mb-6">
              <Maximize2 size={16} className="mr-2" />
              <span className="text-sm uppercase tracking-wider">Media Showcase</span>
            </div>
          </AnimatedText>
          <AnimatedText delay={200}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              VISUAL <span className="bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">GALLERY</span>
            </h2>
          </AnimatedText>
          <AnimatedText delay={400}>
            <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
              Dive into my creative universe with this immersive gallery experience
            </p>
          </AnimatedText>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="relative group">
            {/* Dynamic RGB Glow Effect */}
            <div 
              className="absolute -inset-6 sm:-inset-8 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: `linear-gradient(45deg, 
                  rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.4), 
                  rgba(${rgbColor.g}, ${rgbColor.b}, ${rgbColor.r}, 0.4), 
                  rgba(${rgbColor.b}, ${rgbColor.r}, ${rgbColor.g}, 0.4))`
              }}
            />
            
            {/* Main Slider Container */}
            <div className="relative bg-gray-800/90 backdrop-blur-lg border border-purple-500/30 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              
              {/* Image Container */}
              <div className="relative h-64 sm:h-96 md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
                <ImageWithFallback
                  src={currentImage.url}
                  alt={currentImage.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-105"
                />
                
                {/* Dynamic Overlay Gradient */}
                <div 
                  className="absolute inset-0 transition-all duration-1000"
                  style={{
                    background: `linear-gradient(135deg, 
                      rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.1) 0%, 
                      transparent 50%, 
                      rgba(0, 0, 0, 0.8) 100%)`
                  }}
                />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                    <div className="mb-4 sm:mb-0">
                      <div className="flex items-center mb-2 sm:mb-3">
                        <span 
                          className="px-3 py-1 rounded-full text-xs sm:text-sm uppercase tracking-wider border"
                          style={{
                            backgroundColor: `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.2)`,
                            borderColor: `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.5)`,
                            color: `rgb(${Math.max(rgbColor.r, 200)}, ${Math.max(rgbColor.g, 200)}, ${Math.max(rgbColor.b, 200)})`
                          }}
                        >
                          {currentImage.category}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl text-white mb-2 sm:mb-3">{currentImage.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
                        {currentImage.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400 mb-1">
                        {currentIndex + 1} / {sliderImages.length}
                      </div>
                      <div className="flex items-center justify-end space-x-2">
                        <div className={`w-2 h-2 rounded-full transition-colors ${
                          isAutoPlaying 
                            ? 'animate-pulse' 
                            : ''
                        }`} style={{
                          backgroundColor: isAutoPlaying 
                            ? `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`
                            : 'rgb(156, 163, 175)'
                        }}></div>
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
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/90 hover:bg-gray-700/90 border border-purple-500/30 text-white p-2 sm:p-3 rounded-lg transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/90 hover:bg-gray-700/90 border border-purple-500/30 text-white p-2 sm:p-3 rounded-lg transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              
              {/* Bottom Controls */}
              <div className="bg-gray-800/95 backdrop-blur-sm p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                  {/* Thumbnail Navigation */}
                  <div className="flex space-x-2 sm:space-x-3">
                    {sliderImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentIndex(index);
                          setIsAutoPlaying(false);
                        }}
                        className={`w-10 sm:w-12 h-6 sm:h-8 rounded border-2 transition-all hover:scale-105 ${
                          index === currentIndex
                            ? 'border-opacity-100 shadow-lg'
                            : 'border-gray-600 hover:border-gray-500'
                        }`}
                        style={{
                          borderColor: index === currentIndex 
                            ? `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`
                            : undefined,
                          boxShadow: index === currentIndex 
                            ? `0 0 20px rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.5)`
                            : undefined
                        }}
                      >
                        <div 
                          className={`w-full h-full rounded-sm transition-all ${
                            index === currentIndex 
                              ? 'opacity-40' 
                              : 'bg-gray-600/30'
                          }`}
                          style={{
                            backgroundColor: index === currentIndex 
                              ? `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.4)`
                              : undefined
                          }}
                        ></div>
                      </button>
                    ))}
                  </div>
                  
                  {/* Play/Pause Control */}
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 text-purple-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all flex items-center space-x-2 hover:scale-105"
                  >
                    {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
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