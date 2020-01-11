const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// collection and schema for Registration
let Administrateur= new Schema({
	
	user_name: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	password: {
		type: String,
		required: true,
		trim: true
	}
},{
		collection: 'Administrateur'
});

module.exports = mongoose.model('Administrateur', Administrateur);
