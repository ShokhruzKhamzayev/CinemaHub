import StarterFull from "@/components/shared/starterFull";
import { fetchMovies } from "../api";

export default async function MoviesPage() {
    const { data } = await fetchMovies()
    const { results } = data
    return (
        <>
            <StarterFull data={results[10]} />
            <div className="container">
            </div>
        </>
    )
}
