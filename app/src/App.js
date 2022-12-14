import logo from './logo.svg';
import './App.css';
import Connexion from './Connexion';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Accueil';
import Api from './Api'
import Inscription from './Inscription';
import Contact from './Contact';
import Apropos from './Apropos';
import React, {useState, useEffect} from 'react';
import {Radio} from "react-loader-spinner";


function App() {

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, [])

  
  
  return (
  <>
    {
    isLoading?

    <Radio 
    type="Hearts"
    color="rgb(0, 153, 255)"
    height={100}
    width={100}
    timeout={3000} //3 secs
    />
    :
 
  
    <Router>
    <div className='container'>

      
    
      <Routes>
        <Route path="/ProjetWeb" element={<Accueil/>}/>
        <Route path="/connexion" element={<Connexion/>}/>
        <Route path="/inscription" element={<Inscription/>}/>
        <Route path="/api" element={<Api/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/apropos" element={<Apropos/>}/>
      </Routes>
    </div>
    </Router>
    
    }
    
    </>

  );
}

export default App;
