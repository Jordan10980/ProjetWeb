// import airplane from './image/airplane.png'
// import {FaBars , FaTimes} from "react-icons/fa"
// import { useRef } from 'react';
// import './navbar.css';
// import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//  function Navbar(){
//     const navRef =useRef();

//     const showNavbar =  ()=>{
//         navRef.current.classList.toggle("responsive_nav "); 
//     }
//     return(
//         <header>

//              <a href="" class="logo"><img src={airplane} alt=""/>Flight Tracker</a>

//             <nav ref={navRef }>
//                     <Link to="/ProjetWeb" class="nav-link">Accueil</Link>
//                     <Link to="/api" class="nav-link">Api</Link>
//                     <Link to="/contact" class="nav-link">Contact</Link>
//                     <Link to="/apropos" class="nav-link">A propos</Link>
//                     <Link to="/connexion" class="nav-link">Se connecter</Link>
//                     <button className='nav-btn nav-close-btn' onClick={showNavbar}> 
//                         <FaTimes /> 
//                     </button>
//             </nav>
//             <button className='nav-btn '  onClick={showNavbar} > 
//                 <FaBars /> 
//             </button>

//     </header>
//     );
//  }

//  export default Navbar;