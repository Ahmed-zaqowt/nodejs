
const userModel = require('../Models/UserModel');
const asyncHandler = require('express-async-handler')
const ApiError = require('../../utils/ApiError');
const bcrypt = require('bcrypt');

  exports.account = asyncHandler( async (req, res) => {
    const { name , username, password } = req.body;
  
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const user = await userModel.create({name , username , password : hashedPassword });
    res.status(201).json({data : user})
    
    res.status(201).send('Account created successfully');
  });


    exports.login = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
  
    // Find the user in the database based on the provided username
    const user = await userModel.findOne({ username });
    if (!user) {
        // User not found
        return res.status(401).send('Invalid username or password');
      }
    const match = await bcrypt.compare(password, user.password);

    if (match) {
        // Passwords match, authentication successful
        res.send('Login successful');
      } else {
        // Passwords don't match, authentication failed
        res.status(401).send('Invalid username or password');
      }
 
   
  });

  

