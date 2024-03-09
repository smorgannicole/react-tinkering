import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ScrollBar({ movies }) {



  var settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "15%",
    onSwipe: true,
    appendDots: dots => (
      <div
        style={{

          color: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          fontSize: "20px",
          transition: "font-size 0.2s", 
  }}
  onMouseEnter={(e) => {
    e.target.style.fontSize = "24px"
    e.target.style.color = "#fff"
  }}
  onMouseLeave={(e) => {
    e.target.style.fontSize = "20px"
    e.target.style.color = "rgba(255, 255, 255, 0.5)"
  }}
      >
        •
      </div>
    )
  }

  return (
    <>
      <div className="slick-container">
        <Slider className='slick-slider' {...settings}>
          {movies.map((movie, index) => (
            <div key={movie.id} className='movie-on-scroll'>
              <img className='img-on-scroll' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
              <div class="overlay"></div>
              <div class="hover-content flex flex-col">
                <h2 className='np-slider-title'>{movie.title}</h2>
                <p>{movie.overview}</p>
                <p>{movie.release_date}</p>
                <p>{Math.round(movie.vote_average)}/10</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}