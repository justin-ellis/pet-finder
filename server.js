const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(bodyParser.json());
app.use(express.static('public'));

app.use(session({
	secret: "random secret string",
	resave: false,
	saveUninitialized: false
}));

const pets = require('./controllers/pets.js');
app.use('/pets', pets);

const members = require('./controllers/members.js');
app.use('/members', members);

const sessions = require('./controllers/session.js');
app.use('/session', sessions);


const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/users';

mongoose.connect(mongoUri);

app.listen(3000, ()=>{
	console.log('listening');
});
