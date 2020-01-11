import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'bootstrap/dist/css/bootstrap.css';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateFiliere extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangefelierename = this.onChangefelierename.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangecapacity = this.onChangecapacity.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      felierename: '',
      description: '',
      capacity: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/formation/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  onChangefelierename(e) {
    this.setState({
      felierename: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangecapacity(e) {
    this.setState({
      capacity: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const feliere = {
      username: this.state.username,
      felierename: this.state.felierename,
      description: this.state.description,
      capacity: this.state.capacity,
      date: this.state.date
    }

    console.log(feliere);

    axios.post('http://localhost:4000/filiere/add', feliere)
      .then(res => console.log(res.data));

    window.location = '/gestionfeliere';
  }

  render() {
    return (
    <div>
      <h3></h3>
      <form onSubmit={this.onSubmit} className="contact100-form validate-form">
        <div className="form-group"> 
          <label>Formation: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>nom feliere: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.felierename}
              onChange={this.onChangefelierename}
              />
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>capacity: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.capacity}
              onChange={this.onChangecapacity}
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

        <div className="container-contact100-form-btn ">
                    <button className="contact100-form-btn   "     value="Login">
                      Ajouter
                    </button>
                </div>
         
       
      </form>
    </div>
    )
  }
}