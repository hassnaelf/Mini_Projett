import React from 'react';
import home from './pages/home.js'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Gestionfeliere from './components/gestion_Filieres/gestionfeliere.js';
import  login from './components/login/login.js';
import GestionEtudiant from './components/gestion_Etudiants/gestionetudiant.js';
import  Gestionprof     from './components/gestion_professeurs/gestionprofesseur.js';

function App() {
  return (
    <Router>
      <div className="container">
      <br/>
       <Route path="/" exact component={login} />
      <Route path="/home" exact component={home} />
      <Route path="/gestionfeliere" exact component={Gestionfeliere} />
      <Route path="/gestionetudiant" exact component={GestionEtudiant } />
      <Route path="/gestionprof" exact component={Gestionprof  } />

      </div>
    </Router>
  );
}

export default App;




 