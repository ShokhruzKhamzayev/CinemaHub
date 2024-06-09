import { fetchNowPlaying, fetchPopularMovies } from "./api";
import StarterFull from "@/components/shared/starterFull";

export default async function Home() {
  // const { data } = await fetchPopularMovies()
  const { data } = await fetchNowPlaying()
  const { results } = data
  return (
    <>
      <StarterFull data={results[0]} />
      <div className="container">
        <div className="trands"></div>
      </div>
    </>
  );
}
