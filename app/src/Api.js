import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import airplane from './image/airplane.png'
import './Api.css'

const Api=()=>{
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
            <h3>API - notre map</h3>
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

export default Api;