import { fetchRecomendations } from "@/app/api"
import { Movie, StarterTypo } from "@/types"
import Image from "next/image"
import { Card, CardHeader } from "../ui/card"
import { base_image_url_full, base_image_url_mini } from "@/constants"

export default async function StarterFull({ data }: {
    data: Movie
}) {
    const { data: recommendations } = await fetchRecomendations(data.id)
    const selectedOnes = recommendations.results.slice(0, 2)
    return (
        <div className="h-[90vh] w-full relative text-white">
            <Image src={`${base_image_url_full}/${data.backdrop_path}`} alt="123" fill className="absolute inset-0 z-[-1]" />
            <div className="flex items-end h-full">
                <div className="w-1/2 bg-slate-600 backdrop:blur-lg">
                    <h1>{data.title}</h1>
                    <p>{data.overview}</p>
                </div>
                <div className="w-1/2">
                    <h1>Recommended</h1>
                    <div>
                        <div className="flex">
                            {
                                selectedOnes.map(movie => (
                                    <div key={movie.id} className="w-1/2">
                                        <Card>
                                            <CardHeader>
                                                <div className="relative w-full h-[300px]">
                                                    <Image src={`${base_image_url_mini}/${movie.poster_path}`} alt="123" fill />
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
        </div>
    )
}
