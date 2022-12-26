import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import airplane from './image/airplane.png'
import './Contact.css'

function Contact() {
    const [formData, setFormData] = useState({
        to: '',
        subject: '',
        message: ''
      });
      const [response, setResponse] = useState(null);
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
      };
    
      const handleSubmit = event => {
        event.preventDefault();
    
        fetch("http://localhost/php/sendmail.php", {
          method: 'POST',
          body: JSON.stringify({
            data: formData,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(response => response.text())
          .then((data) => {
            setResponse(data);
            // console.log('Success:', data);
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
        <h3>Contact</h3>
        </section>

        <div>
          <section className="contact_form">
              <form onSubmit={handleSubmit}>
                  
                  <input type="email" placeholder="Votre mail" id="to" name="to" onChange={handleChange} required/>
                  <br />
                  <input type="text" placeholder="Objet" id="subject" name="subject" onChange={handleChange} required/>
                  <br />    
                  <textarea placeholder="Ecrivez un message ..." id="message" name="message" onChange={handleChange} required/>
                  <br /> 
                  <input type="submit" name="formcontact" id="btn" value="Envoyer" />
                    
                  </form>
                  {response ? <p>{response}</p> : null}
            </section>

        </div>




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

export default Contact;