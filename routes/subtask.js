const express = require('express');
const { getSubTasks ,  createSubTask , getSubTask , updateSubTask ,deleteSubTask} = require('../app/Controller/SubTaskController');
const router = express.Router();
router.get('/subfind/:id' , getSubTasks);
router.post('/create' , createSubTask);
router.route('/:id').get(getSubTask).put(updateSubTask).delete(deleteSubTask);

module.exports = router ;























