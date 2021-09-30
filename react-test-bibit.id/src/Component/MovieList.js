import React from "react";

const MovieList = (props) => {
    return (
        <>
        {props.movies.map((movie, index) => (
        <div className='image-container d-flex justify-content-start m-3 test' onClick={()=> props.onMovieSelect(movie.imdbID)}>
            <div>
            <img style={{width:180}} src={movie.Poster} alt='movies' />
            </div>
            <h4 className='mx-3'>{movie.Title}
            <h6 className ='my-2'>Years {movie.Year}</h6>
            <h6 className ='my-2'>Years {movie.Type}</h6>
            </h4>
           
            <div className ='overlay d-flex align-item-center justify-content'>

            </div>
        </div>))}
        </>
    )
}

export default MovieList;