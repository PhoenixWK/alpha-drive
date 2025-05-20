
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function ProfileDropdownMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="py-10" asChild>
                <Button 
                    className="bg-transparent flex flex-row items-center justify-center gap-4 border-2 border-[#EAEAEA] dark:border-[#364670] hover:bg-[#EAEAEA] dark:hover:bg-[#364670] dark:hover:border-[#364670]"
                >
                    <Avatar className="w-14 h-14">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <ul className="flex flex-col items-start justify-start gap-1">
                        <li>
                            <p className="text-lg font-semibold text-[#435179] dark:text-white">John Doe</p>
                        </li>
                        <li>
                            <p className="text-lg text-[#BBBBC1]">john.doe@example.com</p>
                        </li>
                    </ul>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 py-2 mr-5 cursor-pointer bg-transparent">
                <DropdownMenuGroup>
                    <DropdownMenuItem className="text-lg font-semibold text-[#435179] dark:text-white">
                        Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-lg font-semibold text-[#435179] dark:text-white">
                        Upgrade              
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem className="text-lg font-semibold text-[#435179] dark:text-white">
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}