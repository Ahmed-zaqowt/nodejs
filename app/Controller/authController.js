const asyncHandler = require('express-async-handler')
const ApiError = require('../../utils/ApiError');
const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel');
const createToken = require('../../utils/createToken');

exports.signup = asyncHandler(async (req, res, next) => {
    // 1- Create user
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
  
    // 2- Generate token
    const token = createToken(user._id);
  
    res.status(201).json({ data: user, token });
  });