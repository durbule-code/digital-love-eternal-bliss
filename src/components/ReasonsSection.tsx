
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';

const reasons = [
  "The way your eyes light up when you smile",
  "Your kindness to everyone you meet",
  "How you make even ordinary days feel special",
  "The sound of your laughter that fills my heart",
  "Your strength in difficult times",
  "The way you understand me without words",
  "Your passion for the things you love",
  "The gentle touch of your hand in mine",
  "Your beautiful mind and creativity",
  "How you inspire me to be a better person",
  "The comfort I feel just being near you",
  "Your silly jokes that always make me laugh",
  "The way you care for others so deeply",
  "Your determination and perseverance",
  "The peace I feel when we're together",
  "How you remember the little things",
  "Your voice, especially when you're excited",
  "The way you dance when nobody's watching",
  "Your unconditional support for my dreams",
  "How you see the good in everything",
];

const ReasonsSection: React.FC = () => {
  const { isDark } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === reasons.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? reasons.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

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
      id="reasons"
      className={cn(
        "py-24 px-4 reveal",
        isDark ? "bg-background" : "bg-love-100/30"
      )}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-dancing text-center mb-6">
          100 Reasons I Love You
        </h2>
        
        <p className="text-center text-lg mb-16 max-w-2xl mx-auto">
          There are countless reasons why my heart chooses you every day. Here are just a few...
        </p>

        <div className="relative">
          <div
            ref={carouselRef}
            className="overflow-hidden rounded-xl shadow-xl"
          >
            <div 
              className={cn(
                "relative min-h-[300px] md:min-h-[350px] flex items-center justify-center p-8 md:p-12",
                isDark 
                  ? "bg-secondary/30 border border-love-500/20" 
                  : "bg-white/80 border border-love-200"
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                  activeIndex === 0 ? "opacity-100" : "opacity-0",
                )}
              >
                <div className="max-w-xl text-center">
                  <Heart className="mx-auto mb-4 text-love-500" size={32} />
                  <div className="text-xl md:text-2xl font-dancing mb-2 text-love-600">
                    Reason #1
                  </div>
                  <p className="text-xl md:text-3xl mb-4 font-playfair italic">
                    {reasons[0]}
                  </p>
                </div>
              </div>

              {reasons.slice(1).map((reason, idx) => (
                <div
                  key={idx + 1}
                  className={cn(
                    "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                    activeIndex === idx + 1 ? "opacity-100" : "opacity-0"
                  )}
                >
                  <div className="max-w-xl text-center">
                    <Heart className="mx-auto mb-4 text-love-500" size={32} />
                    <div className="text-xl md:text-2xl font-dancing mb-2 text-love-600">
                      Reason #{idx + 2}
                    </div>
                    <p className="text-xl md:text-3xl mb-4 font-playfair italic">
                      {reason}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrev}
            className={cn(
              "absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full",
              isDark 
                ? "bg-background/80 text-love-400 hover:bg-background/90" 
                : "bg-white/80 text-love-500 hover:bg-white"
            )}
            aria-label="Previous reason"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full",
              isDark 
                ? "bg-background/80 text-love-400 hover:bg-background/90" 
                : "bg-white/80 text-love-500 hover:bg-white"
            )}
            aria-label="Next reason"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {reasons.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (isAnimating) return;
                setIsAnimating(true);
                setActiveIndex(idx);
                setTimeout(() => setIsAnimating(false), 600);
              }}
              className={cn(
                "w-2 h-2 mx-1 rounded-full transition-all duration-300",
                activeIndex === idx 
                  ? isDark ? "bg-love-400 w-4" : "bg-love-500 w-4" 
                  : isDark ? "bg-love-400/30" : "bg-love-200"
              )}
              aria-label={`Go to reason ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
