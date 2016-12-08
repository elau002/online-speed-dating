var router = require('express').Router();
var userHandler = require('../handlers/userHandler.js');
var passport = require('passport');

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.status(200).send(req.user);
});


module.exports = router; 