const express = require('express');
const router = express.Router();
const Tournament = require('../modules/tournament');

router.get('/', function (req, res) {
  console.log('This Happened', req.query);
  res.send(Tournament(req.query));
});

module.exports = router;
