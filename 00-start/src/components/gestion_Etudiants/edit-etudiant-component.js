import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditEtudiant extends Component {
  constructor(props) {
    super(props);

    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangePrenom = this.onChangePrenom.bind(this);
    this.onChangeCIN = this.onChangeCIN.bind(this);
    this.onChangeCNE = this.onChangeCNE.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeTel = this.onChangeTel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Nom: '',
      Prenom: '',
      CIN: '',
      CNE: '',
      Email :'',
      Tel : ''

    }
  }


  componentDidMount() {
    axios.get('http://localhost:7000/etudiant/'+this.props.match.params.id)
      .then(response => {
        this.setState({
         Nom: response.data.Nom,
          Prenom: response.data.Prenom,
          CIN: response.data.CIN,
          CNE: response.data.CNE,
          Email : response.data.Email,
          Tel : response.data.Tel
         
        })   
      })
      .catch(function (error) {
        console.log(error);
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

  onChangeCIN(e) {
    this.setState({
     CIN: e.target.value
    })
  }

  onChangeCNE(e) {
    this.setState({
      CNE: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      Email :e.target.value
    })
  }


  onChangeTel(e) {
    this.setState({
      Tel:e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const data = {
      Nom: this.state.Nom,
      Prenom: this.state.Prenom,
      CIN: this.state.CIN,
      CNE: this.state.CNE,
      Email: this.state.Email,
      Tel :this.state.Tel
    }

    console.log(data);

    axios.post('http://localhost:7000/etudiant/update/' + this.props.match.params.id, data)
      .then(res => console.log(res.data));

    window.location = '/gestionetudiant';
  }

  render() {
    return (
        <div>
          <h3></h3>
          <form onSubmit={this.onSubmit} className="contact100-form validate-form">
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
              <label>CIN: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.CIN}
                  onChange={this.onChangeCIN}
                  />
            </div>
            <div className="form-group">
              <label>CNE: </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.CNE}
                  onChange={this.onChangeCNE}
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
              <label>Tel: </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.Tel}
                  onChange={this.onChangeTel}
                  />
            </div>
            <div className="form-group">
                <input type="submit" value="Ajouter" className="btn btn-primary" />
              </div>
            
             
           
          </form>
        </div>)
  }
}