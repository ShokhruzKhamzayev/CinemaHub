'use client'
import React, { useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogOverlay,
    DialogPortal,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

import ThemeSwitch from "../themeSwitcher";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import SearchInput from "../ui/searchInput";
import Link from 'next/link';

export default function SharedAction() {
    return (
        <>
            <div className="flex items-center gap-[27px]">
                <Dialog>
                    <DialogOverlay />
                    <DialogTrigger >
                        <MagnifyingGlassIcon width={40} height={40} />
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                <SearchInput close={<DialogClose />} />
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
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
        </>
    )
}
