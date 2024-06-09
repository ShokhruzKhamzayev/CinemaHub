'use client'

import { useTheme } from "next-themes";
import { Toaster } from "sonner";

export default function SonnerWithThemes() {
    const { theme } = useTheme()
    return (
        <Toaster theme={theme === 'light' ? 'light' : 'dark'}/>
    )
}
