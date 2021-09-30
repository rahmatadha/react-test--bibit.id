import axios from "axios";
import React, { useEffect, useState } from "react";

const MovieInfo = (props) => {
    const [movieInfo, setMovieInfo] = useState();
    const {searchValue} = props;
    useEffect (() => {
        axios 
        .get (`http://www.omdbapi.com/?s=${searchValue}&apikey=a6b41fb0`)
        .then((res) =>setMovieInfo("movie info",res.data));
    },[searchValue]);
    return (
        <>
        <div className='container-info'>
            <img className='cover-image' src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"/>
            <div className='info-column'>
            <span className='movieName'>Movie iron man</span>
            <span className='movieInfo'>IMBD Reting : <span>9.0</span></span>
            <span className='movieInfo'>Year : <span>2008</span></span>
            <span className='movieInfo'>Actor : <span>Robert Downey Jr., Gwyneth Paltrow, Terrence Howard</span></span>
            <span className='movieInfo'>Genre : <span>Action, Adventure, Sci-Fi</span></span>
            <span className='movieInfo'>Directo : <span>Jon Favreau</span></span>
            <span className='movieInfo'>Plot : <span>After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.</span></span>
            </div>
        </div>
        </>
    )
}

export default MovieInfo;