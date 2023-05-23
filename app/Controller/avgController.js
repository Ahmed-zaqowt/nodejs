const taskModel = require("../Models/TaskModel");

const asyncHandler = require("express-async-handler");



exports.countDocumentss =  asyncHandler( async (req, res) => {
    try {
      const count = await taskModel.countDocuments({ completed: true });
      const totalTasksCount = await taskModel.countDocuments();
      const completedTasksCount = count;
      if (totalTasksCount === 0) {
        return 0;
    }
    const completedTasksPercentage = (completedTasksCount / totalTasksCount) * 100;

     res.json({data : completedTasksPercentage + "%"});

    } catch (error) {
      res.status(500).json({ error: 'Error occurred while counting documents' });
    }
  });


   exports.getTasksCompletedPerDayAverage = asyncHandler(async (req ,res) => {
   
  
});
  

  