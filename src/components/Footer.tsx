
import React from 'react';
import { Heart, Music } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';

const Footer: React.FC = () => {
  const { isDark } = useTheme();
  
  return (
    <footer
      className={cn(
        "py-12 px-4 text-center",
        isDark ? "bg-black/90" : "bg-love-200/50"
      )}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-[1px] w-16 bg-love-300"></div>
          <Heart 
            className="text-love-500" 
            size={24} 
            fill="currentColor" 
          />
          <div className="h-[1px] w-16 bg-love-300"></div>
        </div>
        
        <div className="mb-8">
          <a 
            href="https://open.spotify.com/playlist/your-playlist-id" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full transition-colors",
              isDark 
                ? "bg-love-600/20 hover:bg-love-600/30 text-love-300" 
                : "bg-love-100 hover:bg-love-200 text-love-600"
            )}
          >
            <Music size={18} />
            <span>Songs That Remind Me of You</span>
          </a>
        </div>
        
        <p className="font-dancing text-3xl md:text-4xl mb-4">
          Yours, forever. – [Your Name]
        </p>
        
        <p className="text-sm text-foreground/60 mt-6">
          This is my heart, coded just for you. 💕
        </p>
      </div>
    </footer>
  );
};

export default Footer;
