const express = require('express');
const { param, validationResult } = require('express-validator');
const {getTaskByIdVali , createTaskVali} = require('../utils/validator/taskValidator');

const { getTasks ,
     createTask ,
      getTask , 
      updateTask ,
      deleteTask ,
     } = require('../app/Controller/TaskController');
const { count } = require('../app/Models/UserModel');

const router = express.Router();

router.get('/' , getTasks) ;
router.post('/create' ,createTaskVali , createTask);
router.route('/:id').get( getTask).put(updateTask).delete(deleteTask);
router.route('/completed/:id')


module.exports = router ;























