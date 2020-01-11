import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangematierename = this.onChangematierename.bind(this);
    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangePrenom= this.onChangePrenom.bind(this);
    this.onChangeEmail= this.onChangeEmail.bind(this);
    this.onChangeTel= this.onChangeTel.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      matierename: '',
      Nom : '',
      Prenom : '',
      Email : '',
      Tel : '',

      date: new Date(),
      mat: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:7000/mat/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            mat : response.data.map(mat => mat.matierename),
            matierename: response.data[0].matierename
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }
  onChangematierename(e) {
    this.setState({
      matierename: e.target.value
    })
  }
  onChangeNom(e) {
    this.setState({
      Nom: e.target.value
    })
  }

  onChangePrenom(e) {
    this.setState({
     Prenom: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      Email: e.target.value
    })
  }
  onChangeTel(e) {
    this.setState({
      Tel : e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const data = {
      matierename: this.state.matierename,
      Nom : this.state.Nom,
      Prenom: this.state.Prenom,
      Email: this.state.Email,
      Tel : this.state.Tel,
      date: this.state.date
    }

    console.log(data);

    axios.post('http://localhost:7000/prof/add', data)
      .then(res => console.log(res.data));

    window.location ="/gestionprof" ;
  }

  render() {
    return (
    <div>
      <h3>ajouter Un professeur</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Matière: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.matierename}
              onChange={this.onChangematierename}>
              {
                this.state.mat.map(function(mats) {
                  return <option 
                    key={mats}
                    value={mats}>{mats}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Nom: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.Nom}
              onChange={this.onChangeNom}
              />
        </div>
        <div className="form-group"> 
          <label>Prenom: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.Prenom}
              onChange={this.onChangePrenom}
              />
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.Email}
              onChange={this.onChangeEmail}
              />
        </div>
        <div className="form-group">
          <label>Téléphone: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.Tel}
              onChange={this.onChangeTel}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Ajouter " className="btn btn-warning" />
        </div>
      </form>
    </div>
    )
  }
}