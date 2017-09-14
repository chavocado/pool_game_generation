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
  if (isNaN(rules.pools) || rules.pools === undefined) {
    errors.push('pools must be a number')
  }
  if (isNaN(rules.rounds || rules.rounds === undefined)) {
    errors.push('rounds must be a number')
  }
  if (isNaN(rules.teams || rules.teams === undefined)) {
    errors.push('teams must be a number')
  }
  if (rules.seed !== 'sequential' && rules.seed !== 'snake'){
    errors.push('seed must be a string of "sequential" or "snake]"')
  }
  if(errors.length === 0){
    res.send(Tournament(rules));
  } else {
    res.send({
      errors : errors
    }).status(400)
  }
  //if (err) {
  //  res.sendStatus(500);
  //}
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
