
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';

interface StoryEvent {
  date: string;
  title: string;
  description: string;
  imageUrl?: string;
}

const storyTimeline: StoryEvent[] = [
  {
    date: "The Day We Met",
    title: "A Beginning Like No Other",
    description: "The universe conspired to bring us together, and in that moment, my life changed forever.",
    imageUrl: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=500&h=350"
  },
  {
    date: "Our First Date",
    title: "Butterflies and Laughter",
    description: "I knew you were special from the start. The way you smiled made me feel like I was home.",
    imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=500&h=350"
  },
  {
    date: "When I Knew",
    title: "That Magical Moment",
    description: "It wasn't one big moment, but a thousand little ones that made me realize you were the one.",
    imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=500&h=350"
  },
  {
    date: "The First 'I Love You'",
    title: "Words from the Heart",
    description: "Those three words never felt so true, so right, as when I said them to you for the first time.",
    imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=500&h=350"
  },
];

const StorySection: React.FC = () => {
  const { isDark } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const timelineItems = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.2 }
    );

    timelineItems.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      timelineItems.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story"
      className={cn(
        "py-24 px-4",
        isDark ? "bg-gradient-to-b from-night-sky to-background" : "bg-love-50"
      )}
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-dancing text-center mb-16">
          Our Story
        </h2>

        <div className="relative md:ml-0">
          {storyTimeline.map((event, index) => (
            <div
              key={index}
              ref={(el) => (timelineItems.current[index] = el)}
              className={cn(
                "reveal timeline-item md:flex md:items-center mb-12 md:mb-20",
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              )}
            >
              <div className="md:w-1/2 p-4">
                <div
                  className={cn(
                    "bg-card rounded-lg shadow-lg overflow-hidden transform transition-all duration-500",
                    isDark ? "shadow-love-900/20" : "shadow-love-300/50" 
                  )}
                  style={{
                    transform: `perspective(1000px) rotateY(${index % 2 === 0 ? '0' : '0'}deg)`,
                  }}
                >
                  {event.imageUrl && (
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-56 object-cover object-center"
                    />
                  )}
                  <div className="p-6">
                    <span className="text-sm font-medium text-love-500 block mb-2">
                      {event.date}
                    </span>
                    <h3 className="text-2xl font-dancing mb-3">{event.title}</h3>
                    <p className="text-foreground/80">{event.description}</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
