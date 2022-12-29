import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, json, useNavigate, useLocation } from 'react-router-dom';
import airplane from './image/airplane.png'
import './Editionprofil.css'


const Editionprofil=()=>{

  const [pseudo, setPseudo] = useState(window.myGlobalPseudo);
  const [mail, setMail] = useState(window.myGlobalMail);

    const [formData, setFormData] = useState({
        id:window.myGlobalId,
        newpseudo: pseudo,
        newmail: mail,
        newmdp1: '',
        newmdp2: '',
      });
      const [response, setResponse] = useState(null);
      
      const navigate = useNavigate();
      
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
        if (name === "newpseudo") {
            setPseudo(event.target.value);
          }
        if (name === "newmail") {
          setMail(event.target.value);
        }
      };

      const handleSubmit = (event) => {
           event.preventDefault();

           fetch("http://localhost/php/editionprofil.php", {
            method: 'POST',
            body: JSON.stringify({
              data: formData,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => response.text())
            .then((data) => {
              setResponse(data);

              if (data.includes("Votre pseudo a bien été modifié\n")) {
              // console.log(data);
              setTimeout(() => {
                navigate(`/profil?id=${window.myGlobalId}`);
              }, 1300);
            }
            else if (data.includes("Votre adresse mail a bien été modifié\n")) {
              // console.log(data);
              setTimeout(() => {
                navigate(`/profil?id=${window.myGlobalId}`);
              }, 1300);
            }
            else if (data.includes("Votre mot de passe a bien été modfifié !\n")) {
              // console.log(data);
              setTimeout(() => {
                navigate(`/profil?id=${window.myGlobalId}`);
              }, 1300);
            }else{
              setResponse(data);
              console.log(data);
            }
            })
            .catch((error) => {
              console.error(error);
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
        <h3>Edition du profil</h3>
        <p className='info'>!!! Vous aurez bientôt la possibilité de changer l'image de votre avatar !!!</p>
        <br /><br />
    </section>

    <section className="edition_profil">
        <form onSubmit={handleSubmit} enctype="multipart/form-data">
            
            <input type="text" placeholder="Nouveau pseudo" name="newpseudo" value={pseudo} onChange={handleChange} />
        <br />
            <input type="email" placeholder="Nouveau mail" name="newmail" value={mail} onChange={handleChange}  />
        <br />
            <input type="password" placeholder="Nouveau mot de passe" name="newmdp1" onChange={handleChange} />
        <br />
            <input type="password" placeholder="Confirmez votre mdp" name="newmdp2" onChange={handleChange} />
        <br /><br />

        <input type="submit" name="editprofil" id="btn1" value="Mettre à jour mon profil !"/>

        </form>
        
        {response ? <p>{response}</p> : null}

        <br />
        <br />


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

export default Editionprofil;