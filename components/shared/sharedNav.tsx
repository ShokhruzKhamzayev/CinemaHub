import Link from 'next/link'
import React from 'react'


export default function SharedNav() {
    return (
        <>
            <nav className="space-x-[40px]">
                <Link className="text-[17px] font-medium" href={'/'}>Home</Link>
                <Link className="text-[17px] font-medium" href={'/movies'}>Movies</Link>
                <Link className="text-[17px] font-medium" href={'/tvShows'}>TV Shows</Link>
                <Link className="text-[17px] font-medium" href={'/blog'}>Blog</Link>
            </nav>
            
        </>
    )
}
