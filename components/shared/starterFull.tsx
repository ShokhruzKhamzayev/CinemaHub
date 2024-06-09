import { StarterTypo } from "@/types"
import Image from "next/image"

export default async function StarterFull({ data }: StarterTypo) {
    console.log(data)
    return (
        <div className="h-[90vh] w-full relative text-white">
            <Image src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="123" fill className="absolute inset-0 z-[-1]"/>
            <div className="flex items-end h-full">
                <h1>{data.title}</h1>
            </div>
        </div>
    )
}
