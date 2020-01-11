import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/gestionprof" className="navbar-brand">ESTE</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/gestionprof" className="nav-link">professeur</Link>
          </li>
          <li className="navbar-item">
          <Link to="/gestionprof/create" className="nav-link">Ajouter prof</Link>
          </li>
          <li className="navbar-item">
          <Link to="/gestionprof/user" className="nav-link">ajouter  matiere</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}