// create schema 
const mongoose = require('mongoose');
const SubTask = require('./SubTask');
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    started_at: {
        type: Date,
        default: Date.now
    },
    ended_at: {
        type: Date,
        default: Date.now
    },
    completed: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
    ,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    userId : String,
    
});
 // Create model 

 const taskModel = new mongoose.model('Tasks' , taskSchema);



 module.exports = taskModel ;
