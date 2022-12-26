import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, json, useNavigate, useLocation } from 'react-router-dom';
import airplane from './image/airplane.png'
import './Profil.css'

const Profil=()=>{

    const [data, setData] = useState({});

    const location = useLocation();
    const { param1, param2 } = location.state;

    useEffect(() => {
        fetch('http://localhost/php/profil.php')
        .then(response => response.json())
        .then(responseData => setData(responseData));
    }, []);


    return( 
    <>

    <header className="header">

        <a href="" className="logo"><img src={airplane} alt=""/>Flight Tracker</a>

        <nav className="navbar">
            <Link to="/ProjetWeb" className="nav-link">Accueil</Link>
            <Link to="/api" className="nav-link">Api</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/apropos" className="nav-link">A propos</Link>
            <Link to="/connexion" className="nav-link">Se connecter</Link>
        </nav>

        <div id="menu-btn" className="fas fa-bars"></div>

    </header>

    <section className="contain">
    <h3>Profil de </h3>
    
  
    </section>

    <section className="profil">
        
    <p>Name: {data.name}</p>
    <p>Age: {data.age}</p>

    <p>Param1: {param1}</p>
      <p>Param2: {param2}</p>
    

    


        <Link to="/editionprofil" class="valid2">Editer mon profil</Link>
        <br />
        <br />
        <Link to="/sedeconnecter" class="valid2">Se déconnecter</Link>
    </section>


    <footer className="footer">
        <div className="box-container">

            <div className="box">
                <h3>navigation</h3>
                <Link to="/ProjetWeb" className="fas fa-arrow-right">Accueil</Link>
                <Link to="/api" className="fas fa-arrow-right">Api</Link>
                <Link to="/contact" className="fas fa-arrow-right">Contact</Link>
                <Link to="/apropos" className="fas fa-arrow-right">A propos</Link>
                <Link to="/connexion" className="fas fa-arrow-right">Se connecter</Link>
            </div>

            <div className="box">
                <h3>Contact</h3>
                <p> 01 02 03 04 05</p>
                <p>143 avenue de Versaille, 75016 Paris</p>
                <p>jms@voirdesavions.fr</p>
            </div>

            <div className="box">
                <h3>Suivez-nous</h3>
                <a href="#"><i className="fab fa-linkedin-in"></i>linkedin</a>
                <a href="#"><i className="fab fa-facebook-f"></i>facebook</a>
                <a href="#"><i className="fab fa-instagram"></i>instagram</a>
                <a href="#"><i className="fab fa-twitter"></i>twitter</a>
            </div>
        </div>
        <div className="log"><a href="#" className="logo"><img src={airplane} alt=""/></a></div>
        <div className="credit">created by <span> Jordan | Sathusan | Mathis | </span></div>

    </footer>


    <script src="Home.js"></script>

    </>





    
    )
}

export default Profil;