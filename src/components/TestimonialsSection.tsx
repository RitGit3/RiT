import { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedText, AnimatedContainer } from "./hooks/useScrollAnimation";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechStartup",
    company: "InnovateNow",
    rating: 5,
    text: "RiT delivered an exceptional gaming website that exceeded our expectations. The attention to detail and creative implementation was outstanding.",
    avatar: "👩‍💼"
  },
  {
    id: 2,
    name: "Mark Chen",
    position: "Lead Developer",
    company: "GameStudio Pro",
    rating: 5,
    text: "Working with RiT was a game-changer. The code quality and modern architecture implemented saved us months of development time.",
    avatar: "👨‍💻"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    position: "Product Manager",
    company: "DigitalFlow",
    rating: 5,
    text: "The gaming UI/UX design and seamless user experience RiT created for our platform has significantly increased user engagement.",
    avatar: "👩‍🎨"
  },
  {
    id: 4,
    name: "Alex Kim",
    position: "CTO",
    company: "NextGen Apps",
    rating: 5,
    text: "RiT's full-stack expertise and problem-solving skills helped us launch our complex gaming platform ahead of schedule.",
    avatar: "👨‍🔬"
  },
  {
    id: 5,
    name: "Lisa Wang",
    position: "Design Director",
    company: "Creative Labs",
    rating: 5,
    text: "The attention to gaming aesthetics and modern development practices made our collaboration incredibly successful.",
    avatar: "👩‍🎭"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <AnimatedText delay={0}>
            <div className="inline-flex items-center bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full mb-6">
              <Quote size={16} className="mr-2" />
              <span className="text-sm uppercase tracking-wider">Client Reviews</span>
            </div>
          </AnimatedText>
          <AnimatedText delay={200}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              WHAT CLIENTS <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">SAY</span>
            </h2>
          </AnimatedText>
          <AnimatedText delay={400}>
            <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              Trusted by amazing companies and individuals who value quality and innovation.
            </p>
          </AnimatedText>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatedText delay={600}>
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Main Card */}
              <div className="relative bg-gray-800/90 backdrop-blur-lg border border-gray-700/50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
                {/* Quote Icon */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-4 rounded-full">
                    <Quote size={24} className="text-white" />
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className="text-yellow-400 fill-current mx-1"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 italic">
                  "{currentTestimonial.text}"
                </blockquote>

                {/* Client Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-2xl">
                      {currentTestimonial.avatar}
                    </div>
                    <div className="text-left">
                      <h4 className="text-white text-lg">{currentTestimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{currentTestimonial.position}</p>
                    </div>
                  </div>
                  <div className="hidden sm:block w-px h-12 bg-gray-600"></div>
                  <div className="text-center sm:text-left">
                    <p className="text-cyan-400">{currentTestimonial.company}</p>
                    <p className="text-gray-500 text-sm">Verified Client</p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center space-x-4 mt-8">
                  <button
                    onClick={prevTestimonial}
                    className="bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600 text-white p-3 rounded-full transition-all hover:scale-110"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  {/* Dots Navigation */}
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentIndex(index);
                          setIsAutoPlaying(false);
                        }}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentIndex
                            ? 'bg-cyan-400 scale-125'
                            : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextTestimonial}
                    className="bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600 text-white p-3 rounded-full transition-all hover:scale-110"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </AnimatedText>
        </div>

        {/* Client Logos */}
        <AnimatedContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-16" stagger={100}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center group cursor-pointer" onClick={() => setCurrentIndex(index)}>
              <div className={`bg-gray-800/40 border border-gray-700/50 rounded-xl p-4 transition-all hover:border-cyan-500/50 ${
                index === currentIndex ? 'border-cyan-500/50 bg-cyan-500/10' : ''
              }`}>
                <div className="text-2xl mb-2">{testimonial.avatar}</div>
                <p className="text-gray-400 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}