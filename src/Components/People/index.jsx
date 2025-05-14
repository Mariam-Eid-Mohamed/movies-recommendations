import PersonCard from "../Home/components/PersonCard";
import { ContextMovies } from "../Store";


import { useContext } from "react";
export default function People() {
  const{people}=useContext(ContextMovies);
  return (
    <div className="row">
       {Array.isArray(people)&&people.length?people.map((person,i)=>(
        <PersonCard person={person} key={i}/>
       )):<></>

}
    </div>
   
  )
}
