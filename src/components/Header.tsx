
import React, { useState, useEffect } from 'react';
import { Heart, Moon, Sun, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';

interface HeaderProps {
  scrollToSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection('hero')}
        >
          <Heart 
            className={cn(
              "text-love-500 transition-transform duration-500 group-hover:animate-heartbeat", 
              isDark ? "text-love-400" : "text-love-500"
            )} 
            size={24} 
            fill="currentColor" 
          />
          <span className="font-dancing text-2xl">Our Love</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => handleNavClick('story')}
            className="love-link font-playfair"
          >
            Our Story
          </button>
          <button 
            onClick={() => handleNavClick('reasons')}
            className="love-link font-playfair"
          >
            Reasons
          </button>
          <button 
            onClick={() => handleNavClick('letter')}
            className="love-link font-playfair"
          >
            Letter
          </button>
          <button 
            onClick={() => handleNavClick('gallery')}
            className="love-link font-playfair"
          >
            Gallery
          </button>
          <button 
            onClick={() => handleNavClick('vows')}
            className="love-link font-playfair"
          >
            Vows
          </button>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <Sun size={20} className="text-gold" />
            ) : (
              <Moon size={20} className="text-love-800" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <Sun size={20} className="text-gold" />
            ) : (
              <Moon size={20} className="text-love-800" />
            )}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X size={24} className="text-love-500" />
            ) : (
              <Menu size={24} className="text-love-500" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <button 
          onClick={() => handleNavClick('story')}
          className="font-dancing text-2xl"
        >
          Our Story
        </button>
        <button 
          onClick={() => handleNavClick('reasons')}
          className="font-dancing text-2xl"
        >
          Reasons
        </button>
        <button 
          onClick={() => handleNavClick('letter')}
          className="font-dancing text-2xl"
        >
          Letter
        </button>
        <button 
          onClick={() => handleNavClick('gallery')}
          className="font-dancing text-2xl"
        >
          Gallery
        </button>
        <button 
          onClick={() => handleNavClick('vows')}
          className="font-dancing text-2xl"
        >
          Vows
        </button>
      </div>
    </header>
  );
};

export default Header;
