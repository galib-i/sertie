import { Input } from "@/components/ui/Input";
import { Link } from "react-router-dom";
import { SocialLink } from "@/components/icons/SocialLink"
import { SOCIAL_LINKS } from "@/constants/navigation";
import logo from "@/assets/sertie-logo.png";

// Footer component
export default function Footer() {
  return (
    <footer className="bg-sertie-black text-white py-8">
      <div className="container mx-auto px-6 sm:px-8">
        
        {/* Newsletter subscription section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-3">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-left">
                <h3 className="font-semibold text-base whitespace-nowrap">Stay updated</h3>
                <p className="text-sm text-gray-400">Subscribe to our newsletter to get the latest updates.</p>
              </div>
              <form className="w-full max-w-xl">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="border-gray-400 px-4 py-2 flex-1"
                  />
                  <button
                    type="submit"
                    className="bg-sertie-blue hover:bg-sertie-blue-500 text-sertie-black px-6 py-3 rounded-sm font-semibold whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Footer bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Logo and legal links */}
            <div className="flex flex-col md:flex-row items-center md:items-center gap-4">
              <img
                src={logo}
                alt="Sertie Logo"
                width={40}
                height={40}
                className="object-contain rounded-sm"
              />
              <div className="flex flex-col items-center md:items-start">
                <div className="flex space-x-2 items-center font-semibold">
                  <Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Terms of Use
                  </Link>
                  <span className="text-gray-400">|</span>
                  <Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </div>
                <p className="text-xs text-gray-400">&copy; 2025 Sertie. All rights reserved.</p>
              </div>
            </div>
            
            {/* Social media links */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              {SOCIAL_LINKS.map(link => (
                <SocialLink key={link.name} {...link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
