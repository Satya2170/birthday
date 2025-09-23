import React, { useEffect, useState } from 'react';

interface Firework {
  id: number;
  x: number;
  y: number;
  particles: Particle[];
  exploded: boolean;
  color: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

const FireworksAnimation: React.FC = () => {
  const [fireworks, setFireworks] = useState<Firework[]>([]);
  const [showFireworks, setShowFireworks] = useState(true);

  const colors = ['#ff6b9d', '#a855f7', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#ef4444', '#8b5cf6'];

  const createParticles = (x: number, y: number, color: string): Particle[] => {
    const particles: Particle[] = [];
    const particleCount = 15 + Math.random() * 10;
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount;
      const velocity = 2 + Math.random() * 4;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        life: 60,
        maxLife: 60
      });
    }
    return particles;
  };

  const createFirework = (id: number): Firework => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight * 0.6) + window.innerHeight * 0.2;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    return {
      id,
      x,
      y,
      particles: createParticles(x, y, color),
      exploded: true,
      color
    };
  };

  useEffect(() => {
    if (!showFireworks) return;

    let fireworkId = 0;
    const fireworksArray: Firework[] = [];

    // Create initial burst of fireworks
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        const newFirework = createFirework(fireworkId++);
        fireworksArray.push(newFirework);
        setFireworks(prev => [...prev, newFirework]);
      }, i * 300);
    }

    // Continue creating fireworks for 4 seconds
    const fireworkInterval = setInterval(() => {
      if (fireworksArray.length < 15) {
        const newFirework = createFirework(fireworkId++);
        fireworksArray.push(newFirework);
        setFireworks(prev => [...prev, newFirework]);
      }
    }, 500);

    // Animate particles
    const animationInterval = setInterval(() => {
      setFireworks(prev => 
        prev.map(firework => ({
          ...firework,
          particles: firework.particles
            .map(particle => ({
              ...particle,
              x: particle.x + particle.vx,
              y: particle.y + particle.vy,
              vy: particle.vy + 0.1, // gravity
              vx: particle.vx * 0.99, // air resistance
              life: particle.life - 1
            }))
            .filter(particle => particle.life > 0)
        })).filter(firework => firework.particles.length > 0)
      );
    }, 50);

    // Stop fireworks after 6 seconds
    const stopTimeout = setTimeout(() => {
      setShowFireworks(false);
      clearInterval(fireworkInterval);
      clearInterval(animationInterval);
      // Clear all fireworks after animation completes
      setTimeout(() => setFireworks([]), 2000);
    }, 6000);

    return () => {
      clearInterval(fireworkInterval);
      clearInterval(animationInterval);
      clearTimeout(stopTimeout);
    };
  }, [showFireworks]);

  if (!showFireworks && fireworks.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {fireworks.map(firework => (
        <div key={firework.id}>
          {firework.particles.map((particle, index) => (
            <div
              key={index}
              className="absolute rounded-full"
              style={{
                left: particle.x - 2,
                top: particle.y - 2,
                width: 4,
                height: 4,
                backgroundColor: firework.color,
                opacity: particle.life / particle.maxLife,
                boxShadow: `0 0 6px ${firework.color}`,
                transform: `scale(${particle.life / particle.maxLife})`
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default FireworksAnimation;