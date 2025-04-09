
import React, { useRef } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import ReasonsSection from '@/components/ReasonsSection';
import LetterSection from '@/components/LetterSection';
import GallerySection from '@/components/GallerySection';
import VowsSection from '@/components/VowsSection';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/hooks/useTheme';

const Index = () => {
  const storyRef = useRef<HTMLElement | null>(null);
  const reasonsRef = useRef<HTMLElement | null>(null);
  const letterRef = useRef<HTMLElement | null>(null);
  const galleryRef = useRef<HTMLElement | null>(null);
  const vowsRef = useRef<HTMLElement | null>(null);

  // Initialize refs once components are mounted
  React.useEffect(() => {
    storyRef.current = document.getElementById('story');
    reasonsRef.current = document.getElementById('reasons');
    letterRef.current = document.getElementById('letter');
    galleryRef.current = document.getElementById('gallery');
    vowsRef.current = document.getElementById('vows');
  }, []);

  const scrollToSection = (section: string) => {
    let targetRef: React.MutableRefObject<HTMLElement | null> | null = null;
    
    switch (section) {
      case 'hero':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      case 'story':
        targetRef = storyRef;
        break;
      case 'reasons':
        targetRef = reasonsRef;
        break;
      case 'letter':
        targetRef = letterRef;
        break;
      case 'gallery':
        targetRef = galleryRef;
        break;
      case 'vows':
        targetRef = vowsRef;
        break;
      default:
        return;
    }

    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToStory = () => {
    if (storyRef.current) {
      storyRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intersection Observer for reveal animations
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header scrollToSection={scrollToSection} />
        
        <main>
          <HeroSection scrollToNext={scrollToStory} />
          <StorySection />
          <ReasonsSection />
          <LetterSection />
          <GallerySection />
          <VowsSection />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
