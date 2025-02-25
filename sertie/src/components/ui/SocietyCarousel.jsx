import { useEffect, useRef, useState } from 'react';

// Animation speed for carousel
const ANIMATION_SPEED = 0.6;

// Dynamically import all images from the societies folder
const images = import.meta.glob('@/assets/images/societies/*.{jpg,png}');

// Create SOCIETIES array from imported images
const SOCIETIES = Object.keys(images).map((path, index) => ({
  name: `Society ${index + 1}`,
  logo: path
}));

// Carousel item component
const CarouselItem = ({ name, logo, width }) => (
  <div
    className="flex items-center justify-center"
    style={{
      flex: `0 0 ${width}%`,
      padding: '0 0.4rem'
    }}
  >
    <img
      src={logo}
      alt={name}
      className="opacity-90 w-auto object-contain rounded-lg"
      style={{ height: '80px', maxHeight: '80px' }}
    />
  </div>
);

// SocietyCarousel component to render the carousel of societies
const SocietyCarousel = () => {
  const containerRef = useRef(null);
  const [itemsPerView, setItemsPerView] = useState(8);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 1050) {
        setItemsPerView(4);
      } else {
        setItemsPerView(8);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);

    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let animationFrameId;
    let position = 0;

    const itemWidth = container.offsetWidth / itemsPerView;
    const totalWidth = SOCIETIES.length * itemWidth;

    // Animate the carousel
    const animate = () => {
      position -= ANIMATION_SPEED;
      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }
      container.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [itemsPerView]);

  return (
    <div className="w-full py-4 sm:py-8 relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="w-full h-px bg-gray-200 mb-4 sm:mb-8" />
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-4 sm:mb-8">
          <h2 className="font-semibold text-sertie-grey text-center sm:text-left sm:max-w-[200px] text-sm sm:text-base">
            TRUSTED BY 50+ UNIVERSITY SOCIETIES
          </h2>
          <div className="relative overflow-hidden flex-1">
            <div 
              ref={containerRef}
              className="flex transition-transform"
              style={{ willChange: 'transform', paddingLeft: '0.75rem' }}
            >
              {[...SOCIETIES, ...SOCIETIES].map((society, index) => (
                <CarouselItem
                  key={`${society.name}-${index}`}
                  name={society.name}
                  logo={society.logo}
                  width={100 / itemsPerView}
                />
              ))}
            </div>
            <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-sertie-white to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-sertie-white to-transparent pointer-events-none" />
          </div>
        </div>
        <div className="w-full h-px bg-gray-200" />
      </div>
    </div>
  );
};

export default SocietyCarousel;