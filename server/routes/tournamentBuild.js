const express = require('express');
const router = express.Router();
const Tournament = require('../modules/tournament');

router.get('/', function (req, res) {
  let errors = [];
  let rules = req.query;
  rules.pools = Number(rules.pools);
  rules.teams = Number(rules.teams);
  rules.rounds = Number(rules.rounds);

  console.log('This Happened', req.query);
  //if number of teams is < pools * 2 error TODO
  if(rules.teams < rules.pools * 2){
    errors.push('Number of Teams must be greater than twice the number of Pools')
  }
  if (rules.seed === undefined || (rules.seed !== 'snake' && rules.seed !== 'sequential')){
    errors.push('seed must be a string of "sequential" or "snake"')
  }
  if (isNaN(rules.pools) || rules.pools === undefined) {
    errors.push('pools must be a number')
  }
  if (isNaN(rules.rounds) || rules.rounds === undefined) {
    errors.push('rounds must be a number')
  }
  if (isNaN(rules.teams) || rules.teams === undefined) {
    errors.push('teams must be a number')
  }

  if(errors.length === 0){
    res.send(Tournament(rules));
  } else {
    res.status(400).send({
      errors : errors
    })
  }

  res.send(Tournament(req.query));
});

module.exports = router;
