const Router = require('express').Router;
const router = new Router();

const link = require('./model/link/router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to linkify-api API!' });
});

router.use('/link', link);

module.exports = router;
