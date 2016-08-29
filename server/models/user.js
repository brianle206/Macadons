var mongoose = require("mongoose");
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
	first_name : {type: String, trim: true},
	last_name : {type: String, trim: true},
	username: {type: String, trim: true},
	email : {type: String},
	password : {type: String, trim : true}
}, {timestamps: true});

UserSchema.pre('save', function(next){
	var user = this;
	if(!user.isModified('password')){
		return next();
	} 

	bcrypt.genSalt(10, function(err, salt){
		bcrypt.hash(user.password, salt, function(err, hash){
			user.password = hash;
			next();
		})
	})
})



mongoose.model('users', UserSchema);