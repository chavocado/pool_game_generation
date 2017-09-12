const express = require('express');
const router = express.Router();
const path = require('path');
var snake = new Snake(pools, teams, rounds);

router.get('/snake', function (req, res) {
  Snake.find({}, function (err, tournament) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(tournament);
  });
});

module.exports = router;