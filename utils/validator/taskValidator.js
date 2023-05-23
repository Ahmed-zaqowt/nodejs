const { check } = require('express-validator');
const validatorMiddleware = require('../../app/middlewares/validatorMiddleware');
/*
 exports.getTaskByIdVali = [
     check('id').isMongoId().withMessage('ahmed hamed') ,
    validatorMiddleware 
];
*/
exports.createTaskVali = [
    check('title')
    .notEmpty()
    .withMessage('title required')
    .isLength({ min: 3 })
    .withMessage('Too short title')
    ,

  check('description')
    .notEmpty()
    .withMessage('description required')
    .isLength({ min: 10 })
    .withMessage('Too short description')
 ,


  validatorMiddleware,
];
