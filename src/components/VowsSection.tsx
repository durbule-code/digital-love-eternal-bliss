
import React, { useRef, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

interface Vow {
  title: string;
  content: string;
}

const vows: Vow[] = [
  {
    title: "My Promise of Love",
    content: "I vow to love you completely and unconditionally. To cherish your heart as the precious gift it is. To fall in love with you more deeply each day."
  },
  {
    title: "My Promise of Support",
    content: "I vow to be your biggest supporter and your strongest advocate. To celebrate your victories and help you rise after defeats. To believe in you, especially when you doubt yourself."
  },
  {
    title: "My Promise of Honesty",
    content: "I vow to speak truth with kindness and listen with an open heart. To share my dreams and fears with you. To be authentic and transparent in all our moments together."
  },
  {
    title: "My Promise of Growth",
    content: "I vow to grow alongside you, never apart. To embrace change as an opportunity for our love to deepen. To continuously work on being the best partner I can be for you."
  },
  {
    title: "My Promise of Forever",
    content: "I vow that my love for you is not fleeting or conditional. It's a forever kind of love that will weather any storm and celebrate every joy. You have my heart, completely and eternally."
  },
  {
    title: "My Promise of Patience",
    content: "I vow to be patient with you, with us, and with myself. To understand that love grows in its own time and that we each have our own journey of growth."
  },
  {
    title: "My Promise of Joy",
    content: "I vow to bring laughter and light into your life. To dance with you in kitchens, to sing with you in cars, and to find wonder in everyday moments together."
  },
  {
    title: "My Promise of Presence",
    content: "I vow to be fully present with you. To listen with my whole heart, to see you truly, and to cherish every moment we share together."
  }
];

const VowsSection: React.FC = () => {
  const { isDark } = useTheme();
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
      id="vows"
      className={cn(
        "py-24 px-4 reveal",
        isDark ? "bg-gradient-to-b from-background to-black/80" : "bg-love-50"
      )}
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-dancing text-center mb-16">
          My Vows to You
        </h2>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {vows.map((vow, index) => (
              <CarouselItem key={index}>
                <div className="p-2">
                  <div 
                    className={cn(
                      "h-full rounded-xl p-8 md:p-12 text-center flex flex-col items-center justify-center shadow-xl",
                      isDark 
                        ? "bg-secondary/30 border border-love-500/20 shadow-love-900/20" 
                        : "bg-white border border-love-200 shadow-love-300/50"
                    )}
                  >
                    <Heart 
                      className={cn(
                        "mb-6", 
                        isDark ? "text-love-400" : "text-love-500"
                      )} 
                      size={32} 
                      fill="currentColor" 
                    />
                    
                    <h3 className="text-2xl md:text-3xl font-dancing mb-6">
                      {vow.title}
                    </h3>
                    
                    <p className="text-lg md:text-xl font-playfair italic mb-6">
                      {vow.content}
                    </p>
                    
                    <div className="mt-auto pt-6">
                      <button 
                        className={cn(
                          "px-6 py-2 rounded-full transition-all duration-300",
                          isDark 
                            ? "bg-love-500/20 hover:bg-love-500/30 text-love-300" 
                            : "bg-love-100 hover:bg-love-200 text-love-600"
                        )}
                        onClick={() => {
                          // Trigger the "I love you too" animation here
                          alert("I love you too!");
                        }}
                      >
                        <span className="font-dancing text-lg">I love you too</span>
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex items-center justify-center mt-8">
            <CarouselPrevious className={cn(
              "-left-4 md:-left-12 bg-background/50 hover:bg-background/80 border-0",
              isDark ? "text-love-300" : "text-love-500"
            )} />
            <CarouselNext className={cn(
              "-right-4 md:-right-12 bg-background/50 hover:bg-background/80 border-0",
              isDark ? "text-love-300" : "text-love-500"
            )} />
          </div>
        </Carousel>

        <div className="flex justify-center mt-8">
          {vows.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                const items = document.querySelectorAll('.embla__slide');
                if (items && items[idx]) {
                  (items[idx] as HTMLElement).scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center' 
                  });
                }
              }}
              className={cn(
                "w-2 h-2 mx-1 rounded-full transition-all duration-300",
                isDark ? "bg-love-400/30 hover:bg-love-400/70" : "bg-love-200 hover:bg-love-300"
              )}
              aria-label={`Go to vow ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VowsSection;
