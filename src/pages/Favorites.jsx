import "../css/Favorites.css"
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites) {
        return (
        <div className="favorites">
            <h2>Your Favorite movies</h2>
            <div className="movies-grid">
                {favorites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />))}
            </div>
        </div>
        )
    }

    return (

        <div className="favorites-empty">
            <h2>Theres no favorite movies yet!</h2>
            <p>Start adding your favortie movies</p>
        </div>
    );
}