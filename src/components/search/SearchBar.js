// import React, { useState, useEffect } from 'react';
// import MovieList from '../movies/MovieList';

//   export const SearchBar = (props) => {
//   const [input, setInput] = useState('');
//   const [movieListDefault, setMovieListDefault] = useState();
//   const [movieList, setMovieList] = useState();

//   const fetchData = async () => {
//     return await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=ec184360c1a6b89d3c57e88523457d51&language=en-US')
//       .then(response => response.json())
//       .then(data => {
//          setMovieList(data) 
//          setMovieListDefault(data)
//        });}

//   const updateInput = async (input) => {
//      const filtered = movieListDefault.filter(movie => {
//       return movie.title.toLowerCase().includes(input.toLowerCase())
//      })
//      setInput(input);
//      setMovieList(filtered);
//   }

//   useEffect( () => {fetchData()},[]);
	
//   return (
//     <>
//       <h1>Movie List</h1>
//       <SearchBar 
//        input={input} 
//        onChange={updateInput}
//       />
//       <MovieList movieList={movieList}/>
//     </>
//    );
// }

