const mongoose = require('mongoose');
const Joi = require('joi');

const User = mongoose.model(
  'user',
  new mongoose.Schema({
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  })
);

const signUpSchema = Joi.object().keys({
  email: Joi.string()
    .required()
    .email({ minDomainAtoms: 2 }),
  password: Joi.string()
    .required()
    .min(7)
});

module.exports = {
  User,
  signUpSchema
};
