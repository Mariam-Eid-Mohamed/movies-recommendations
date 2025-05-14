import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react';
import { imgPath } from '../../constant/imgPath';
import { useLocation, useParams } from 'react-router-dom';

import imgPerson from  "../../assets/person-placeholder.jpg"

export default function DetailsPeople() {
  const [details, setDetails] = useState(null);
  let {id}=useParams();
  const location=useLocation();
 let detype= location.pathname.includes("person")&& "person";
  
  function getDetails(){
    const apiKey = '8fd8b99a7a13ae3f94b8d8288b84ad49';  
    const url = ` https://api.themoviedb.org/3/${detype}/${id}?api_key=${apiKey}`;
  
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
<img src= {details?.profile_path?imgPath(details?.profile_path):imgPerson} alt=""className='w-100 ' />
    </div>
    <div className="col-md-8 offset-1">
     
      <p>{ details?.biography?details.biography:details?.name  }</p>

    </div>
  </div>
  )
}
