import React from 'react'
import { Link } from 'react-router-dom';
import NavLinkcom from './Components/NavLinkcom'
let NavLinks=[{name:"Home",path:"home"},{name:"Movies",path:"movies"},{name:"People",path:"people"},
  {name:"Tv",path:"tv"}];

export default function Navbar
({userData ,logOut}) {
  return ( 
    <nav className="navbar navbar-expand-lg bg-transparent navbar-dark">
    <div className="container">
      <Link className="navbar-brand" to="home">MovieMingle</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
       {userData &&(
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         {NavLinks.map((link)=>(
           <NavLinkcom link={link} key={link.name}/>
 
         ))}
         </ul>

       )

      }
      
      {/* another ul to make navbar right part */}

{/* 7atet align-items-center 3alashan logout tel3et le fo2 3alashan makontesh 7ataha fi anchor tag fa 3ayza awasten el denya 3ala y axis we kaman navbar class already wa5ed d-flex */}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
   {userData &&(
     <li className="nav-item">
     <i className="fa-brands fa-facebook me-3 fs-4"></i>
     <i className="fa-brands fa-twitter  me-3 fs-4"></i>
     <i className="fa-brands fa-instagram  me-3 fs-4"></i>

   </li>
   )

   }
{userData==null&&(
  <>    <li className="nav-item">
  <Link className="nav-link active" aria-current="page" to="login">Login</Link>
</li>
<li className="nav-item">
  <Link className="nav-link active" aria-current="page" to="register">Register</Link>
</li>
  </>

)

}
 {userData &&(
   <li className="nav-item" role="button" onClick={logOut}>
   Logout
 </li>
 )

 }
        </ul>
      </div>
    </div>
  </nav>
  )
}
