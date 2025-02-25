import { useEffect, useRef, useState } from 'react';

const ANIMATION_SPEED = 0.6;

// Dynamically import all images from the companies folder
const images = import.meta.glob('@/assets/images/companies/*.{jpg,png}');

// Create COMPANIES array from imported images
const COMPANIES = Object.keys(images).map((path, index) => ({
  name: `Company ${index + 1}`,
  logo: path
}));

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
      className="opacity-90 w-auto object-contain rounded-lg px-5"
      style={{ height: '40px', maxHeight: '40px' }}
    />
  </div>
);

const CompanyCarousel = ({ className }) => {
  const containerRef = useRef(null);
  const [itemsPerView, setItemsPerView] = useState(6);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(3);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(4);
      } else {
        setItemsPerView(6);
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
    const totalWidth = COMPANIES.length * itemWidth;

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
    <div className={`w-full py-4 relative ${className}`}>
      <div className="max-w-4xl mx-auto px-2">
        <div className="relative overflow-hidden">
          <div 
            ref={containerRef}
            className="flex transition-transform"
            style={{ willChange: 'transform', paddingLeft: '0.75rem' }}
          >
            {[...COMPANIES, ...COMPANIES].map((company, index) => (
              <CarouselItem
                key={`${company.name}-${index}`}
                name={company.name}
                logo={company.logo}
                width={100 / itemsPerView}
              />
            ))}
          </div>
          <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-[#A7E0E8] to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-[#A7E0E8] to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default CompanyCarousel;
