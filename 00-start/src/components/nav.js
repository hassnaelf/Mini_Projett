import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './nav.css'

class Navbar extends React.Component {
  render() {
    return (

        
      
      <div class="row ">
      <section class="col-12">
        <nav class="navbar bg-dark navbar-dark navbar-expand-sm ">
          <div class="container">
            <div class="navbar-brand d-none d-sm-inline-block">EST Essaouira </div>
            <div class="navbar-nav">
            <a href="/gestionetudiant" class="nav-link">Gestion des Etudiants</a>
            <a href="/gestionfeliere" class="nav-link">Gestion des Felieres</a>
            <a href="/gestionprof" class="nav-item nav-link" >Gestion des 
            professeurs</a>
              
            </div>
           
          
          </div>
        </nav>
      </section>
    </div>
  
);
}
}
export default Navbar;

