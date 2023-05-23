const SubTask = require('../Models/SubTask');
const asyncHandler = require('express-async-handler')
const ApiError = require('../../utils/ApiError');
const {ObjectId} = require('bson');
 
exports.getSubTasks  = asyncHandler( async (req , res ) => {   
     
    const idtask = new ObjectId(req.params.id); 
    
   
      const listTasks = await SubTask.find({'taskID' : idtask});
      
      res.status(200).json({result : listTasks.length , data : listTasks});
   

  });


  exports.getSubTask = asyncHandler(async (req , res , next ) => {
    const _id = new ObjectId(req.params.id);
    const task = await SubTask.findOne(_id);
    if(!task){
      return next(new ApiError(`the task is not fauond !` , 400) );
      }
    res.status(200).json({data : task});
  });

  exports.createSubTask = asyncHandler( async (req , res ) => {
     const {title , description , taskID  } = req.body ;
     
     const task = await SubTask.create({title , description  , taskID  });
     res.status(201).json({data : task})

  });


exports.updateSubTask = asyncHandler(async (req,res, next ) => {
     const {id} = req.params ;
     const {title , description ,completed } = req.body ;
     const task = await SubTask.findOneAndUpdate({_id : id},{title , description , completed },{new : true});

     if(!task){
      return next(new ApiError(`the task is not fauond !` , 400) );
     }
     res.status(200).json({data : task});

});



exports.deleteSubTask = asyncHandler(async (req,res,next) => {
  const {id} = req.params ;
  const task = await  SubTask.findOneAndDelete(id);
  if(!task){
    return next(new ApiError(`the task is not fauond !` , 400) );
  }
  res.status(200).send("deleted suc");
});












