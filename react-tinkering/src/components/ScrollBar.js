import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ScrollBar({ movies }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
        {/* <div className='scroll-wrapper'> */}
          <Slider {...settings}>
            {movies.map((movie, index) => (
            <div key={movie.id} className='movie-on-scroll'>
                {/* <img className='img-on-scroll' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" /> */}
                <img className='img-on-scroll' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
                {/* <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <p>{movie.release_date}</p>
                <p>{Math.round(movie.vote_average)}/10</p> */}
            </div>
            ))}
          </Slider>
        {/* </div> */}
    </>
  )
}