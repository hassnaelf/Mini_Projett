import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import LoginService from '../services/LoginService';
import Message from '../elements/Message';
import Error from '../elements/Error';
import  './login.css'
import { COMMON_FIELDS, REGISTRATION_FIELDS, LOGIN_FIELDS, LOGIN_MESSAGE, ERROR_IN_LOGIN } from '../MessageBundle';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user_name: '',
			password: '',
			error: false,
			loginSuccess: false
		}
	}

	handleOnChangeUserName = (e) =>  {
		this.setState({
			user_name: e.target.value
		});
	}

	handleOnChangePassword = (e) => {
		this.setState({
			password: e.target.value
		});
	}

	

		onSubmit =  e => {
		
			const   username= this.state.user_name
			const password= this.state.password
			if(username=="admin"   &&  password==123)
				window.location = '/home';
			else  
			alert('Username  ou mot de passe incorrect');
		  }
	

	render() {
		const { loginSuccess, error } = this.state;

		return (
			<div class="container">
			<div class="d-flex justify-content-center h-100">
				<div class="card">
					<div class="card-header">
						<h3>Se connecter</h3>
						<div class="d-flex justify-content-end social_icon">
							<span><i class="fab fa-facebook-square"></i></span>
							<span><i class="fab fa-google-plus-square"></i></span>
							<span><i class="fab fa-twitter-square"></i></span>
						</div>
					</div>
					<div class="card-body">
						<form onSubmit={this.onSubmit} >
							<div class="input-group form-group">
								<div class="input-group-prepend">
									<span class="input-group-text"><i class="fas fa-user"></i></span>
								</div>
								<input type="text" class="form-control" placeholder="username" onChange={this.handleOnChangeUserName} autoComplete="Username" required/>
								
							</div>
							<div class="input-group form-group">
								<div class="input-group-prepend">
									<span class="input-group-text"><i class="fas fa-key"></i></span>
								</div>
								<input type="password" class="form-control" placeholder="password" onChange={this.handleOnChangePassword} autoComplete="Password" required/>
							</div>
							<div class="row align-items-center remember">
							
							</div>
							
							
						<button type="button" class="btn btn-warning btn float-right login_btn " onClick={this.onSubmit} >Connecter</button>
						</form>
					</div>
					<div class="card-footer">
						<div class="d-flex justify-content-center links">
							
						</div>
						
					</div>
				</div>
				</div>
				</div>
			);
		}
}
