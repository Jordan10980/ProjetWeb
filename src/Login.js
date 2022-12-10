import { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import React,{ useState } from "react";

const Login=()=>{

    let navigate = useNavigate();

    const [user,setUser]=useState({email:'',password:''})

    const handleChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value}); 
    }


    const submitForm=(e)=>{
        e.preventDefault(); 
       const sendData = {
        
            email:user.email,
            first_name:user.first_name,
            password:user.password
            

        }

       // console.log(sendData);
       

       fetch( "http://localhost:80/api/login.php", {
            method : "POST",
            body : JSON.stringify(sendData),
        }).then( function(result){
            if(result.status === 200){
                window.localStorage.setItem('email', user.email);
                window.localStorage.setItem('userName', (user.name+ ' ' +user.first_name));  
                navigate(`/dashboard`);
            }else{
                alert('Login Failed');

        }
      })  
    }


    return(
        <form onSubmit={submitForm}>
        <div className="main-box">
        <div className="row">
             <div className="col-md-12 text-center"> <h1>Login Page</h1></div>
        </div>
        
        <div className="row">
           <div className="col-md-6">Email:</div>
           <div className="col-md-6"><input type="email" name="email"
           onChange={handleChange} value={user.email} /></div>
        </div>
        <div className="row">
           <div className="col-md-6">Password:</div>
           <div className="col-md-6"><input type="password" name="password"
            onChange={handleChange} value={user.password}
            /></div>
        </div>


        <div className="row">
           <div className="col-md-12 text-center">
               <input type="submit" name="submit"  className="btn btn-success" value="Plese Login" />
           </div>
           
        </div>
        </div>
        </form>
    )
}

export default Login;