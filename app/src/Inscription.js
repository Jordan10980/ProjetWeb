import { useState } from "react";
import axios from 'axios';
import{useNavigate} from "react-router-dom";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import airplane from './image/airplane.png'
import './Inscription.css'

const Register=(props)=>{

    let history = useNavigate(); // Use for Navigate on Previous

    const[data, setData]= useState({
        pseudo:"",
        mail:"",
        mail2:"",
        mdp:"",
        mdp2:""

    })

    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value });

        // pour voir les infos (nom, prenom, email, mdp --> console.log(data)
    }

    const submitForm=(e)=>{
        e.preventDefault();
        const sendData={
            pseudo:data.pseudo,
            mail:data.mail,
            mail2:data.mail2,
            mdp:data.mdp,
            mdp2:data.mdp2
        }
        console.log(sendData);

        // axios.post('http://localhost/test/test.php',sendData)
        // .then((result)=>{
        //     if(result.data.Status === 'Invalid') {
        //    alert('Invalid User');
        //      }
        // else   { 
        //     //props.history.push('/Dashboard')
        //     //props.history.push('/Dashboard') Redirect
        //     history('/dashboard');
        // }
                
        // })

        fetch( "http://localhost:80/test/test.php", {
            method : "POST",
            body : JSON.stringify(sendData),
          }).then( function(response){
            console.lot(response.status);
            // if(response.status === 200){
            //     history('/dashboard');
            // }else{
            //     alert('Invalid User');
            // }
               
        }).catch(function(error){
            console.error(error);
        }) 
    

    }
    
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
        <h3>Inscription</h3>
        </section>

        <section className="inscription_form">
            <form onSubmit={submitForm} noValidate>
                <div className="row">
                    <div className="col-de-6"><input type="text" placeholder="Votre pseudo" id="pseudo" name="pseudo" className="form-control" 
                        onChange={handleChange} value={data.pseudo} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-de-6"><input type="email" placeholder="Votre mail" id="mail" name="mail" className="form-control"
                        onChange={handleChange} value={data.mail} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-de-6"><input type="email" placeholder="Confirmez votre email" id="mail2" name="mail2" className="form-control"
                    onChange={handleChange} value={data.mail2}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-de-6"><input type="password" placeholder="Votre mot de passe" id="mdp" name="mdp" className="form-control"
                        onChange={handleChange} value={data.mdp}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-de-6"><input type="password" placeholder="Confirmez votre mdp" id="mdp2" name="mdp2" className="form-control"
                        onChange={handleChange} value={data.mdp2}/>
                    </div>
                </div>


                <div className="row">
                    
                    <div className="col-de-12 text-center">
                        <input type="submit" name="forminscription" value="Je m'inscris " className="btn btn-success" id="btn"/>
                    </div>
                </div>
                </form>
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

export default Register;