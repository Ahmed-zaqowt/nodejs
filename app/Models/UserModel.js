const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
          type : String ,
          required: [true , "user name is req"],
           
    } ,
    username: {
        type:  String,
        required: [true , "user user is req"],
       // unique: true
    },
    password: {
        type: String,
        required: [true , "user password is req"],
    },
    date: {
        type: Date,
        default: Date.now
    },
});
const model = mongoose.model('Users' , userSchema);

module.exports = model;