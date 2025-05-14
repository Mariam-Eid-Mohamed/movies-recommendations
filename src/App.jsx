
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import React from 'react'
import { Navigate, Route, useNavigate } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Tv from './Components/Tv';
import Movies from './Components/Movies';
import People from './Components/People';
import Login from './Components/Login';
import Register from './Components/Register';
import NotFound from './Components/NotFound';
import { jwtDecode } from 'jwt-decode';
import { useState ,useEffect} from 'react';
import DetailsPeople from './Components/Details/DetailsPeople';
import DetailsMovies from './Components/Details/DetailsMovies';
import DetailsTv from './Components/Details/DetailsTv';



export default function App() {
  const navigate=useNavigate();
const [userData, setUserData] = useState(null)
  function saveDataUser(){
   let encodedToken= localStorage.getItem("Token_value");
   let decodedToken= jwtDecode(encodedToken);
   setUserData(decodedToken);
  

  }
  function logOut(){
    localStorage.removeItem("Token_value");
    setUserData(null);
    navigate("./login")
    
  }
  function ProtectedRoutes(props){
    if(localStorage.getItem("Token_value")==null){//mesh 3amla login le2en mafish token
    return(
     <Navigate to={"/login"}/>
      
    )}
    else{
    return (props.children);
    }
  }
  useEffect(() => {
    if(localStorage.getItem("Token_value")!=null)
   saveDataUser();
  
  }, [])//will occur only once when the app mounts
  
  return (
    <>

    <Navbar userData={userData} logOut={logOut}/>
    <div className="container">

    <Routes>
    <Route path="login" element={<Login saveDataUser={saveDataUser}/>}/>
    <Route path="register" element={<Register/>}/>
    <Route path="/" element={<ProtectedRoutes><Home/></ProtectedRoutes>}/>
    <Route path="home" element={<ProtectedRoutes><Home/></ProtectedRoutes>}/>
    <Route path="movie/:id" element={<ProtectedRoutes><DetailsMovies/></ProtectedRoutes>}/>
    <Route path="person/:id" element={<ProtectedRoutes><DetailsPeople/></ProtectedRoutes>}/>
    <Route path="movies" element={<ProtectedRoutes>
     <Movies/> </ProtectedRoutes>}/>
     <Route path="tv/:id" element={<ProtectedRoutes><DetailsTv/></ProtectedRoutes>}/>
    <Route path="people" element={ <ProtectedRoutes> <People/></ProtectedRoutes>}/>
    <Route path="tv" element={ <ProtectedRoutes> <Tv/></ProtectedRoutes>}/>
    <Route path="*" element={<NotFound/>}/>
   </Routes>
   
   
 
    </div>


    </>
  )
}
