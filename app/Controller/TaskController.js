const taskModel = require('../Models/TaskModel');
const userModel = require('../Models/UserModel');

const categroyModel = require('../Models/TaskModel');
const asyncHandler = require('express-async-handler')
const ApiError = require('../../utils/ApiError');


exports.getTasks  = asyncHandler( async (req , res ) => {
    const page = req.query.page * 1 || 1 ;
    const limit = req.query.limit * 1 || 5 ;
    const skip = (page - 1) * limit ;

    const listTasks = await taskModel.find({}).skip(skip).limit(limit);
    res.status(200).json({result : listTasks.length , page , data : listTasks});
  });


  exports.getTask = asyncHandler(async (req , res , next ) => {
    const {id} = req.params ;
    const task = await taskModel.findById(id);
    if(!task){
      return next(new ApiError(`the task is not fauond !` , 400) );
      }
    res.status(200).json({data : task});
  });

  exports.createTask = asyncHandler( async (req , res ) => {
     const {title , started_at , ended_at , description , userId } = req.body ;
     const user = await userModel.findOne({ userId });
     const task = await taskModel.create({title , started_at , ended_at  , description , user});
     res.status(201).json({data : task})
 
  });


exports.updateTask = asyncHandler(async (req,res, next ) => {
     const {id} = req.params ;
     const {title , started_at , ended_at , description  ,completed } = req.body ;
     const task = await taskModel.findOneAndUpdate({_id : id},{title , started_at , ended_at , description , completed },{new : true});

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












