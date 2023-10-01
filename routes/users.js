const router = require('express').Router();

// @route GET api/users
// @desc  Test route
router.get('/', (req, res) => {
  res.send('users');
});

module.exports = router;
