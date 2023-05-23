const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

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

userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    next();
});
const model = mongoose.model('Users' , userSchema);

module.exports = model;