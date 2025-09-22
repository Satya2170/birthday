import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
}

const ConfettiAnimation: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const colors = ['#ff6b9d', '#a855f7', '#ec4899', '#f59e0b', '#10b981', '#3b82f6'];

  useEffect(() => {
    const createParticle = (id: number): Particle => ({
      id,
      x: Math.random() * window.innerWidth,
      y: -10,
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 3 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 4
    });

    const initialParticles = Array.from({ length: 50 }, (_, i) => createParticle(i));
    setParticles(initialParticles);

    const animate = () => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          vy: particle.vy + 0.1
        })).filter(particle => particle.y < window.innerHeight + 10)
      );
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            transform: 'rotate(45deg)'
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiAnimation;