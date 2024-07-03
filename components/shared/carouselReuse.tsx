'use client'

import { StarterTypo } from '@/types'
import useEmblaCarousel from 'embla-carousel-react'
import CustomImage from '../ui/customImage'
import { Card, CardContent, CardHeader } from '../ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { base_image_url_mini } from '@/constants'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'

export function CarouselReuse({ data, name }: StarterTypo) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
    return (
        <div className='my-[30px]'>
            <div className='flex justify-center md:justify-between items-center flex-col md:flex-row'>
                <h1 className='text-4xl font-bold px-[10px] pb-[20px]'>{name}</h1>
                <div>
                    <button className="embla__prev border border-gray-400 rounded-[12px]" onClick={scrollPrev}>
                        <ArrowLeftIcon />
                    </button>
                    <button className="embla__next border border-gray-400 rounded-[12px]" onClick={scrollNext}>
                        <ArrowRightIcon />
                    </button>
                </div>
            </div>
            <div className="embla" ref={emblaRef}>

                <div className="embla__container">
                    {
                        data.map(movie => (
                            <div className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33%] 2xl:flex-[0_0_25%] min-w-0" key={movie.id}>
                                <Link href={`/movie/${movie.id}`}>
                                    <Card>
                                        <CardHeader>
                                            <div className='relative w-full h-[400px] overflow-hidden'>
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
