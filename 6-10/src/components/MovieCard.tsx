import { Card } from "antd";
import { MovieResult } from "moviedb-promise";
import { Link } from "react-router-dom";

const { Meta } = Card;

type MovieCard = {
    movie: MovieResult
}

export default function MovieCard({ movie }: MovieCard) {
    return (
        <Link to={`/movie/${movie.id}`} state={{ movie: movie }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'inherit' }}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={movie.poster_path !== null ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : '/no-image.jpg'} style={{ height: '350px' }}/>}
            >
                <Meta title={movie.title} description={movie.release_date}/>
            </Card>
        </Link>
    )
}