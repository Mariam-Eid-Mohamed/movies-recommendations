import React from 'react'
import { useContext } from 'react';
import TvCard from '../Home/components/Tvcard';
import { ContextMovies } from '../Store';
export default function Tv() {
  
  
const{tv}=useContext(ContextMovies);
return (
  <div className="row">
    {Array.isArray(tv)&&tv.length?
   tv.map((tv,i)=>(<TvCard tv={tv} key={i}/>)):<></> }
  </div>
 
)
}
