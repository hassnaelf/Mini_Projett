import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import React ,{Component} from 'react';
import NavBarEtudiant from "./NavBarEtudiant.js";
import  FormulaaireInscription  from  "./create-etudiant.component.js";
import List from './create-liste-etudiant.js'

class GestionEtudiant extends Component{
    render(){
        
  return (

    <Router>
      <div className="container">
     
    
      <NavBarEtudiant />
    
      <Route path="/gestionetudiant" exact component={List} />
    
      <Route path="/gestionetudiant/create" exact component={FormulaaireInscription} />
    
     
     
   
      
      </div>
    </Router>
      
  );
    }


}

export default GestionEtudiant;