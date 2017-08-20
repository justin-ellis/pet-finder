const express = require('express');
const router = express.Router();
const Members = require('../models/members.js');

router.get('/', (req, res)=>{
	Members.find({}, (err, foundMembers)=>{
		res.render('members/index.ejs');
	});
});

router.get('/new', (req, res) => {
	res.render('members/new.ejs')
})

router.get('/:id', (req, res) => {
	User.findById(req.params.id, (error, Member) => {
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
