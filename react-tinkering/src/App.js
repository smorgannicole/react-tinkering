import './App.css'
import List from './components/List'

const App = () => {
  const genres = [
    "Sci-Fi",
    "Comedy",
    "Drama",
    "Horror",
    "Action",
]
const handleSelectedGenre = (genre) => {
  console.log(genre)
}
  return (
    <>
    <List genres={genres} heading="Genres" onSelectedGenre={handleSelectedGenre} />
    </>
  )
}

export default App
