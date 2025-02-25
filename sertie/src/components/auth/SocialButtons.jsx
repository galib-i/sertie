import { Button } from "@/components/ui/Button";

// SocialButtons component provides alternative authentication methods
// Currently supports Google OAuth login with room for additional providers
export default function SocialButtons() {
  return (
    <>
      {/* Horizontal divider with centered "OR" text */}
      <div className="relative flex items-center">
        <div className="flex-grow border-t border-sertie-grey"></div>
        <span className="flex-shrink text-xs mx-4 text-sertie-grey">OR</span>
        <div className="flex-grow border-t border-sertie-grey"></div>
      </div>

      {/* OAuth provider buttons */}
      <Button 
        variant="outline" 
        className="w-full bg-white hover:bg-gray-100 text-sertie-black"
      >
        <img 
          src="https://www.google.com/favicon.ico" 
          alt="Google" 
          width={20} 
          height={20} 
          className="mr-2" 
        />
        Continue with Google
      </Button>
    </>
  );
}
