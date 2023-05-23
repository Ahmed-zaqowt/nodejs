const taskModel = require('../Models/TaskModel');
const userModel = require('../Models/UserModel');

const asyncHandler = require('express-async-handler');
const ApiError = require('../../utils/ApiError');
const {ObjectId} = require('bson');

exports.getTasks  = asyncHandler( async (req , res ) => {
    const page = req.query.page * 1 || 1 ;
    const limit = req.query.limit * 1 || 5 ;
    const skip = (page - 1) * limit ;

    const listTasks = await taskModel.find({}).sort({
      created_at : 'desc'
    }).skip(skip).limit(limit);
    res.status(200).json({result : listTasks.length , page , data : listTasks});
  });


  exports.getTask = asyncHandler(async (req , res , next ) => {
    const id = new ObjectId(req.params.id)  ;
    const task = await taskModel.findById(id);
    if(!task){
      return next(new ApiError(`the task is not fauond !` , 400) );
      }
    res.status(200).json({data : task});
  });

  exports.createTask = asyncHandler( async (req , res ) => {
     const {title , started_at , ended_at , description  } = req.body ;
     
      const now = new Date();
      const task = await taskModel.create({title , started_at , ended_at  , description  , created_at : now, userId : '646cc859cb0a73db5ef354c8' , updated_at : null });
      res.status(201).json({data : task})

 
  });


exports.updateTask = asyncHandler(async (req,res, next ) => {
     const id = new ObjectId(req.params.id) ;
     const {title , started_at , ended_at , description  ,completed } = req.body ;
     const now = new Date();
     const task = await taskModel.findOneAndUpdate({_id : id},{title , started_at , ended_at , description , completed , updated_at : now },{new : true});

     if(!task){
      return next(new ApiError(`the task is not fauond !` , 400) );
     }
     res.status(200).json({data : task});

});



exports.deleteTask = asyncHandler(async (req,res,next) => {
  const {id} = req.params ;
  const task = await  taskModel.findOneAndDelete(id);
  if(!task){
    return next(new ApiError(`the task is not fauond !` , 400) );
  }
  res.status(200).send("deleted suc");
});















