import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

export default class CreateFormation extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post('http://localhost:7000/formation/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <h3></h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>formation: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
           
          <div className="form-group">
                <input type="submit" value="Ajouter" className="btn btn-warning" />
              </div>
         
          </div>
        </form>
      </div>
    )
  }
}