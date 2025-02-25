import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { NavLink } from "@/components/ui/NavLink";
import { NAV_LINKS } from "@/constants/navigation";

// Navbar component
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // 1024px is the 'lg' breakpoint in Tailwind
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };


    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`
      pt-4 pb-4 px-6 sm:px-8 
      ${isScrolled ? 'border-b-2' : 'border-b'}
      ${isScrolled ? 'border-gray-200' : 'border-sertie-blue/50'}
      sticky top-0 z-50
      transition-colors duration-200
      ${isMenuOpen || isScrolled ? 'bg-sertie-white' : 'bg-transparent'}
    `}>
      <div className="container mx-auto flex justify-between items-center px-4">
        
        {/* Logo and navigation links */}
        <div className="flex items-center space-x-8 lg:space-x-20">
          <Link to="/" className={`text-2xl font-semibold ${isMenuOpen ? 'hidden' : ''}`}>
            sertie
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 font-semibold">
            {NAV_LINKS.map(link => (
              <NavLink key={link.path} to={link.path}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Sign-in and register buttons */}
        <div className="flex items-center">
          {/* Desktop buttons */}
          <div className="hidden lg:flex space-x-4">
            <Link to="/sign-in">
              <Button className="bg-transparent p-[1.375rem] text-sertie-blue-500 border-2 border-sertie-blue-500 font-semibold text-md hover:text-sertie-blue hover:border-sertie-blue">
                Sign in
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-sertie-blue-500 hover:bg-sertie-blue text-md px-10 py-6 font-semibold">
                Find a mentor
              </Button>
            </Link>
          </div>
          
          {/* Remove mobile buttons section and only keep hamburger */}
          <button
            className="lg:hidden p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-7 h-[2px] bg-gray-700 mb-1.5 transition-all duration-200 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-7 h-[2px] bg-gray-700 mb-1.5 transition-all duration-200 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-7 h-[2px] bg-gray-700 transition-all duration-200 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 border-b border-gray-200">
            <div className="flex flex-col p-6 space-y-4">
              {NAV_LINKS.map(link => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="py-3 px-4 text-lg font-semibold text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              {/* Add mobile buttons to hamburger menu */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Link to="/sign-in" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-transparent p-[1.375rem] text-sertie-blue-500 border-2 border-sertie-blue-500 font-semibold text-md hover:text-sertie-blue hover:border-sertie-blue">
                    Sign in
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-sertie-blue-500 hover:bg-sertie-blue text-md px-10 py-6 font-semibold">
                    Find a mentor
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
