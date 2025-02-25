// AuthLayout component provides a consistent layout for authentication pages
// with optional testimonial display for larger screens
export default function AuthLayout({ children, title, subtitle, showTestimonial = false }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      
      {/* Main authentication form container */}
      <div className="bg-white rounded-lg p-12 w-full max-w-sm space-y-6 border border-gray-200">
        <p>
          <span className="font-alegreya font-semibold text-4xl">{title}</span>
          <br />
          <span className="text-sm">{subtitle}</span>
        </p>
        {children}
      </div>

      {/* Conditional rendering of the testimonial section */}
      {showTestimonial && (
        <div className="select-none italic pointer-events-none hidden custom:block absolute right-16 text-white max-w-sm 2xl:max-w-xl transition-all duration-500 ease-in-out">
          <div className="relative">
            
            {/* Quote icon */}
            <img
              src="src/assets/images/quote-left.svg"
              alt="Quote left icon"
              width={80}
              height={100}
              className="absolute top-[-35px] left-[-10px] transform z-10 opacity-20"
              style={{
                filter: "invert(50%) sepia(7%) saturate(102%) hue-rotate(87deg) brightness(90%) contrast(86%)",
              }}
            />
            
            {/* Testimonial quote */}
            <blockquote className="text-sertie-black text-xl ml-12 font-light relative z-20 pr-12 2xl:pr-24">
              "Feedback and insights on my CV have been even better than career services"
            </blockquote>
            
            {/* Testimonial footer */}
            <footer className="mt-2 ml-12">
              <p className="font-thin text-sm text-sertie-black/75">
                Louisa,
                <br />
                International Relations @ LSE
              </p>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}
