import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = 'http://www.omdbapi.com?apikey=c0c37462';

const App = () => {
  // Declare state variables
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [movies, setMovies] = useState([]); // State to store the movie data

  const searchMovies = async (title) => {
    const response = await fetch(`${APIURL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search); // Assuming the API returns a 'Search' property containing the movie data
  }

  useEffect(() => {
    // Your useEffect logic goes here (if you have any)
  }, []);

  return (
    <div className="app">
      <h1>MovieApp</h1>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2></h2>
        </div>
      )}
    </div>
  );
}

export default App;
