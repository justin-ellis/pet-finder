const express = require('express');
const router = express.Router();
const Member = require('../models/members.js');

router.get('/', (req, res)=>{
	Member.find({}, (err, foundMembers)=>{
		res.render('members/index.ejs', {	
			members:foundMembers
		});
	});
});

router.post('/', (req, res)=>{
	Member.create(req.body, (err, createdMember)=>{
	res.redirect('/members');
	});
});

router.get('/new', (req, res) => {
	res.render('members/new.ejs')
})

router.get('/:id', (req, res) => {
	Member.findById(req.params.id, (error, Member) => {
		res.render('members/show.ejs')
	})
})

router.get('/:id/edit', (req, res) => {
  User.findById(req.params.id, (error, editMember) => {
    res.render('members/edit.ejs', {
    })
  })
})





module.exports = router;