
import ProfileDropdownMenu from "./ProfileDropdownMenu";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-center gap-4">
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="w-5xl h-full rounded-lg px-4 py-6 bg-[#F8F6FF] dark:bg-[#1D2335] text-xl focus:outline-none border-2 dark:border-transparent focus:border-[#6A4BFF] dark:focus:border-[#6A4BFF] dark:text-white" 
                />
                <Button className="py-10 px-6 rounded-xl bg-[#6A4BFF]">
                    <div className="flex flex-row items-center justify-center">
                        <Image
                            src="/filter.png"
                            alt="filter"
                            width={32}
                            height={32}
                            className="w-auto h-auto"
                        />
                    </div>
                </Button>
            </div>
            <ProfileDropdownMenu />
        </header>
    );
}   