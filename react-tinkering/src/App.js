import './App.css'
import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import NowPlaying from './components/NowPlaying'
import ScrollBar from './components/ScrollBar'


const App = () => {

  const [movies, setMovies] = useState([])

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

  return (
    <>
    <div className='app-wrapper'>
      <h1>Now Playing Movies</h1>
      <Nav /> 
      {/* <NowPlaying movies={movies} /> */}
      <ScrollBar movies={movies} />
    </div>
    </>
  )
}

export default App

