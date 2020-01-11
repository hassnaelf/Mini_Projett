import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import  './NavBarEtudiant.css'
import   {Link}  from  'react-router-dom';

class    NavBarEtudiant  extends  React.Component{
    render(){
return (
 <div>
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <Link to="/gestionetudiant" className="navbar-brand">ESTE</Link>
    <div className="collpase navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <li className="navbar-item">
      <Link to="/gestionetudiant" className="nav-link">Liste des etudiants</Link>
      </li>
      <li className="navbar-item">
      <Link to="/gestionetudiant/create" className="nav-link">Ajouter étudiant</Link>
      </li>
      
      
    </ul>
    </div>
  </nav>
  </div>
  );

}
}
  

export default NavBarEtudiant;
