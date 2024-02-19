import { useState } from "react"

const List = ({ genres, heading, onSelectedGenre }) => {
    
    const [selectedIndex, setSelectedIndex] = useState(-1)

    return (
        <>
            <h1>{heading}</h1>
            <ul className="list-group">
                {genres.map((genre, index) => <li className={ selectedIndex === index ? "list-group-item active" : "list-group-item" } key={genre} onClick={() => {setSelectedIndex(index); onSelectedGenre(genre)}}>{genre}</li>)} 
            </ul>
        </>
    )
}
export default List