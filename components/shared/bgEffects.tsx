'use client'

import { useTheme } from "next-themes"

export default function BgEffects() {
    const { theme } = useTheme()
    if (theme === 'dark') {
        return (
            <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        )
    } else {
        return (
            <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
        )
    }
}
