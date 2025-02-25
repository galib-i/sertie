import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Link } from "react-router-dom";
import AuthLayout from "@/components/auth/AuthLayout";
import PasswordInput from "@/components/auth/PasswordInput";
import SocialButtons from "@/components/auth/SocialButtons";

// RegistrationForm component for user registration
export default function RegistrationForm() {
  return (
    <AuthLayout 
      title="Join Sertie"
      subtitle="Advance your career towards success"
      showTestimonial={true}
    >
      <form className="space-y-3">
        
        {/* Name input fields */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Input id="firstName" placeholder="First Name" />
          </div>
          <div className="space-y-2">
            <Input id="lastName" placeholder="Last Name" />
          </div>
        </div>
        
        {/* Email input field */}
        <div className="space-y-2">
          <Input id="email" type="email" placeholder="Email" />
        </div>
        
        {/* Password input field */}
        <div className="space-y-2">
          <PasswordInput id="password" />
        </div>
        
        {/* Terms and Privacy Policy */}
        <p className="text-xs text-center text-sertie-grey">
          By registering, you agree to our{" "}
          <Link to="#" className="text-sertie-blue-500 hover:underline">Terms of Use</Link> and{" "}
          <Link to="#" className="text-sertie-blue-500 hover:underline">Privacy Policy</Link>
        </p>
        
        {/* Submit button */}
        <Button variant="default" className="w-full bg-sertie-blue-500 hover:bg-sertie-blue">
          Create your account
        </Button>
        
        {/* Social media sign-up buttons */}
        <SocialButtons />
        
        {/* Sign-in link for existing users */}
        <p className="text-center text-sm text-sertie-grey">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-sertie-blue-500 hover:underline">Sign in</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
