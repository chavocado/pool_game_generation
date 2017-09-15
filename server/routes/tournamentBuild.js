const express = require('express');
const router = express.Router();
const Tournament = require('../modules/tournament');

router.get('/', function (req, res) {
  let errors = [];
  let rules = req.query;
  //convert string or non-number values passed into numbers or NaN
  rules.pools = Number(rules.pools);
  rules.teams = Number(rules.teams);
  rules.rounds = Number(rules.rounds);

  console.log('This Happened', req.query);
  //catch to make sure every pool has at least 2 teams
  if(rules.teams < rules.pools * 2){
    errors.push('Number of Teams must be greater than twice the number of Pools')
  }
  //seed undefined and specific string check
  if (rules.seed === undefined || (rules.seed !== 'snake' && rules.seed !== 'sequential')){
    errors.push('seed must be a string of "sequential" or "snake"')
  }
  //NaN and undefined check for pools param
  if (isNaN(rules.pools) || rules.pools === undefined) {
    errors.push('pools must be a number greater than or equal to 1')
  }
  //NaN and undefined check for teams param
  if (isNaN(rules.teams) || rules.teams === undefined) {
    errors.push('teams must be a number greater than or equal to 2')
  }
  //NaN and undefined check for rules param
  if (isNaN(rules.rounds) || rules.rounds === undefined) {
    errors.push('rounds must be a number greater than or equal to 1')
  }
  //when seeding snake it doesn't make sense to only have 1 pool to 'snake' seed
  if (rules.seed == 'snake' && rules.pools === 1){
    errors.push('pools must be a number greater than or equal to 2 ' +
                'when selecting snake seeding. Please use sequential seeding')
  }
  //checking for errors before running through the tournament module
  if(errors.length === 0){
    res.send(Tournament(rules));
  } else {
    res.status(400).send({
      errors : errors
    })
  }

  //res.send(Tournament(req.query));
});

module.exports = router;
