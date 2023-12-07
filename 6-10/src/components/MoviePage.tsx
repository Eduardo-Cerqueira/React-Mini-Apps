import { MovieResult, MovieResultsResponse } from "moviedb-promise";
import MovieCard from "./MovieCard";

type MoviePage = {
    movies: MovieResultsResponse
}

export default function MoviePage({ movies }: MoviePage) {
    return (
        <>
        {movies.results && movies.results.map((movie: MovieResult, index: number) => (
            <div key={`movie-${index}`} style={{ display: 'inline-block', margin: '10px' }}>
                <MovieCard movie={movie}/>
            </div>
            ))}
        </>
    )
}