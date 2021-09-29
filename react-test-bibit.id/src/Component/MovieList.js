import React from "react";

const MovieList = (props) => {
    return (
        <>
        {props.movies.map((movie, index) => (
        <div className='image-container d-flex justify-content-start m-3 test'>
            <div>
            <img src={movie.Poster} alt='movies' />
            </div>
            
            <div className ='overlay d-flex align-item-center justify-content'>

            </div>
        </div>))}
        </>
    )
}

export default MovieList;