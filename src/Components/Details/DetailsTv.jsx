import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react';
import { imgPath } from '../../constant/imgPath';
import { useLocation, useParams } from 'react-router-dom';




export default function DetailsTv() {
  const location=useLocation();
  const [details, setDetails] = useState(null);
  let {id}=useParams();
  let detype= location.pathname.includes("tv")&& "tv";
  
  function getDetails(){
    const apiKey = '8fd8b99a7a13ae3f94b8d8288b84ad49';  
    const url = `https://api.themoviedb.org/3/${detype}/${id}?api_key=${apiKey}`;
  
    axios.get(url)
    .then((res)=>{
      setDetails(res.data);
    }).catch((err)=>{console.log(err)});

  }
  useEffect(() => {
    getDetails();
  }, [])
  

  return (
  <div className="row">
    <div className="col-md-3">
<img src= {imgPath(details?.poster_path)} alt=""className='w-100 ' />
    </div>
    <div className="col-md-8 offset-1">
      <p>{  details?.overview }</p>
    </div>
  </div>
  )
}
