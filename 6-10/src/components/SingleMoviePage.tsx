import { MovieResult } from "moviedb-promise";
import { useLocation } from "react-router-dom";

type MovieCard = {
    movie: MovieResult
}

export default function SingleMoviePage() {
    const location = useLocation()
    const { movie }: MovieCard = location.state
    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'grid', placeItems: 'center' }}>
                <h1>{movie.title}</h1>
                <h2>{movie.original_title}</h2>
                <img style={{ height: '300px' }} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                <div>{movie.overview}</div>
            </div>
        </div>
    )
}