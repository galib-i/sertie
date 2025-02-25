import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Testimonial from "@/components/pricing/Testimonial";
import SocietyCarousel from "@/components/ui/SocietyCarousel";
import FAQSectionCollapsible from "@/components/pricing/FAQSectionCollapsible";
import { Card } from "@/components/ui/Card";

export default function Pricing() {
  const freePlanFeatures = [
    "<strong>15</strong> click job credits",
    "<strong>50</strong> available job opportunities",
    "<strong>2</strong> upskilling feedback forms"
  ];

  const premiumPlanFeatures = [
    "<strong>60</strong> click job credits",
    "<strong>100</strong> available job opportunities",
    "<strong>15</strong> upskilling feedback forms",
    '<span class="text-sertie-blue-500 font-bold">2 mentor match credits</span>'
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-[500px] border-b-2 border-sertie-blue-500 bg-sertie-blue/60 z-0" />
      <Navbar />
      <main className="flex-grow container mx-auto px-6 sm:px-8 pt-8 sm:pt-16 z-10">
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="font-alegreya text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">Invest in your future</h1>
          <Testimonial />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-8 sm:mb-16">
          <Card.PricingPlan
            name="Free"
            description="Explore your career possibilities"
            price="0"
            features={freePlanFeatures}
            ctaText="Start for free"
          />
          <Card.PricingPlan
            name="Premium"
            description="Accelerate your career growth"
            price="9.99"
            features={premiumPlanFeatures}
            isPremium={true}
          />
        </div>
        <SocietyCarousel />
        <div className="max-w-7xl mx-auto mt-8 sm:mt-16">
          <div className="border-2 bg-white border-sertie-black border-b-0 px-8 py-16 rounded-t-[5rem]">
            <FAQSectionCollapsible />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}