// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const index = require('./routes/index');
const tournamentBuild = require('./routes/tournamentBuild');

// Serve back static files
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/tournamentBuild', tournamentBuild);
app.use('/', index);

//port listener
const port = 8000;
app.listen(port, () => {
  console.log('We are live on ' + port);
});
