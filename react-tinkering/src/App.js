import './App.css'
import React, { useEffect, useState } from 'react'

const App = () => {

const [movies, setMovies] = useState([])
const [search, setSearch] = useState("")

useEffect(() => {
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=3de804b58dc7ead28d0c9b33edc1d908'
      )
      const data = await response.json()
      setMovies(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  fetchMovies()
}, [])


const handleSearchInputChange = e => {
  const searchInput = e.target.value
  const lowerCaseInput = searchInput.toLowerCase()
  setSearch(lowerCaseInput)
}

const filteredMovies = movies.filter(movie =>
  movie.title.toLowerCase().includes(search)
)

  return (
    <>
    <h1>Now Playing Movies</h1>
    <input
        type="text"
        id="search-now-playing"
        placeholder="Search movies..."
        value={search}
        onChange={handleSearchInputChange}
      />
    <ul className='now-playing-container d-flex'>
        {filteredMovies.map((movie) => (
          <li key={movie.id} className='now-playing-movie col-3 d-flex'>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
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

