const express = require('express');
const router = express.Router();
const Tournament = require('../modules/tournament');
let rules = req.query;


router.get('/', function (req, res) {
  rules.pools = Number(rules.pools);
  rules.teams = Number(rules.teams);
  rules.rounds = Number(rules.rounds);
  let message = 'The following values are invalid:' + '\n'
  console.log('This Happened', req.query);
  if (isNaN(rules.pools)) {
    message += 'pools parameter' + '\n'
  }
  if (isNaN(rules.rounds)) {
    message += 'rounds parameter' + '\n'
  }
  if (isNaN(rules.teams)) {
    message += 'teams parameter' + '\n'
  }
  if (rules.seed !== 'sequential' && rules.seed !== 'snake'){
    message += 'seed parameter'  + '\n'
  }
  if (err) {
    res.sendStatus(500);
  }
  // function (err, result){
  // if (err) {
  //   res.sendStatus(500);
  //   return;
  // }
  //   res.sendStatus(201);
  // });
  res.send(Tournament(req.query));
});

module.exports = router;
