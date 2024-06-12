'use client'

import { StarterTypo } from '@/types'
import useEmblaCarousel from 'embla-carousel-react'
import CustomImage from '../ui/customImage'
import { Card, CardContent, CardHeader } from '../ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { base_image_url_mini } from '@/constants'

export function CarouselReuse({ data, name }: StarterTypo) {
    const [emblaRef] = useEmblaCarousel()
    return (
        <div className='my-[30px]'>
            <h1 className='text-4xl font-bold px-[10px] pb-[20px]'>{name}</h1>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {
                        data.map(movie => (
                            <div className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33%] 2xl:flex-[0_0_25%] min-w-0" key={movie.id}>
                                <Link href={`/movie/${movie.id}`}>
                                    <Card>
                                        <CardHeader>
                                            <div className='relative w-full h-[400px] overflow-hidden'>
                                                {/* <Image src={`${base_image_url_mini}/${movie.poster_path}`} alt={movie.title} fill className='object-cover' /> */}
                                                <CustomImage src={`${base_image_url_mini}/${movie.poster_path}`} alt={movie.title} />
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <h1>{movie.title}</h1>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}
