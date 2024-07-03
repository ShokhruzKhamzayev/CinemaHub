'use client'
import React, { useState } from 'react'
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

import ThemeSwitch from "../themeSwitcher";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import SearchInput from "../ui/searchInput";
import Link from 'next/link';
import Dialog from '../ui/dialog';

export default function SharedAction() {
    return (
        <>
            <div className="flex items-center gap-[27px]">
                <Dialog />
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
