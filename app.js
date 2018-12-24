const express = require('express')
const bodyParser = require('body-parser')

const home = require('./routes/home')

const app = express()

app.use(express.static('public'));

app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(home)

app.listen(3000, () => {
    console.log('Listening to port 3000')
})