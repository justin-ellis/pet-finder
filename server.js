const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/users';

mongoose.connect(mongoUri);

app.listen(3000, ()=>{
	console.log('listening');
});
