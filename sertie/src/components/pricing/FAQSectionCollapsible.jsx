import { useState } from "react";
import { faqs } from "@/constants/faq";

// FAQSectionCollapsible component to render the FAQ section with collapsible answers
export default function FAQSectionCollapsible() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the active FAQ item
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="text-3xl text-center font-alegreya font-bold pb-8">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 p-4 bg-gray-50 rounded-md h-fit">
            <div
              className="cursor-pointer font-semibold text-lg flex justify-between items-start gap-4"
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex-1">{faq.question}</span>
              <svg
                className={`w-6 h-6 transform transition-transform flex-shrink-0 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {activeIndex === index && (
              <div 
                className="mt-2"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
