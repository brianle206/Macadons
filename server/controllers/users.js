var mongoose = require("mongoose");

var User = mongoose.model("users");
var bcrypt = require("bcrypt");

module.exports = {

	logUserIn : function(req, res){
		console.log("IN SERVER CONTROLLER ", req.body)
		User.findOne({username: req.body.username}, function(err, result){
			if(result){
				console.log("USER EXISTS ", result)
				bcrypt.compare(req.body.password, result.password, function(err, isMatch){
					if(isMatch == false){
						res.json(err)
					}
					else{
						res.json(result)
					}
				})
			}
			else{
				res.json(err)
			}
		})
	},

	userSignUp : function(req, res){
		console.log("IN SERVER CONTROLLER SIGNUP ", req.body)
		exist = User.findOne({username: req.body.username}, function(err, user){
			if(err){
				console.log(err)
			}
			else{
				if(user){
					res.json({"alert": "Username already in the system"})
				}
				else{
					new_user = new User({
						first_name: req.body.first_name,
						last_name: req.body.last_name,
						username: req.body.username,
						email: req.body.email,
						password: req.body.password
					})
					new_user.save(function(err, user){
						if(err){
							console.log(err)
						}
						else{
							res.json(user)
						}
					})
				}
			}
		})
	}
}