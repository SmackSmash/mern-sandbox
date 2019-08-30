const router = require('express').Router();

// @route   POST api/user
// @desc    Sign up user
// @access  Public
router.post('/', (req, res) => {
  console.log(req.body);
  res.send('Hello there!');
});

module.exports = router;
