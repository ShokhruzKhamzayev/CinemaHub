import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logo from '../../public/logo.png'

export default function Logo() {
    return (
        <Link href={'/'} className="flex items-center gap-[7px]">
            <Image src={logo} alt="Logo of the website" className="max-w-[50px]" />
            <h1 className="text-3xl font-semibold tracking-wider">CinemaHub</h1>
        </Link>
    )
}
