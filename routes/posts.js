const router = require('express').Router();

// @route GET api/posts
// @desc  Test route
router.get('/', (req, res) => {
  res.send('posts');
});

module.exports = router;
