const API_KEY = "23cdeafcd6f1415a3e4ff5ddf016dd5e";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const reponse = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await reponse.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const reponse = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await reponse.json();
    return data.results;
};