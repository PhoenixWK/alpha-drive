"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="flex min-h-screen">
      {/* Left section with illustration */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-gray-50">
        <div className="p-8">
          <Image 
            src="/images/login-illustration.svg" 
            alt="Login illustration" 
            width={400} 
            height={400}
            priority
          />
        </div>
      </div>
      
      {/* Right section with login form */}
      <div className="w-full md:w-1/2 flex flex-col p-8 md:p-12 lg:p-16">
        {/* Logo */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <div className="bg-primary size-12 rounded-lg flex items-center justify-center text-white text-xl font-bold">
              A
            </div>
            <span className="text-xl font-medium text-gray-800">Alpha Drive</span>
          </div>
        </div>
        
        {/* Form container */}
        <div className="max-w-md mx-auto w-full">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
              Sign in to your account
            </h1>
            <p className="text-gray-600">
              Don't have an account? <Link href="/signup" className="text-primary font-medium">Sign up</Link>
            </p>
          </div>
          
          <form className="space-y-5">
            {/* Email field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
            
            {/* Password field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-gray-700 font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            
            {/* Remember me and forgot password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <div>
                <Link href="/forgot-password" className="text-primary text-sm font-medium">
                  Forgot password?
                </Link>
              </div>
            </div>
            
            {/* Sign in button */}
            <Button className="w-full py-3 h-12">
              Sign in
            </Button>
            
            {/* Google sign in */}
            <Button variant="outline" className="w-full py-3 h-12 border-gray-300">
              Google
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
} 