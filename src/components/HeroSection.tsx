
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';
import FallingPetals from './animations/FallingPetals';

interface HeroSectionProps {
  scrollToNext: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToNext }) => {
  const { isDark } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const handleParallax = () => {
      const scrollPos = window.scrollY;
      const parallaxFactor = 0.5;
      if (scrollPos <= window.innerHeight) {
        section.style.transform = `translateY(${scrollPos * parallaxFactor}px)`;
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className={cn(
        "min-h-screen flex flex-col items-center justify-center relative overflow-hidden",
        isDark ? "bg-night-sky" : "ambient-background"
      )}
    >
      <FallingPetals count={20} />
      
      {isDark && (
        <div className="stars absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i} 
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: Math.random() * 0.8 + 0.2,
                '--star-delay': Math.random() * 2,
              } as React.CSSProperties}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 py-16 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-dancing mb-6 animate-fade-in">
            Every Beat of My Heart Says Your Name
          </h1>
          
          <h2 className="text-xl md:text-2xl font-playfair italic mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            This website is a place where my love for you lives, endlessly.
          </h2>
          
          <div className="mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-[1px] w-16 bg-love-300"></div>
              <Heart className="text-love-500" size={24} fill="currentColor" />
              <div className="h-[1px] w-16 bg-love-300"></div>
            </div>
            
            <p className="text-lg md:text-xl italic">
              "You are the dream I never want to wake up from."
            </p>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
            <button
              onClick={scrollToNext}
              className="flex items-center gap-2 mx-auto text-lg font-playfair text-foreground/80 hover:text-foreground transition-colors duration-300 animate-pulse"
            >
              <span>Scroll to Begin Our Story</span>
              <ArrowDown size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
