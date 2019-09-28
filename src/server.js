const express = require('express');
const dotenv = require('dotenv');
const { User } = require('./models');

dotenv.config();
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World')
});


app.listen(3001);