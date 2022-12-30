import React, { useState, useEffect, useRef } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, json, useNavigate } from 'react-router-dom';
import airplane from './image/airplane.png'
import './Profil.css'
import {FaBars , FaTimes} from "react-icons/fa"

const Sedeconnecter=()=>{

    const navRef =useRef();

    const showNavbar =  ()=>{
        navRef.current.classList.toggle("responsive_nav"); 
    }

    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
         navigate('/connexion');
        }, 1800);
    
        return () => clearInterval(interval);
      }, [navigate]);


    return( 
    <>

        <header>

        <a href="" className="logo"><img src={airplane} alt=""/>Flight Tracker</a>

        <nav ref={navRef }>
            <Link to="/ProjetWeb" class="nav-link">Accueil</Link>
            <Link to="/api" class="nav-link">Api</Link>
            <Link to="/contact" class="nav-link">Contact</Link>
            <Link to="/apropos" class="nav-link">A propos</Link>
            <Link to="/connexion" class="nav-link">Se connecter</Link>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}> 
                <FaTimes /> 
            </button>
        </nav>
        <button className='nav-btn'  onClick={showNavbar} > 
        <FaBars /> 
        </button>

        </header>


    <section className="contain">
    <h3>Vous allez être redirigé <br />vers la <br /> page de connexion.</h3>
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

export default Sedeconnecter;