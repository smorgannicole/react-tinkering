import './App.css'
import React, { useEffect, useState } from 'react';

const App = () => {

const [movies, setMovies] = useState([]);

useEffect(() => {
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=3de804b58dc7ead28d0c9b33edc1d908'
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  fetchMovies();
}, []);

  return (
    <>
    <h1>Now Playing Movies</h1>
      <ul className='now-playing-container d-flex'>
        {movies.map((movie) => (
          <li key={movie.id}className='now-playing-movie col-3 d-flex'>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>{movie.release_date}</p>
            <p>{Math.round(movie.vote_average)}/10</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App

