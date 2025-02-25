import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Card } from "@/components/ui/Card"
import { leadershipQuotes } from "@/constants/quotes"
import { SocialLink } from "@/components/icons/SocialLink"
import { SOCIAL_LINKS } from "@/constants/navigation"

const stats = [
  { number: "50+", label: "Partnered societies" },
  { number: "60+", label: "Mentor-mentee matches" },
  { number: "400+", label: "Profiles enhanced" }
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-[500px] border-b-2 border-sertie-blue-500 bg-sertie-blue/60" />
      <Navbar />
      <main className="flex-grow relative">
        {/* Hero Section */}
        <section className="container mx-auto px-6 sm:px-8 pt-8 sm:pt-16 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 max-w-4xl mx-auto">
            <div className="w-full lg:w-1/2 lg:pt-32">
              <h1 className="font-alegreya text-4xl sm:text-5xl font-bold mb-4">About Sertie</h1>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative w-full max-w-[500px] mx-auto mb-20 aspect-video rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/QIcdjp1tlvQ"
                  title="About Sertie"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-20 text-lg">
            <p>
              At Sertie, we're driving the future of work by connecting students and graduates to their dream jobs through innovative EdTech solutions. Our platform aligns candidates' aspirations with employers' needs, while providing access to industry mentors with 5+ years of experience and exclusive professional opportunities typically hidden from the public eye.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6 sm:px-8">
            <h2 className="font-alegreya text-4xl font-bold mb-16 max-w-4xl mx-auto">Our leadership</h2>
            <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
              {leadershipQuotes.map((leader, index) => (
                <Card.Quote
                  key={index}
                  name={leader.name}
                  role={leader.role}
                  image={leader.image}
                  quote={leader.quote}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-6 sm:px-8">
            <h2 className="font-alegreya text-4xl font-bold mb-6 max-w-4xl mx-auto">Our achievements</h2>
            <p className="text-lg mb-16 max-w-4xl mx-auto">
              Among helping mentees land roles, we've achieved significant milestones in building the Sertie community.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <Card.Stat key={index} {...stat} />
              ))}
            </div>
          </div>
        </section>

        <section className="pb-32">
          <div className="container mx-auto px-6 sm:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-alegreya text-4xl font-bold mb-6">Contact us</h2>
              
              <div className="mb-4">
                <p className="text-lg">
                  <span className="font-semibold">Email:</span>{" "}
                  <a 
                    href="mailto:hello@sertie.io" 
                    className="text-sertie-blue-500 hover:underline"
                  >
                    hello@sertie.io
                  </a>
                </p>
              </div>

              <div className="mb-8">
                <p className="text-lg">
                  <span className="font-semibold">Partnerships:</span>{" "}
                  <a 
                    href="mailto:partnerships@sertie.io" 
                    className="text-sertie-blue-500 hover:underline"
                  >
                    partnerships@sertie.io
                  </a>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 text-lg">
                {SOCIAL_LINKS.map((link) => (
                  <SocialLink 
                    key={link.href}
                    {...link}
                    className="text-sertie-black hover:text-sertie-blue transition-colors"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

