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
                            <div className="embla__slide" key={movie.id}>
                                <Card>
                                    <CardHeader>
                                        <div className='relative w-full h-[400px]'>
                                            <Image src={`${base_image_url_mini}/${movie.poster_path}`} alt={movie.title} fill className='object-cover' />
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <h1>{movie.title}</h1>
                                        <Link href={`/movie/${movie.id}`} className='flex items-center gap-[8px] border-primary border w-fit ml-auto bg-slate-100 py-[7px] px-[15px] rounded-[10px] dark:bg-slate-600 mt-[20px]'>See more <ArrowRightIcon /></Link>
                                    </CardContent>
                                </Card>
                            </div>
                        ))
                    }
                    <div className="embla__slide ">
                        <Card>
                            <CardHeader>
                                <h1>123</h1>
                            </CardHeader>
                            <CardContent>
                                <p>123</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="embla__slide ">
                        <Card>
                            <CardHeader>
                                <h1>123</h1>
                            </CardHeader>
                            <CardContent>
                                <p>123</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
