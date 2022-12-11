import logo from './logo.svg';
import './App.css';
import Connexion from './Connexion';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Accueil';
import Api from './Api'
import Inscription from './Inscription';
import Contact from './Contact';
import Apropos from './Apropos';
function App() {
  return (
    <Router>
    <div className='container'>
      <Routes>
        <Route path="/" element={<Accueil/>}/>
        <Route path="/connexion" element={<Connexion/>}/>
        <Route path="/inscription" element={<Inscription/>}/>
        <Route path="/api" element={<Api/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/apropos" element={<Apropos/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
