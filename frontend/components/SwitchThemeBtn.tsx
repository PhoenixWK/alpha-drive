"use client"

import Image from "next/image"
import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"


export default function SwitchThemeBtn() {
    const { setTheme, theme } = useTheme();

    const handleThemeChange = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <Button 
            onClick={handleThemeChange}
            className="bg-black py-10 px-6 rounded-xl dark:bg-[#6A4BFF] border-none"
        >
            {theme === "dark" ? (
                <Image 
                    src="/sun.png" 
                    alt="sun" 
                    width={32} 
                    height={32}
                    className="w-auto h-auto"
                />
            ) : (
                <Image 
                    src="/night-mode.png" 
                    alt="moon" 
                    width={32} 
                    height={32} 
                    className="w-auto h-auto"
                />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
