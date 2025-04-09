
import React, { useEffect, useState } from 'react';

interface PetalProps {
  left: string;
  delay: string;
  duration: string;
}

const Petal: React.FC<PetalProps> = ({ left, delay, duration }) => {
  return (
    <div
      className="falling-petal"
      style={{
        '--fall-left': left,
        '--fall-delay': delay,
        '--fall-duration': duration,
      } as React.CSSProperties}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="#FFB6C1"
          opacity="0.8"
        />
      </svg>
    </div>
  );
};

interface FallingPetalsProps {
  count?: number;
}

const FallingPetals: React.FC<FallingPetalsProps> = ({ count = 10 }) => {
  const [petals, setPetals] = useState<PetalProps[]>([]);

  useEffect(() => {
    const newPetals: PetalProps[] = [];
    
    for (let i = 0; i < count; i++) {
      newPetals.push({
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${Math.random() * 5 + 5}s`,
      });
    }
    
    setPetals(newPetals);
  }, [count]);

  return (
    <>
      {petals.map((petal, index) => (
        <Petal 
          key={index} 
          left={petal.left} 
          delay={petal.delay} 
          duration={petal.duration} 
        />
      ))}
    </>
  );
};

export default FallingPetals;
