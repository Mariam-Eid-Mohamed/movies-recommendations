import React, { useContext } from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../Home/components/Moviecard';
import { ContextMovies } from '../Store';


export default function Movies() {

let numbers=new Array(5).fill().map((item,i)=>(i+1));
const{movies,setPage}=useContext(ContextMovies);
  return (
    <div className="row">
      {Array.isArray(movies)&&movies.length?
     movies.map((movie,i)=>(<MovieCard movie={movie} key={i}/>)):<></> }
     <nav aria-label="...">
  <ul className="pagination pagination-lg  d-flex justify-content-center p-4">
  {numbers.map((num,i)=>(  <li className="page-item " aria-current="page" key={num} onClick={()=>setPage(num)}>
    <a className="page-link bg-transparent text-white" href="#">{num}</a>
    </li>))}
    
  </ul>
</nav>
    </div>
   
  )
}
