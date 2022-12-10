import { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import React,{ useState } from "react";

const Header =()=>{
  const[auth, setAuth] = useState({email: ''});
  const[user, setUser] = useState();
  let navigate = useNavigate();
  useEffect(()=>{
    //console.log(auth)
    var userName = localStorage.getItem('userName');
    setAuth(userName);
    setUser(userName);
  },
  [])

  const LogOut = ()=>{
    localStorage.removeItem('email');
    localStorage.clear();
    navigate('/login');
  }
    return( 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar w/ text</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to="/" class="nav-link">Home</Link>
      </li>
      <li class="nav-item">
        <Link to="/register" class="nav-link">Register</Link>
      </li>
      <li class="nav-item">
        <Link to="/login" class="nav-link">Login</Link>
      </li>
    </ul>
    <span class="navbar-text">
      Welcome: {user} | <Link to='' onClick={LogOut}>LogOut</Link>
    </span>
  </div>
</nav>
    )
}

export default Header;
