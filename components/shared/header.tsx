import DrawerInHeader from "./drawerHeader";
import Logo from "./logo";
import SharedAction from "./sharedAction";
import SharedNav from "./sharedNav";
export default function Header() {
    return (
        <header className="bg-slate-700 text-white py-[15px] min-h-[10vh] flex justify-center items-center relative z-[9999]">
            <div className="container flex justify-between items-center">
                <Logo />
                <div className="hidden lg:block">
                    <SharedNav />
                </div>
                <div className="hidden lg:block">
                    <SharedAction />
                </div>
                <div className="block lg:hidden">
                    <DrawerInHeader />
                </div>
            </div>
        </header>
    )
}
