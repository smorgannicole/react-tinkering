import React from 'react'
import { useState } from 'react'

const NowPlaying = ({ movies }) => {
  const [search, setSearch] = useState("")


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

export default NowPlaying