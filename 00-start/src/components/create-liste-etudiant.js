import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Etudiant= props => (
  <tr>
    <td>{props.etudiant.Nom}</td>
    <td>{props.etudiant.Prenom}</td>
    <td>{props.etudiant.CIN}</td>
    <td>{props.etudiant.CNE}</td>
    <td>{props.etudiant.Email}</td>
    <td>{props.etudiant.Tel}</td>
    <td>
      <Link to={"/gestionEtudiant/edit/"+props.etudiant._id}>modifier</Link> | <a href="#" onClick={() => { props.deletetudiant(props.etudiant._id) }}>supprimer</a>
    </td>
  </tr>
)

export default class EtudiantList extends Component {
  constructor(props) {
    super(props);

    this.deletetudiant= this.deletetudiant.bind(this)

    this.state = {etudiants: []};
  }

  componentDidMount() {
    axios.get('http://localhost:4000/etudiant/')
      .then(response => {
        this.setState({ etudiants: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletetudiant(id) {
    axios.delete('http://localhost:4000/etudiant/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
        etudiants: this.state.etudiants.filter(el => el._id !== id)
    })
  }

  EtudiantList() {
    return this.state.etudiants.map(currentetudiant => {
      return <Etudiant etudiant={currentetudiant}   deletetudiant={this.deletetudiant} key={currentetudiant._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>liste des étudiants</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Nom</th>
              <th>Prenom</th>
              <th>CIN</th>
              <th>CNE</th>
              <th>Email</th>
              <th>Tel</th>
            </tr>
          </thead>
          <tbody>
            { this.EtudiantList() }
          </tbody>
        </table>
      </div>
    )
  }
}