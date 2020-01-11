const express = require('express');
const LoginRoutes = express.Router();
let Administrateur = require('./login.model');



// Login Router
LoginRoutes .route('/identifier').post(function (req, res) {
	Administrateur .findOne({user_name: req.body.user_name})
	.then(user => {
		console.log("User from login", user)
		
		if(!user) res.sendStatus(204);
		else {
			
			alert('ok');
		}
	})
});





module.exports = LoginRoutes ;
