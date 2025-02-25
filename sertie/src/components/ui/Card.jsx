import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import CheckIcon from "@/components/icons/CheckIcon";

const Card = ({ variant, className, children, ...props }) => {
  const baseStyles = "bg-white rounded-lg border border-gray-200 shadow-md";
  
  return (
    <div className={cn(baseStyles, className)} {...props}>
      {children}
    </div>
  );
};

// Instagram Post Card
Card.Instagram = ({ embedUrl, description }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Card className="p-6 text-left">
      <div className={`relative transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <iframe
          src={embedUrl}
          className="w-full"
          height="400"
          frameBorder="0"
          scrolling="no"
          allowtransparency="true"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      
      {!isLoaded && (
        <div className="h-[400px] bg-gray-100 animate-pulse rounded-lg" />
      )}
      
      <p className="text-gray-600 mt-4">{description}</p>
    </Card>
  );
};

// Review Card
Card.Review = ({ author, studentAt, review }) => {
  return (
    <Card className="p-6 text-left">
      <div className="flex items-center mb-6">
        <svg
          className="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 14H8c-2.21 0-4 1.79-4 4v2h16v-2c0-2.21-1.79-4-4-4z"
          />
        </svg>
        <div>
          <h3 className="font-semibold">{author}</h3>
          <p className="text-sm text-sertie-grey">{studentAt}</p>
        </div>
      </div>
      <p className="text-gray-600">{review}</p>
    </Card>
  );
};

// Mentor Card
Card.Mentor = ({ mentor, isBlurred }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <Card ref={cardRef} className={`p-8 mx-4 relative ${isBlurred ? 'select-none' : ''}`}>
      {isBlurred && (
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-10 rounded-lg flex items-center justify-center">
          <div className="text-center p-4">
            <p className="text-lg font-semibold text-sertie-primary mb-2">
              Sign up to see more mentors
            </p>
            <Link to="/register">
              <Button variant="default" className="bg-sertie-blue-500 hover:bg-sertie-blue">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      )}
      
      <div className="flex items-start gap-8">
        {/* Left side - Image */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-lg bg-gray-200 flex-shrink-0 overflow-hidden">
          <img
            src={mentor.image}
            alt={mentor.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - All content */}
        <div className="flex-1 space-y-4">
          {/* Basic Info */}
          <div>
            <h3 className="font-semibold text-xl">{mentor.name}</h3>
            <p className="text-sertie-grey text-sm mb-2">{mentor.role}</p>
            <div className="flex items-center gap-2 text-xs text-sertie-grey">
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3 h-3"
                >
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                {mentor.location}
              </span>
              <span>•</span>
              <span>{mentor.languages.join(", ")}</span>
            </div>
          </div>

          {/* Expertise Section */}
          <div>
            <h4 className="font-semibold text-sm text-sertie-grey mb-2">Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {mentor.expertise.map((skill, index) => (
                <span 
                  key={index}
                  className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Expandable Content */}
          <div className={`space-y-4 ${isExpanded ? 'block' : 'hidden'}`}>
            {/* Professional Background */}
            <div>
              <h4 className="font-semibold text-sm text-sertie-grey mb-2">Professional Background</h4>
              <ul className="text-sm space-y-2">
                {mentor.professionalBackground.map((experience, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-1.5 rounded-full bg-sertie-blue flex-shrink-0" />
                    <span>{experience}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academic Background */}
            <div>
              <h4 className="font-semibold text-sm text-sertie-grey mb-2">Academic Background</h4>
              <ul className="text-sm space-y-2">
                {mentor.academicBackground.map((education, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-1.5 rounded-full bg-sertie-blue flex-shrink-0" />
                    <span>{education}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Expand/Collapse Button */}
          <Button
            variant="default"
            className="bg-sertie-blue-500 hover:bg-sertie-blue"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Show less' : 'Learn more'}
          </Button>
        </div>
      </div>
    </Card>
  );
};

// Stat Card
Card.Stat = ({ number, label }) => {
  return (
    <Card className="p-8 text-center relative overflow-hidden group hover:scale-105 transition-transform duration-300">
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
      <h3 className="font-alegreya text-4xl font-bold mb-2">{number}</h3>
      <p className="text-sertie-grey">{label}</p>
    </Card>
  );
};

// Quote Card
Card.Quote = ({ name, role, image, quote }) => {
  const formattedQuote = quote.split('<br />').map((paragraph, index) => (
    <p 
      key={index} 
      className="mb-4 last:mb-0"
      dangerouslySetInnerHTML={{ __html: paragraph }}
    />
  ));

  return (
    <Card className="p-8">
      <div className="flex items-center gap-4 mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sertie-grey text-sm">{role}</p>
        </div>
      </div>
      <div className="text-gray-600">
        {formattedQuote}
      </div>
    </Card>
  );
};

// Add PricingPlan variant
Card.PricingPlan = ({ 
  name, 
  description, 
  price, 
  features, 
  isPremium = false,
  ctaText = "Get started" 
}) => {
  return (
    <Card className={`p-8 ${isPremium ? 'border-sertie-blue-500' : 'border-gray-200'}`}>
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <h3 className="text-4xl font-alegreya font-bold text-sertie-black mb-1">{name}</h3>
          {isPremium && (
            <svg 
              className="select-none pointer-events-none w-6 h-6 text-sertie-blue" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 1L9 9H2L7 14L5 22L12 17L19 22L17 14L22 9H15L12 1Z" />
            </svg>
          )}
        </div>
        <p className="text-sertie-grey text-sm">{description}</p>
        <div className="">
          <span className="text-4xl font-alegreya font-bold text-sertie-black">£</span>
          <span className="text-6xl font-alegreya font-bold text-sertie-black">{price}</span>
          <span className="text-sertie-grey text-sm"> /month</span>
        </div>
      </div>
      <Link to="/sign-in" className="block">
        <Button 
          className={`w-full py-6 mb-8 text-white ${
            isPremium ? 'bg-sertie-blue-500 hover:bg-sertie-blue' : 'bg-sertie-black hover:bg-black/80'
          }`}
        >
          {ctaText}
        </Button>
      </Link>
      <ul className={`space-y-4 text-sertie-black rounded-lg p-6 min-h-[192px] ${
        isPremium ? 'bg-sertie-blue/10 border-sertie-blue' : 'bg-gray-50'
      }`}>
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckIcon />
            <span dangerouslySetInnerHTML={{ __html: feature }} />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export { Card };
