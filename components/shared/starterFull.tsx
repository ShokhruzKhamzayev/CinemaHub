import { fetchRecomendations } from "@/app/api"
import { Movie, StarterTypo } from "@/types"
import Image from "next/image"
import { Card, CardHeader } from "../ui/card"

export default async function StarterFull({ data }: {
    data: Movie
}) {
    const { data: recommendations } = await fetchRecomendations(data.id)
    const selectedOnes = recommendations.results.slice(0, 3)
    return (
        <div className="h-[90vh] w-full relative text-white">
            <Image src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="123" fill className="absolute inset-0 z-[-1]" />
            <div className="flex items-end h-full">
                <div className="w-1/2">
                    <h1>{data.title}</h1>
                    <p>{data.overview}</p>
                </div>
                <div className="w-1/2">
                    <div className="flex">
                        {
                            selectedOnes.map(movie => (
                                <div key={movie.id} className="w-1/3">
                                    <Card>
                                        <CardHeader>
                                            <div className="relative w-full h-[300px]">
                                                <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="123" fill/>
                                            </div>
                                            <h1>{movie.title}</h1>
                                        </CardHeader>
                                    </Card>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
