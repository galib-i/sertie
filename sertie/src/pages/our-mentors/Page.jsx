import { Card } from "@/components/ui/Card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Testimonial from "@/components/ui/Testimonial";
import { MENTORS } from "@/constants/mentors";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import CompanyCarousel from "@/components/ui/CompanyCarousel";
import { useState } from "react";

export default function OurMentors() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Show first 4 mentors
  const visibleMentors = MENTORS.slice(0, 4);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? visibleMentors.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === visibleMentors.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-[500px] border-b-2 border-sertie-blue-500 bg-sertie-blue/60 z-0" />
      <Navbar />
      <main className="flex-grow container mx-auto px-6 sm:px-8 pt-8 sm:pt-16 z-10">

        <div className="text-center mb-8 sm:mb-16">
          <h1 className="font-alegreya text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">
            Connect with experienced<br />professionals
          </h1>
          <p className="text-lg sm:text-xl mb-20">
            Our mentors, with 5+ years of experience, are ready<br />to share insights through virtual coffee chats
          </p>
          <CompanyCarousel />
        </div>

        <div className="max-w-4xl mt-32 mx-auto mb-8 sm:mb-16">
          <p className="text-lg sm:text-xl mb-20">
          With graduates from top universities like Cambridge, Oxford, and Columbia, our mentors provide expertise across industries such as Finance, Energy, and Technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              aria-label="View previous mentor"
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 rounded-full p-2 z-20 shadow-md ${
                currentIndex === 0 
                  ? 'bg-gray-200 cursor-not-allowed text-gray-400' 
                  : 'bg-white cursor-pointer'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <div className="overflow-hidden">
              <div
                className="transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="flex">
                  {visibleMentors.map((mentor, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2"
                    >
                      <Card.Mentor 
                        mentor={mentor} 
                        isBlurred={index === visibleMentors.length - 1}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={handleNext}
              aria-label="View next mentor"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 bg-white rounded-full p-2 z-20 shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-20 mb-8 sm:mb-16">
          <p className="text-lg sm:text-xl mb-20">
            Whether through workplace shadowing or casual conversations, Sertie helps you gain the skills and knowledge to stand out in today’s job market.
          </p>
        </div>

        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white py-24">
          <div className="container mx-auto px-6 sm:px-8">
            <Testimonial 
              quote='"Sertie has been very supportive throughout my application process... the most remarkable thing that I got out of the mentor session is that it is ok to not start your career off at your dream company in the beginning, as we are all on different journeys to the top!"'
              author="Sarah Chen"
              role="Marketing Graduate"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center mb-16">
          <p className="text-lg mb-4 font-semibold">Ready to accelerate your career growth?</p>
          <Link to="/register">
            <Button className="bg-sertie-blue-500 hover:bg-sertie-blue text-md px-10 py-6 font-semibold">
              Get Started Now
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
