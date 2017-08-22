const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const methodOverride = require('method-override');
// require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//authentication only works with urlencoded enabled...not sure if the above two lines conflict or if we need bodyParser.json
app.use(express.static('public'));
app.use(methodOverride('_method'));


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

mongoose.connection.once('open', () => {
	console.log('connected to mongo');
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
	console.log('listening');
});
