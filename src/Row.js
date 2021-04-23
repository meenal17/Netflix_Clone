import React, { useState,useEffect } from "react";
import axios from "./axios";
const base_url = "https://image.tmdb.org/t/p/original"

function Row({title,fetchUrl}){
    const[movies,setMovies]=useState([]);
    useEffect(()=>{
// if [],run once when the row loads,dont run again
async function fetchData() {
const request = await axios.get(fetchUrl);
// "https://api.themoviedb.org/3" it returns when the the peace of function is run.
 //console.log(request);
setMovies(request.data.results);
return request;
}
fetchData();
    },[fetchUrl]);
   // console.log(movies);
    return(
        <div className='row'>
           <h2>{title}</h2>
        <div className="row_posters">
              {movies.map(movie =>(
            <img src={ ` ${base_url}${movie.poster_path}`} alt={movie.name}/>
             ))}  
        </div>
    </div>
    )
}
export default Row