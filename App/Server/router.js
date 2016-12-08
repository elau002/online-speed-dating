//probably require in locations here in terms of where requests get sent
var apiRouter = require('./routes/apiRouter.js');
var authRouter = require('./routes/authRouter.js');
var router = require('express').Router(); 

router.use('/api', apiRouter);
router.use('/auth', authRouter);

module.exports = router; 