const router = require('express').Router();
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { User, signUpSchema } = require('../models/user');
const handleServerError = require('../utils/handleServerError');

// @route   POST api/user
// @desc    Sign up user
// @access  Public
router.post('/', async (req, res) => {
  // Validate data
  const result = Joi.validate(req.body, signUpSchema, { abortEarly: false });
  if (result.error) {
    return res.status(422).send({
      errors: result.error.details.map(error => error.message)
    });
  }
  const { email, password } = req.body;
  try {
    // Check if email exists in DB
    let user = await User.findOne({ email });
    if (user) {
      return res.status(409).send({
        errors: [`User with email ${email} already exists.`]
      });
    }
    // Hash password and add user to DB
    const hashed = await bcrypt.hash(password, 10);
    user = new User({
      email,
      password: hashed
    });
    await user.save();
    // Return json web token
    const payload = {
      user: {
        id: user.id
      }
    };
    const token = jwt.sign(payload, config.get('jwtSecret'));
    res.send({ token });
  } catch (error) {
    handleServerError(error);
  }
});

module.exports = router;
