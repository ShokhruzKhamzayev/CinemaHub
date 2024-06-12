'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function BgEffects() {
    const [myTheme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
    const { theme } = useTheme()
    useEffect(() => {
        // @ts-ignore
        setTheme(theme)
    }, [theme])
    if (myTheme === 'dark') {
        return <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    } else if (myTheme === 'light') {
        return <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
    } else {
        return <div></div>
    }
}
