import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { imgPath } from '../../../constant/imgPath'


export default function TvCard({tv}) {
 

  return (
    <div  className="col-md-2">
    <Link to={`/tv/${tv.id}` }  >
    <div className='w-100'>
     <img src={imgPath(tv.poster_path)}  className="w-100"alt={tv.original_name} />
     <h4 className='text-truncate text-center' data-toggle="tooltip" data-placement="top" title={tv.name} 
     >{tv.name}</h4>
     </div></Link>
     </div>
  )
}
