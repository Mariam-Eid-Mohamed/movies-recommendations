import React from 'react'
import { Link } from 'react-router-dom'
import { imgPath } from '../../../constant/imgPath'
import imgPerson from "../../../assets/person-placeholder.jpg"
export default function PersonCard({person}) {


  return (
    <div  className="col-md-2 ">
    <Link to={`/person/${person.id}`}>
    <div className='w-100 h-100 '>
    <img src={person?.profile_path?imgPath(person.profile_path):imgPerson}  className=" w-100"alt={person.original_name}  style={{ objectFit: 'cover', height: '300px' }} />
    <h4 className='text-truncate' data-toggle="tooltip" data-placement="top" title={person.name} 
    >{person.name}</h4>
    </div></Link>
    </div>
  )
}
