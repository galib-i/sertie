import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Link } from "react-router-dom";
import AuthLayout from "@/components/auth/AuthLayout";
import PasswordInput from "@/components/auth/PasswordInput";
import SocialButtons from "@/components/auth/SocialButtons";

// SignInForm component handles the sign-in form UI and functionality
export default function SignInForm() {
  const [rememberMe, setRememberMe] = useState(true);

  return (
    <AuthLayout 
      title="Welcome back"
      subtitle="Sign in to continue learning"
    >
      <form className="space-y-3">
        
        {/* Email input field */}
        <div className="space-y-2">
          <Input id="email" type="email" placeholder="Email" />
        </div>
        
        {/* Password input field */}
        <div className="space-y-2">
          <PasswordInput id="password" />
        </div>
        
        {/* Remember me checkbox and forgot password link */}
        <div className="flex justify-between items-center pb-4">
          <div className="flex items-center">
            <input
              id="rememberMe"
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="h-4 w-4 border-sertie-grey rounded accent-sertie-black"
            />
            <label htmlFor="rememberMe" className="ml-2 text-sertie-grey text-sm">
              Remember me
            </label>
          </div>
          <Link to="#" className="text-sm text-sertie-blue-500 hover:underline">
            Forgot password?
          </Link>
        </div>
        
        {/* Sign in button */}
        <Button variant="default" className="w-full bg-sertie-blue-500 hover:bg-sertie-blue">
          Sign in
        </Button>
        
        {/* Social sign-in buttons */}
        <SocialButtons />
        
        {/* Email sign-in link button */}
        <Button variant="outline" className="w-full bg-white hover:bg-gray-100 text-sertie-black">
          Email a sign in link
        </Button>
        
        {/* Sign up link */}
        <p className="text-center text-sm text-sertie-grey">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-sertie-blue-500 hover:underline">Sign up</Link>
        </p>
      </form>
    </AuthLayout>
  );
}