import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/gestionfeliere" className="navbar-brand">ESTE</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/gestionfeliere" className="navbar-brand">Félieres</Link>
          </li>
          <li className="navbar-item">
          <Link to="/gestionfeliere/create" className="nav-link">Ajouter félière</Link>
          </li>
          <li className="navbar-item">
          <Link to="/gestionfeliere/user" className="nav-link">ajouter formation</Link>
          </li>
          
        </ul>
        </div>
      </nav>
    );
  }
}

