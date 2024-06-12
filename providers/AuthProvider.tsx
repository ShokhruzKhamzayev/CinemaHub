'use client'
import { ClerkProvider } from "@clerk/nextjs"
import { useTheme } from "next-themes"
import { dark, experimental__simple } from '@clerk/themes'
export default function AuthProvider({ children }: {
    children: React.ReactNode
}) {
    const { theme } = useTheme()
    console.log(theme)
    return (
        // @ts-ignore
        <ClerkProvider appearance={theme === 'dark' ? dark : experimental__simple}>{children}</ClerkProvider>
    )
}
