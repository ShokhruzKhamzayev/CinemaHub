'use server'
import { base_url } from "@/constants";
import { Movie } from "@/types";
import axios from "axios";

const axos = axios.create({
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzFjYTQ1MzVmMDhiNWI0ZWM0MjhlMzBmN2Q4MDllZCIsInN1YiI6IjY1NTBmOTAwNjdiNjEzNDVjZDMyMmJhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MJhEGA7wMwQDteXz5h9RWdlzu4VY-zazuTTX32dVD2o'
    }
})

export async function fetchPopularMovies() {
    const popular = await axos.get(`${base_url}/movie/popular`)
    return popular
}

export async function fetchNowPlaying() {
    const nowPlaying = await axos.get(`${base_url}/movie/now_playing`)
    return nowPlaying
}

export async function fetchMovies() {
    const movies = await axos.get(`${base_url}/movie/now_playing`)
    return movies
}

export async function fetchTopRated() {
    const movies = await axos.get(`${base_url}/movie/top_rated`)
    return movies
}

export async function fetchUpcoming() {
    const movies = await axos.get(`${base_url}/movie/upcoming`)
    return movies
}


export async function fetchRecomendations(movie_id: number) {
    const movies = await axos.get<{ results: Movie[] }>(`${base_url}/movie/${movie_id}/recommendations`)
    return movies
}

export async function fetchSpecificMovie(movie_id: number) {
    const movies = await axos.get<{ results: Movie }>(`${base_url}/movie/${movie_id}`)
    return movies
}