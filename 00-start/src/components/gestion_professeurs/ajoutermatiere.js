import React, { Component } from 'react';
import axios from 'axios';

export default class Creatematiere extends Component {
  constructor(props) {
    super(props);

    this.onChangematierename = this.onChangematierename.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      matierename: ''
    }
  }

  onChangematierename(e) {
    this.setState({
      matierename: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const matiere = {
      matierename: this.state.matierename
    }

    console.log(matiere);

    axios.post('http://localhost:7000/mat/add', matiere)
      .then(res => console.log(res.data));

    this.setState({
      matierename: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Ajouter matière</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>matire: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.matierename}
                onChange={this.onChangematierename}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Ajouter" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}