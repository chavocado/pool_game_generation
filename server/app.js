// dependencies
const express        = require('express');
const bodyParser     = require('body-parser');
//is this needed anymore???
//const path = require('path');
const app            = express();








//port listener
const port = 8000;
app.listen(port, () => {
  console.log('We are live on ' + port);
});

