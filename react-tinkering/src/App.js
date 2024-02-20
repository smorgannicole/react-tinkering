import './App.css'
import List from './components/List'
import Button from './components/Button'
import { useState } from 'react'
import Alert from './components/Alert'

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

const [alertVisible, setAlertVisibility] = useState(false)

  return (
    <>
    <List genres={genres} heading="Genres" onSelectedGenre={handleSelectedGenre} />
    <Button color="secondary" onClick={() => setAlertVisibility(true)}>My Button</Button>
    {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>}
    </>
  )
}

export default App
