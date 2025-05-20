import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';

export default function Register() {

  const navigate=useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [errorsMessage, setErrorsMessage] = useState([]);


const [formData, setFormData] = useState({
  userName:"",
  dateOfBirth:"",
  email:"",
  password:"",
  rePassword: ""
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
    axios.post("http://hawas.runasp.net/api/v1/Register",formData).then((res)=>{console.log(res); 
    navigate("/login");
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
      userName: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
      dateOfBirth: Joi.date()
       
    ,
    
      email:Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
      rePassword:  Joi.ref('password'),

    }
  )
  return schema.validate(formData,{abortEarly:false});
}
  return (
   <>
   {/* ternary opretaor */}
   {errorMessage.length?(<h1 className='alert alert-danger h6'>{errorMessage}</h1>):(<></>)}
   {/* conditional operator */}
   {errorsMessage.length>0 &&
errorsMessage.map((error,i)=>(<h1 key={i} className='alert alert-danger h6'>{error.message}</h1>))

   }
   <div className='my-5 w-75 mx-auto'>
    <h1 className='text-center'>Registration Form</h1>
    <form  onSubmit={SubmitHandler}>
    <label className='form-label' htmlFor="">User Name</label>
    <input type="text" className='form-control mb-3' onChange={getData} name='userName' />
    <label className='form-label' htmlFor="">Birth Date</label>
    <input type="date" className='form-control mb-3' onChange={getData} name='dateOfBirth' />
    <label className='form-label' htmlFor="">Email</label>
    <input type="email" className='form-control mb-3' onChange={getData} name='email' />
    <label className='form-label' htmlFor="">Password</label>
    <input type="password" className='form-control mb-3' onChange={getData} name='password' />
    <label className='form-label' htmlFor="">Confirm Password</label>
    <input type="password" className='form-control mb-3' onChange={getData} name='rePassword' />
    <button type='submit' className='btn btn-outline-info'>Register</button>
   </form>

   </div>
   
   </>
  )
}
