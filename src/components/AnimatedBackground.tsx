import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
}

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0) return;

    const colors = ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EC4899'];
    const particleCount = Math.min(50, Math.floor(dimensions.width / 30));
    
    const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.5 + 0.1
    }));

    setParticles(newParticles);
  }, [dimensions]);

  useEffect(() => {
    if (particles.length === 0) return;

    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;

          // Bounce off edges
          if (newX <= 0 || newX >= dimensions.width) {
            particle.speedX *= -1;
            newX = Math.max(0, Math.min(dimensions.width, newX));
          }
          if (newY <= 0 || newY >= dimensions.height) {
            particle.speedY *= -1;
            newY = Math.max(0, Math.min(dimensions.height, newY));
          }

          return { ...particle, x: newX, y: newY };
        })
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, [particles.length, dimensions]);

  return (
    <>
      {/* Add CSS keyframes to globals.css instead of inline styles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-10 animate-grid-move"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Floating Particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            }}
          />
        ))}

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-4 h-4 border-2 border-purple-500/30 rotate-45 animate-spin-slow" />
        <div className="absolute top-40 right-20 w-6 h-6 border-2 border-cyan-500/30 animate-pulse" />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-green-500/30 rounded-full animate-bounce-slow" />
        <div className="absolute bottom-20 right-10 w-5 h-5 border-2 border-yellow-500/30 rotate-45 animate-spin-slower" />
        <div className="absolute top-1/2 left-5 w-2 h-8 bg-pink-500/20 animate-pulse" />
        <div className="absolute top-1/3 right-5 w-8 h-2 bg-purple-500/20 animate-pulse-slow" />
      </div>
    </>
  );
}