import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import SocietyCarousel from "@/components/ui/SocietyCarousel";
import { reviews } from "@/constants/reviews";
import Typical from 'react-typical';
import { Card } from "@/components/ui/Card";
import cvImage from "@/assets/images/cv.svg";
import targetsImage from "@/assets/images/targets.svg";
import gearsImage from "@/assets/images/gears.svg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-[500px] border-b-2 border-sertie-blue-500 bg-sertie-blue/60 z-0" />
      <Navbar />
      
      <main className="flex-grow">
        <section className="relative z-10 pt-20">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h1 className="font-alegreya text-3xl sm:text-6xl lg:text-7xl font-bold mb-6">
                Don't just apply—stand out<br />{' '}
                <Typical
                  steps={[
                    '& get hired',
                    4000,
                    'with expert mentorship',
                    4000,
                    'with smarter CVs',
                    4000,
                    'for more opportunities',
                    4000,
                    'with Sertie',
                    4000,
                    '& get Sertie-fied',
                    4000
                  ]}
                  loop={Infinity}
                  wrapper="none"
                />
              </h1>
              <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
                Connect with industry leaders, gain insights, and unlock job opportunities. Join 400+ professionals who've advanced with us.
              </p>
              <Link to="/register">
                <Button className="bg-sertie-blue-500 hover:bg-sertie-blue text-md px-10 py-6 font-semibold">
                  Find your mentor
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-28">
          <div className="container mx-auto px-6">            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* CV Review Card */}
              <div className="bg-white rounded-xl p-6 flex items-center min-h-[200px] relative overflow-visible">
                <div className="w-2/3">
                  <h3 className="text-2xl font-black relative z-10">CV reviews</h3>
                  <p className="text-gray-600 mt-2">Craft a standout CV with an AI-powered review completed in minutes</p>
                </div>

                <div className="relative w-1/3">
                  <img
                    src={cvImage}
                    alt="CV Review"
                    className="absolute -right-4 -top-32 w-40 h-40 object-contain transform rotate-45"
                  />
                </div>
              </div>

              {/* Industry Mentorship Card */}
              <div className="bg-white rounded-xl p-6 flex items-center min-h-[200px] relative overflow-visible">
                <div className="w-2/3">
                  <h3 className="text-2xl font-black relative z-10">1:1 industry<br />mentorships</h3>
                  <p className="text-gray-600 mt-2">Career guidance from industry professionals</p>
                </div>
                <div className="relative w-1/3">
                <img
                  src={targetsImage}
                  alt="Mentorship"
                  className="absolute -right-1 -top-20 object-contain scale-[155%]"
                />
                </div>
              </div>

              {/* Skill Gap Analysis Card */}
              <div className="bg-white rounded-xl p-6 flex items-center min-h-[200px] relative overflow-visible">
                <div className="w-2/3">
                  <h3 className="text-2xl font-black relative z-10">Skill gap<br />analyses</h3>
                  <p className="text-gray-600 mt-2">Discover the skills you need for internship success and how to develop them</p>
                </div>
                <div className="relative w-1/3">
                <img
                  src={gearsImage}
                  alt="Mentorship"
                  className="absolute -left-12 -top-20 object-contain scale-[250%] rotate-12"
                />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-alegreya text-3xl max-w-2xl font-bold mx-auto">
              Our team brings diverse expertise to support you at every step of your journey. Together, we are committed to empowering you to achieve your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {/* Key metrics */}
              <div className="text-center">
                <div className="font-alegreya text-4xl font-bold mb-2">50+</div>
                <p>Partnered societies</p>
              </div>

              <div className="text-center">
                <div className="font-alegreya text-4xl font-bold mb-2">60+</div>
                <p>Mentor-mentee maches</p>
              </div>

              <div className="text-center">
                <div className="font-alegreya text-4xl font-bold mb-2">400+</div>
                <p>Profiles enhanced</p>
              </div>

              <div className="text-center">
                <div className="font-alegreya text-4xl font-bold mb-2">500,000</div>
                <p>Student reach with the London Student Network</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-sertie-blue overflow-hidden">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="p-8 flex flex-col justify-center">
                  <p className="font-alegreya text-4xl mb-6 font-bold">
                    Land your dream roles
                  </p>
                  <p className="text-lg mb-6 max-w-xl">
                    Our mentors have helped students secure positions at top companies. Hear how we helped Zareen.
                  </p>
                </div>
                
                <div className="aspect-video h-full">
                  <iframe
                    className="w-full h-full object-cover"
                    src="https://www.youtube.com/embed/3PcDsCZFjSg"
                    title="Student Testimonial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-sertie-blue-500">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Step 1 */}
              <div className="relative">
                <h3 className="font-alegreya font-bold text-4xl mb-3">1. Sign up</h3>
                <p>Create your profile and tell us about your achievements and aspirations</p>
                <div className="hidden md:block absolute -right-4 -top-24 -bottom-24 w-px bg-black/10"></div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <h3 className="font-alegreya font-bold text-4xl mb-3">2. Get feedback</h3>
                <p>Read about your strengths and areas of improvement</p>
                <div className="hidden md:block absolute -right-4 -top-24 -bottom-24 w-px bg-black/10"></div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <h3 className="font-alegreya font-bold text-4xl mb-3">3. Connect</h3>
                <p>Match with job opportunities and mentors</p>
                <div className="hidden md:block absolute -right-4 -top-24 -bottom-24 w-px bg-black/10"></div>
              </div>

              {/* Step 4 */}
              <div>
                <h3 className="font-alegreya font-bold text-4xl mb-3">4. Succeed</h3>
                <p>Land your dream role with expert support</p>
              </div>
            </div>
          </div>
        </section>
    
        <section className="pt-24">
          <div className="container mx-auto px-6">
            <h2 className="text-left font-alegreya text-4xl font-bold mb-8">More from our members</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.slice(0, 3).map((review, index) => (
                <Card.Review key={index} {...review} />
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto px-6">
            <SocietyCarousel />
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-left font-alegreya text-4xl font-bold mb-12">Latest from us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card.Instagram
                embedUrl="https://www.instagram.com/p/DGVMNISopAc/embed/"
                description="Unlock Your Potential with IBFE x Sertie!"
              />
              <Card.Instagram
                embedUrl="https://www.instagram.com/p/DGRQc8Buvzw/embed"
                description="Ever dreamed of starting your own business?"
              />
              <Card.Instagram
                embedUrl="https://www.instagram.com/p/DGBMQeQIaPV/embed"
                description="The right mentor can change everything!"
              />
            </div>
          </div>
        </section>

        <section className="py-28 relative">
          <div className="absolute inset-0 bg-sertie-blue-500"></div>
          <div className="absolute inset-[16px] bg-sertie-blue rounded-3xl"></div>
          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-alegreya text-4xl sm:text-5xl font-bold mb-12">
                Hundreds of students <span className="text-sertie-blue-500">trust us</span> to boost their careers—you can too!
              </h2>
              <Link to="/register">
                <Button className="bg-sertie-blue-500 hover:bg-sertie-blue text-white font-semibold px-8 py-6 text-md">
                  Start your journey
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
