const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Member = require('../models/members');

router.get('/login', (req, res)=>{
	res.render('members/login.ejs', {message: req.session.message || ""});
});

router.get('/', (req, res, next)=>{
	Member.find({}, (err, foundMembers)=>{
		res.json(foundMembers);
	});
});

router.post('/login', (req, res)=>{
	Member.findOne({username: req.body.username}, (err, user)=>{
if(user){
	if(bcrypt.compareSync(req.body.password, user.password)){
		req.session.message = "";
		req.session.username = req.body.username;
		req.session.logged = true;
		res.json(req.session.logged);
		console.log(req.session);
		// res.redirect('/'); //added views/ in front of members to route correctly
	} else {
		console.log('else in bcrypt compare');
		req.session.message = "Username or password is incorrect";
		res.json(req.session.message);
	}
} else {
	console.log('else else in bcrypt compare');
	req.session.message = "Username or password is incorrect";
	res.json(req.session.message);
	}

	});
});

router.post('/register', (req, res)=>{
const password = req.body.password;
const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

const memberDbEntry = {};
memberDbEntry.username = req.body.username;
memberDbEntry.password = passwordHash;
memberDbEntry.zipcode = req.body.zipcode;

Member.create(memberDbEntry, (err, member)=>{
	console.log(member);
	req.session.test = 'test';
	req.session.message = "";
	req.session.username = member.username;
	req.session.zipcode = member.zipcode;
	req.session.logged = true;
	res.json(req.session.logged);


	});
	// res.redirect('/session/login');
});

// Member.create(req.body, (err, createdMember)=>{
// 	Member.username = req.session.username;
// 	Member.password = password;
// 	res.redirect('/members');
// });
// ^^
// ^^ only use if we want registration to also produce a member with the same name and password as user


router.get('/register', (req, res)=>{
	res.render('members/register.ejs');
});

router.get('/logout', (req, res)=>{
	req.session.destroy((err)=>{
		if(err){

		}else{
			res.redirect('/session/login');
		}
	});
});

module.exports = router;
