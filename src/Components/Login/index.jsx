import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';

export default function Login({saveDataUser}) {

  const navigate=useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [errorsMessage, setErrorsMessage] = useState([]);


const [formData, setFormData] = useState({
 
  email:"",
  password:"",
  
})
// betes7ab el data men el input
function getData(e){  
  let data ={...formData};
  //ba8ayar el key 3ala hasab kemet el name attribute beta3 kol input
  data[e.target.name]=e.target.value;
  setFormData(data);
}
  
function SubmitHandler(e){
  e.preventDefault();//3alashan may3melsh reloading

  let validate=validation();
  if(validate?.error)
  setErrorsMessage(validate?.error?.details);

else{
    axios.post("https://cors-anywhere.herokuapp.com/http://hawas.runasp.net/api/v1/Login",formData).then((res)=>{
      console.log(res.data.jwt)
      localStorage.setItem("Token_value",res.data.jwt) ;
      saveDataUser();
    navigate("/home");
  })
  .catch((err)=>{console.log(err);
    setErrorMessage(err.response.data);

  });


}
}
function validation(){
  let schema=Joi.object
  (
    {
    
      email:Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    
    }
  )
  return schema.validate(formData,{abortEarly:false});
}
  return (
   <>
   {/* ternary opretaor */}
   {errorMessage.length?<h1 className='alert alert-danger h6'>{errorMessage}</h1>:<></>}
   {/* conditional operator */}
   {errorsMessage.length>0 &&
errorsMessage.map((error,i)=>(<h1 key={i} className='alert alert-danger h6'>{error.message}</h1>))

   }
   <div className='my-5 w-75 mx-auto'>
    <h1 className='text-center'>Login Form</h1>
    <form  onSubmit={SubmitHandler}>

   
    <label className='form-label' htmlFor="">Email</label>
    <input type="email" className='form-control mb-3' onChange={getData} name='email' />
    <label className='form-label' htmlFor="">Password</label>
    <input type="password" className='form-control mb-3' onChange={getData} name='password' />
    <button type='submit' className='btn btn-outline-info'>Login</button>
   </form>

   </div>
   
   </>
  )
}
