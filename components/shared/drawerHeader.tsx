import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "../ui/button"
import { ArrowDownIcon } from "@radix-ui/react-icons"
import SharedNav from "./sharedNav"
import SharedAction from "./sharedAction"

export default function DrawerInHeader() {
    return (
        <Drawer>
            <DrawerOverlay />
            <DrawerTrigger>Open</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Find your route <ArrowDownIcon /></DrawerTitle>
                    <DrawerDescription>
                        <SharedNav />
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <SharedAction />
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

    )
}
