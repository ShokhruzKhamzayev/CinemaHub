import { InstagramLogoIcon, TwitterLogoIcon, VideoIcon } from "@radix-ui/react-icons";
import Logo from "./logo";
import Link from "next/link";
import SubsForm from "../subsForm";

export default function Footer() {
    return (
        <footer className="flex justify-between items-start container">
            <div className=" w-1/4">
                <Logo />
                <p>The best online cinema that you have ever seen</p>
                <div>
                    <a href="#">
                        <TwitterLogoIcon />
                    </a>
                    <a href="#">
                        <VideoIcon />
                    </a>
                    <a href="#">
                        <InstagramLogoIcon />
                    </a>
                </div>
            </div>
            <div className="flex flex-col gap-[10px] w-1/4">
                <span>Category</span>
                <Link href={'/'}>Hottest</Link>
                <Link href={'/'}>Blog</Link>
                <Link href={'/'}>Movies</Link>
                <Link href={'/'}>TV Shows</Link>
                <Link href={'/'}>Buy Ticket</Link>
            </div>
            <div className="flex flex-col gap-[10px] w-1/4">
                <span>Support</span>
                <Link href={'/'}>About Us</Link>
                <Link href={'/'}>Help Center</Link>
                <Link href={'/'}>Privacy Policy</Link>
                <Link href={'/'}>FAQ</Link>
            </div>
            <div className="w-1/4">
                <span>Subscription</span>
                <SubsForm />
            </div>
        </footer>
    )
}
