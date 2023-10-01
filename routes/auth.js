const router = require('express').Router();

// @route GET api/auth
// @desc  Test route
router.get('/', (req, res) => {
  res.send('auth');
});

module.exports = router;
