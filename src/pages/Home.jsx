import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home(){
    const[searchQuery, setSearchQuery] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("Insert a movie!")
    }

    const movies = [
        {id: 1, title: "Interstellar", release_date: "2016"},
        {id: 2, title: "Limbo", release_date: "2018"},
        {id: 3, title: "Wicked", release_date: "2024"},
    ];

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="type" 
                placeholder="Search for movies..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="submit-button">Search</button>
            </form>   
            <div className="movie-grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>))}
            </div>
        </div>
    );
}

export default Home;