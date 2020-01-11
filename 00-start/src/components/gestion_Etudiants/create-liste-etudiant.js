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
      <Link className="btn btn-warning" to={"/gestionetudiant/edit/"+props.etudiant._id}>modifier</Link> | <a  className="btn btn-warning" href="#" onClick={() => { props.deletetudiant(props.etudiant._id) }}>supprimer</a>
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
    axios.get('http://localhost:7000/etudiant/')
      .then(response => {
        this.setState({ etudiants: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletetudiant(id) {
    axios.delete('http://localhost:7000/etudiant/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
        etudiants: this.state.etudiants.filter(el => el._id !== id)
    })
  }
  recherche=(e)=>{this.setState({
    etudiants: this.state.etudiants.filter(el => el.Nom.indexof(e.target.values()))
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
    
       
            <br/><br/>
        <h5>liste des étudiants</h5>
        <br/>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Nom</th>
              <th>Prenom</th>
              <th>CIN</th>
              <th>CNE</th>
              <th>Email</th>
              <th>Tel</th>
              <th>Actions</th>
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