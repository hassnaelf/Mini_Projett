import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class Editprof extends Component {
  constructor(props) {
    super(props);

    this.onChangematierename = this.onChangematierename.bind(this);
    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangePrenom = this.onChangePrenom.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeTel = this.onChangeTel.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      matierename: '',
      Nom : '',
      Prenom : '',
      Email: 0,
      Tel :'',
      date: new Date(),
      Matiere: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:7000/prof/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          matierename: response.data.matierename,
          Nom: response.data.Nom,
          Prenom: response.data.Prenom,
          Email: response.data.Email,
          Tel : response.data.Tel,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:7000/prof/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            Matiere: response.data.map(mt => mt.matierename),
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
      Nom: this.state.Nom,
      Prenom: this.state.Prenom,
      Email: this.state.Email,
      Tel: this.state.Tel,
      date: this.state.date
    }

    console.log(data);

    axios.post('http://localhost:7000/prof/update/' + this.props.match.params.id, data)
      .then(res => console.log(res.data));

    window.location = '/gestionprof';
  }

  render() {
    return (
    <div>
      <h3>modifier Professeur</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Matière: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.matierename}
              onChange={this.onChangematierename}>
              {
                this.state.Matiere.map(function(name) {
                  return <option 
                    key={name}
                    value={name}>{name}
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
          <label>Prenom : </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.Prenom}
              onChange={this.onChangePrenom}
              />
        </div>
        <div className="form-group">
          <label>Email  : </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.Email}
              onChange={this.onChangeEmail}
              />
        </div>

        <div className="form-group">
          <label>Tel  : </label>
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
          <input type="submit" value="Modifier" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}