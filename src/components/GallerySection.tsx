
import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';

interface Photo {
  id: number;
  url: string;
  caption: string;
  rotate: number;
}

const photos: Photo[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&h=400",
    caption: "The day we discovered our favorite coffee shop",
    rotate: -2,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&h=400",
    caption: "Walking through autumn leaves in the park",
    rotate: 3,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&h=400",
    caption: "That sunset picnic by the lake",
    rotate: -1,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=600&h=400",
    caption: "Stargazing on our camping trip",
    rotate: 2,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&h=400", 
    caption: "Our first hiking adventure together",
    rotate: -2,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&h=400",
    caption: "When we found that adorable stray cat",
    rotate: 1,
  },
];

const GallerySection: React.FC = () => {
  const { isDark } = useTheme();
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const galleryItems = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, idx * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    galleryItems.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      galleryItems.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = '';
  };

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className={cn(
        "py-24 px-4",
        isDark ? "bg-background" : "bg-love-100/20"
      )}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-dancing text-center mb-16">
          Our Memories Together
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              ref={(el) => (galleryItems.current[index] = el)}
              className="reveal"
            >
              <div
                className="polaroid cursor-pointer glow-on-hover"
                style={{ '--rotate': `${photo.rotate}deg` } as React.CSSProperties}
                onClick={() => openLightbox(photo)}
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4 text-center">
                  <p className="font-dancing text-lg">{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-4xl w-full animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-love-300 transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.caption}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6 bg-white">
                  <p className="font-dancing text-xl text-center text-gray-800">
                    {selectedPhoto.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
