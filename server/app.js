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
//setter
app.set('port', process.env.PORT || 5050);
//listen
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
