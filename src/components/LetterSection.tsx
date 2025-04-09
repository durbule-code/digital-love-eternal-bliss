
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';

const LetterSection: React.FC = () => {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          sectionRef.current?.classList.add('active');
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="letter"
      className={cn(
        "py-24 px-4 reveal",
        isDark ? "bg-background" : "bg-gradient-to-b from-love-50 to-love-100/30"
      )}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-dancing text-center mb-16">
          My Love Letter to You
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="relative mx-auto w-full max-w-md" style={{ perspective: '1000px' }}>
            {/* Envelope - Front */}
            <div
              className={cn(
                "relative z-20 flex flex-col items-center justify-center p-8 rounded-xl shadow-xl transition-all duration-1000",
                isOpen ? "opacity-0 pointer-events-none" : "cursor-pointer",
                isDark 
                  ? "bg-secondary border-2 border-gold shadow-love-900/20" 
                  : "bg-love-50 border-2 border-love-300/70 shadow-love-300/50"
              )}
              onClick={() => setIsOpen(true)}
              style={{ 
                transformStyle: 'preserve-3d',
                transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)'
              }}
            >
              <div className="w-16 h-16 mb-4">
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12Z" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    className={isDark ? "stroke-gold" : "stroke-love-500"} 
                  />
                  <path 
                    d="M2 12L8.91302 16.191C10.112 16.9216 10.7115 17.2868 11.3479 17.3458C11.7799 17.3855 12.2201 17.3855 12.6521 17.3458C13.2885 17.2868 13.888 16.9216 15.087 16.191L22 12" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    className={isDark ? "stroke-gold" : "stroke-love-500"} 
                  />
                  <path 
                    d="M14 12L18 15" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round"
                    className={isDark ? "stroke-gold" : "stroke-love-500"} 
                  />
                </svg>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-dancing mb-4">A Letter For You</h3>
                <p className="mb-6 text-foreground/80">Click to open</p>
                
                <div 
                  className={cn(
                    "w-16 h-16 mx-auto relative",
                    isDark ? "text-gold" : "text-love-500"
                  )}
                >
                  <svg 
                    viewBox="0 0 100 100" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3"
                    />
                    <path 
                      d="M50 25C58.2843 25 65 31.7157 65 40C65 52 50 55 50 65M50 75L50 65" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Letter */}
            <div
              className={cn(
                "absolute inset-0 z-10 p-6 rounded-xl shadow-xl overflow-y-auto max-h-[500px]",
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
                isDark 
                  ? "bg-secondary border border-gold/30" 
                  : "bg-love-50 border border-love-200"
              )}
              style={{ 
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                transition: 'all 1s ease',
                transform: isOpen ? 'rotateX(0deg)' : 'rotateX(-180deg)'
              }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-love-100 hover:bg-love-200 transition-colors"
                aria-label="Close letter"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              <div className="pt-8 font-dancing text-lg">
                <p className="mb-4">My Dearest Love,</p>
                
                <p className="mb-4">
                  How do I begin to express what you mean to me? Words seem too small to contain the depth of my feelings, but I'll try my best to paint the picture of what's in my heart.
                </p>
                
                <p className="mb-4">
                  From the moment you came into my life, everything changed. Colors became more vivid, music sounded sweeter, and the world felt full of possibilities. You've shown me what it truly means to love and be loved.
                </p>
                
                <p className="mb-4">
                  I love the way your eyes crinkle when you laugh, how passionate you become when talking about things you care about, and the gentle kindness you show to everyone around you. I love your strength, your vulnerability, your dreams, and your fears. I love all of you, completely and without condition.
                </p>
                
                <p className="mb-4">
                  With you, I've found a home—not a physical place, but that sense of belonging that comes from being truly seen and accepted. You are my safe harbor in storms and my companion in adventures.
                </p>
                
                <p className="mb-4">
                  Every day with you is a gift. Even in ordinary moments—making dinner together, sharing stories about our days, or simply sitting in comfortable silence—I find myself overwhelmed with gratitude that of all the people in this vast world, we found each other.
                </p>
                
                <p className="mb-4">
                  I promise to stand by you, to grow with you, to face whatever comes our way together. I choose you, today and always.
                </p>
                
                <p className="mb-8">
                  With all my heart,
                </p>
                
                <p className="italic">Yours forever</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetterSection;
