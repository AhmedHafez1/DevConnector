const router = require('express').Router();

// @route GET api/profile
// @desc  Test route
router.get('/', (req, res) => {
  res.send('profile');
});

module.exports = router;
