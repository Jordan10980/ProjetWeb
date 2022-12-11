import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import airplane from './image/airplane.png'
import iut from './image/iut.jpeg'
import './Apropos.css'

const Apropos=()=>{
    return( 
        <>

        <header className="header">

            <a href="" className="logo"><img src={airplane} alt=""/>JMS</a>

            <nav className="navbar">
                <Link to="/" className="nav-link">Accueil</Link>
                <Link to="/api" className="nav-link">Api</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
                <Link to="/apropos" className="nav-link">A propos</Link>
                <Link to="/connexion" className="nav-link">Se connecter</Link>
            </nav>

            <div id="menu-btn" className="fas fa-bars"></div>

        </header>

        <section className="presite">
            <h3>A propos </h3>
            <p>Explication fonctionnement de notre site, la section d'apres photo de nous et presentation de l'equipe  
                et puis la derniere section presentation de notre projet web de l'iut et objetif   </p>
        </section>

        <section className="projet">
            <div className="text">
                <h3>Notre projet étudiant</h3>
                <p>Nous avions pour objectif de développer un site web en intégralité du backend au frontend utlisant des APIs et les technologies suivantes 
                    : html, css, javascript, reactJS, Xamp, node.js,... . </p>
            </div>
            <div className="images">
            <img src={iut} alt=""/>
            </div>
        </section>

        <section className="prequipe">
            <h3>Notre équipe </h3>
            <p>Nous somme une équipe de trois développeurs étudiant à l'IUT Paris Cité : Jordan Dohou, Mathis Baumert et Sathusan Krishnapakaran </p>
        </section>

        <footer className="footer">
        <div className="box-container">

            <div className="box">
                <h3>navigation</h3>
                <Link to="/" className="fas fa-arrow-right">Accueil</Link>
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

export default Apropos;