/*const { check } = require('express-validator');
const validatorMiddleware = require('../../app/middlewares/validatorMiddleware');
const User = require('../../app/Models/UserModel');

exports.signupValidator = [
  check('name')
    .notEmpty()
    .withMessage('User required')
    .isLength({ min: 3 })
    .withMessage('Too short User name')
    ,

  check('password')
    .notEmpty()
    .withMessage('Password required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters')
 ,


  validatorMiddleware,
];

exports.loginValidator = [
  check('username')
    .notEmpty()
    .withMessage('Email required')
    ,

  check('password')
    .notEmpty()
    .withMessage('Password required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),

  validatorMiddleware,
];*/