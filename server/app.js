// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const index = require('./routes/index');
const snake = require('./routes/snake');
const Snake = require('./modules/snake');
var snake = new Snake(pools, teams, rounds);

// Serve back static files
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/snake', snake);
app.use('/', index);

//port listener
const port = 8000;
app.listen(port, () => {
  console.log('We are live on ' + port);
});
