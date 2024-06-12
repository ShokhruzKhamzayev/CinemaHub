import Link from "next/link";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import Logo from "./logo";
import ThemeSwitch from "../themeSwitcher";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {

    return (
        <header className="bg-slate-700 text-white py-[15px] min-h-[10vh]">
            <div className="container flex justify-between items-center">
                <Logo />
                <nav className="space-x-[40px]">
                    <Link className="text-[17px] font-medium" href={'/'}>Home</Link>
                    <Link className="text-[17px] font-medium" href={'/movies'}>Movies</Link>
                    <Link className="text-[17px] font-medium" href={'/tvShows'}>TV Shows</Link>
                    <Link className="text-[17px] font-medium" href={'/blog'}>Blog</Link>
                </nav>
                <div className="flex items-center gap-[27px]">
                    <MagnifyingGlassIcon width={40} height={40} />
                    <ThemeSwitch />
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <Link href={'/'}>
                            <Button>Sign In</Button>
                        </Link>
                    </SignedOut>
                </div>
            </div>
        </header>
    )
}
