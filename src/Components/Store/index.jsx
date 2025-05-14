import { createContext ,useState,useEffect} from "react";

import axios from "axios";

export let ContextMovies=createContext(0);


export function ContextMoviesProvider(props) {
  const [movies, setMovies] = useState([]);
  const [people, setPeople] = useState([]);
  const [tv, setTv] = useState([]);
  let  [page, setPage] = useState(1)
 
  function getData(type,callback) {
    const timeWindow = 'day'; 
    const apiKey = '8fd8b99a7a13ae3f94b8d8288b84ad49'; 
    const url = `https://api.themoviedb.org/3/trending/${type}/${timeWindow}?api_key=${apiKey}&adult=false&page=${page}`;
  
    axios.get(url)
      .then((res) => {
        console.log(res.data.results);
       callback(res.data.results); 
      })
      .catch((err) => {
        console.log(err);
      });
  }
  

  useEffect(()=>{
  getData("movie",setMovies);
  getData("person",setPeople);
  getData("tv",setTv);
  },[]); 

  useEffect(()=>{
    getData("movie",setMovies);
    },[page]); 
  
  return<>
  <ContextMovies.Provider value={{movies,people,tv,setPage}}>
    {props.children}
  </ContextMovies.Provider>
  </>
 
}



