import React from 'react';
import home from './pages/home.js'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Gestionfeliere from './components/gestionfeliere.js';
import  login from './components/login.js';
import GestionEtudiant from './components/gestionetudiant.js';


function App() {
  return (
    <Router>
      <div className="container">
      <br/>
       <Route path="/" exact component={login} />
      <Route path="/home" exact component={home} />
      <Route path="/gestionfeliere" exact component={Gestionfeliere} />
      <Route path="/gestionetudiant" exact component={GestionEtudiant } />

      </div>
    </Router>
  );
}

export default App;




 