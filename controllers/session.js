const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/users');
const Member = require('../models/members');

router.get('/login', (req, res)=>{
	res.render('users/login.ejs', {message: req.session.message || ""});
});

router.post('/login', (req, res)=>{
	User.findOne({username: req.body.username}, (err, user)=>{
if(user){
	if(bcrypt.compareSync(req.body.password, user.password)){
		req.session.message = "";
		req.session.username = req.body.username;
		req.session.logged = true;
		console.log(req.session);

		res.redirect('/members');
	} else {
		console.log('else in bcrypt compare');
		req.session.message = "Username or password is incorrect";
		res.redirect('/session/login');
	}
} else {
	req.session.message = "Username or password is incorrect";
	res.redirect('/session/login');
	}

	});
});

router.post('/register', (req, res)=>{
const password = req.body.password;
const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

const userDbEntry = {};
userDbEntry.username = req.body.username;
userDbEntry.password = passwordHash;

User.create(userDbEntry, (err, user)=>{
	console.log(user);
	req.session.message = "";
	req.session.username = user.username;
	req.session.logged = true;
	});
	res.redirect('/members/new.ejs');
});

// Member.create(req.body, (err, createdMember)=>{
// 	Member.username = req.session.username;
// 	Member.password = password;
// 	res.redirect('/members');
// });
// ^^
// ^^ only use if we want registration to also produce a member with the same name and password as user


router.get('/register', (req, res)=>{
	res.render('users/register.ejs');
});

router.get('/logout', (req, res)=>{
	req.session.destroy((err)=>{
		if(err){

		}else{
			res.redirect('/');
		}
	});
});

module.exports = router;