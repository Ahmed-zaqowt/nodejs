const mongoose = require('mongoose');

const subTaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    taskID : {
        type : mongoose.Schema.Types.ObjectId ,
        ref: 'Tasks' ,
        required : true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    completed: {
        type: Boolean,
        default: false
    },
    
});

 const taskModel = new mongoose.model('SubTasks' , subTaskSchema);



 module.exports = taskModel ;
