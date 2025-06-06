"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";


import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
        <form className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-[#364670] dark:text-white font-semibold">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 dark:bg-[#1D2335] dark:text-white rounded-md border-2 dark:border-0 focus:border-[#6A4BFF] focus:ring-0 focus:ring-offset-0"
              />
            </div>
            <div className="space-y-2">
                <label htmlFor="password" className="block text-[#364670] dark:text-white font-semibold">
                    Password
                </label>
                <div className="relative">
                    <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="w-full px-4 py-3 dark:bg-[#1D2335] dark:text-white rounded-md border-2 dark:border-0 focus:border-[#6A4BFF] focus:ring-0 focus:ring-offset-0"
                        />
                        <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#364670]"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                        id="remember"
                        type="checkbox"
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm font-semibold text-[#364670] dark:text-white">
                        Remember me
                    </label>
                </div>
                <div>
                    <Link href="/forgot-password" className="text-[#6A4BFF] text-sm font-semibold dark:text-white">
                        Forgot password?
                    </Link>
                </div>
            </div>
            <Button className="w-full py-3 h-12 bg-[#6A4BFF] hover:bg-[#6A4BFF]/75 text-white font-semibold">
                Sign in
            </Button>
            <Button variant="outline" className="w-full py-3 h-12 hover:bg-[#6A4BFF]/75 dark:hover:bg-[#6A4BFF]/75 hover:text-white dark:bg-transparent dark:text-white border-[#364670] text-[#364670] font-semibold dark:border-[#364670]">
                 Google
            </Button>
          </form>
    );
} 