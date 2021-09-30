// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import MovieList from './Component/MovieList';
import MovieListHeading from './Component/MovieLIstHeadling';
import SearchBox from './Component/SeacrhBox';
import MovieInfo from './Component/MovieInfo';

function App() {
  const [ movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState ("");
  const [ selectedMovie, onMovieSelect] = useState();

  const getMovieRequest = async (searchValue) => {
    const url =`http://www.omdbapi.com/?s=${searchValue}&apikey=a6b41fb0`;

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    if(responseJson.Search){
      setMovies(responseJson.Search);
    }

  };

  useEffect (() => {
    getMovieRequest(searchValue);
  }, [searchValue]);
  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
        <MovieListHeading headling='movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        {selectedMovie && <MovieInfo selectedMovie={selectedMovie} />}
      </div>
      <div className='row'>
        <div className='col'>
        <MovieList movies={movies} onMovieSelect={onMovieSelect} data-bs-toggle="modal" data-bs-target="#exampleModal" />
        </div>
      
      </div>
     
    </div>
  );
}

export default App;
