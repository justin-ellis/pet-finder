const express = require('express');
const router = express.Router();
const Member = require('../models/members.js');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

router.use(bodyParser.urlencoded({extended:false}));
router.use(methodOverride('_method'));

router.get('/', (req, res)=>{
	Member.find({}, (err, foundMembers)=>{
		res.render('members/index.ejs', {
			members:foundMembers
		});
	});
});

router.put('/:id', (req, res) => {
	Member.findByIdAndUpdate(req.params.id, req.body, (error, updateMember) => {
		res.redirect('/members')
	})
})


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
		res.render('members/show.ejs', {
			member: Member
		})
	})
})

router.get('/:id/edit', (req, res) => {
  Member.findById(req.params.id, (error, editMember) => {
    res.render('members/edit.ejs', {
			member: editMember
    })
  })
})

router.delete('/:id', (req, res) => {
	Member.findByIdAndRemove(req.params.id, (error, foundMember) => {
		req.session.destroy((err)=>{
		if(err){

		}else{
			res.redirect('/');
		}
	});
		});
	})




module.exports = router;
