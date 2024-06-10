'use client'

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function CustomImage({ src, alt }: { src: string, alt: string }) {
    const [loading, setLoading] = useState(true)

    return (
        <Image src={src} alt={alt || ""} fill className={cn('object-cover transition-all duration-300 rounded-[7px]', loading ? "blur-2xl scale-125" : "blur-0 scale-100")} onLoad={() => setLoading(false)} />
    )
}
