import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Professeur= props => (
  <tr>
    <td>{props.professeur.matierename}</td>
    <td>{props.professeur.Nom}</td>
    <td>{props.professeur.Prenom}</td>
    <td>{props.professeur.Email}</td>
    <td>{props.professeur.Tel}</td>
    
    <td>{props.professeur.date.substring(0,10)}</td>
    <td>
      <Link to={"/gestionprof/edit/"+props.professeur._id}>modifier</Link> | <a href="#" onClick={() => { props.deleteprof(props.professeur._id) }}>supprimer</a>
    </td>
  </tr>
)

export default class profList extends Component {
  constructor(props) {
    super(props);

    this.deleteprof= this.deleteprof.bind(this)

    this.state = {professeurs: []};
  }

  componentDidMount() {
    axios.get('http://localhost:7000/prof/')
      .then(response => {
        this.setState({ professeurs: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteprof(id) {
    axios.delete('http://localhost:7000/prof/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      professeurs: this.state.professeurs.filter(el => el._id !== id)
    })
  }

 profList() {
    return this.state.professeurs.map(currentprof => {
      return <Professeur professeur={currentprof} deleteprof={this.deleteprof} key={currentprof._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Liste des professeurs</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Matière</th>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Email</th>
              <th>Tel</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.profList() }
          </tbody>
        </table>
      </div>
    )
  }
}