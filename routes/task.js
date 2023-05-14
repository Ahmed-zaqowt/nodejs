const express = require('express');
const { param, validationResult } = require('express-validator');
const {getTaskByIdVali} = require('../utils/validator/taskValidator');
const { getTasks , createTask , getTask , updateTask ,deleteTask} = require('../app/Controller/TaskController');
const router = express.Router();

router.get('/' , getTasks) ;
router.post('/create' , createTask);
router.route('/:id').get(getTask).put(updateTask).delete(deleteTask);

module.exports = router ;























