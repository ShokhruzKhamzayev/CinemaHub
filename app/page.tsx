import { CarouselReuse } from "@/components/shared/carouselReuse";
import { fetchNowPlaying, fetchPopularMovies, fetchTopRated, fetchUpcoming } from "./api";
import StarterFull from "@/components/shared/starterFull";

export default async function Home() {
  const { data: nowPlaying } = await fetchNowPlaying()
  const { data: popularMovies } = await fetchPopularMovies()
  const { data: topRated } = await fetchTopRated()
  const { data: upcoming } = await fetchUpcoming()
  return (
    <>
      <StarterFull data={nowPlaying.results[0]} />
      <div className="container">
        <CarouselReuse data={popularMovies.results} name="Popular Movies" />
        <CarouselReuse data={topRated.results} name="Top Rated Movies" />
        <CarouselReuse data={nowPlaying.results} name="Streaming now" />
        <CarouselReuse data={upcoming.results} name="Upcoming Movies" />
      </div>
    </>
  );
}
