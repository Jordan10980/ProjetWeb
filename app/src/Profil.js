import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, json, useNavigate, useLocation } from 'react-router-dom';
import airplane from './image/airplane.png'
import './Profil.css'



const Profil=()=>{

    const [data, setData] = useState({});
    const location = useLocation();

    const params = new URLSearchParams(location.search);

    const [pseudo, setPseudo] = useState(null);
    const [avatar, setAvatar] = useState(null);
    const [mail, setMail] = useState(null);
    const [id, setId] = useState(null);
    const [pathimg, setPathImg] = useState(null);

    useEffect(() => {
        // This will run as soon as the component renders
        handleClick();
      }, []); 

    const handleClick = () => {

    fetch('http://localhost/php/profil.php', {
        method: 'POST',
        body: params
      })
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');
            setPseudo(lines[0])
            window.myGlobalPseudo = lines[0];
            setAvatar(lines[1])
            setMail(lines[2])
            window.myGlobalMail = lines[2];
            setId(lines[3])
            window.myGlobalId = lines[3];
            setPathImg(require("./membres/avatars/"+String(lines[1])));
            window.myGlobalPath = pathimg;
        })
        .catch(error => {
        });
    };

    

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
    <h3>Profil de {pseudo}</h3>
    </section>

    

    <section className="profil">
    {/* <img src={require('./membres/avatars/default.jpeg')} alt="Logo" /> */}
    <img src={pathimg} alt="Logo" />
    <div className='mail'>Pseudo : {pseudo}</div>
    <div className='mail'>Mail : {mail}</div>
    {/* <div className='avatar'>Avatar : {avatar}</div> */}
   {/* <div className='avatar'>chemin : {pathimg}</div> */}
   {/* <div className='avatar'>Id : {id}</div> */}



      
      
    

   {/* /Users/jordandohou/ProjetWeb/app/membres/avatars/default.jpeg */}
   <br />

   {/* <img src={te} alt=""/> */}
    
    {/* <button onClick={handleClick}>Afficher mes informations personnelles</button>; */}
    <br /> <br /> <br /> <br />
    


        <Link to={`/editionprofil?id=${id}`}class="valid2">
            Editer mon profil
        </Link> 
        
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