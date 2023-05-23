
const userModel = require('../Models/UserModel');
const asyncHandler = require('express-async-handler')
const ApiError = require('../../utils/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


  exports.account = asyncHandler( async (req, res) => {
    const { name , username, password } = req.body;
  
    // Hash the password
    const now = new Date();
  
    const user = await userModel.create({name , username , password , now });
    res.status(201).json({data : user})
    
    res.status(201).send('Account created successfully');
  });


    exports.login = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
 
    const user = await userModel.findOne({ username });
  
    if (!user) {
        return res.status(401).send('Invalid username or password');
      }
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
     return res.status(401).send('Invalid username or password');
      } 
 
   return res.status(201).json({
    massege : 'Login Successful' , 
    data : user 
   });
  });

  









































