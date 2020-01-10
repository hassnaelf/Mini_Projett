import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Feliere = props => (
  <tr>
    <td>{props.feliere.username}</td>
    <td>{props.feliere.felierename}</td>
    <td>{props.feliere.description}</td>
    <td>{props.feliere.capacity}</td>
    <td>{props.feliere.date.substring(0,10)}</td>
    <td>
      <Link to={"/gestionfeliere/edit/"+props.feliere._id}>modifier</Link> | <a href="#" onClick={() => { props.deletefeliere(props.feliere._id) }}>supprimer</a>
    </td>
  </tr>
)

export default class feliereList extends Component {
  constructor(props) {
    super(props);

    this.deletefeliere= this.deletefeliere.bind(this)

    this.state = {felieres: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ felieres: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletefeliere(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      felieres: this.state.felieres.filter(el => el._id !== id)
    })
  }

 feliereList() {
    return this.state.felieres.map(currentfeliere => {
      return <Feliere feliere={currentfeliere} deletefeliere={this.deletefeliere} key={currentfeliere._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>FELIERES</h3>
        <table className="table table-light table-sm  table-hover  table-responsive-md">
          <thead className="thead-dark"    stwle={{backgroundColor:"red",height:"4px"}}>
            <tr>
              <th>formation</th>
              <th>nom feliere</th>
              <th>Description</th>
              <th>capacity</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.feliereList() }
          </tbody>
        </table>
      </div>
    )
  }
}