import { check, query } from 'express-validator'; 

export const createNewEmployeesValidator = [ 
  ]; 

export const findAllEmployeesValidator = [ 
  query('page').notEmpty().isNumeric().withMessage('Only digits allowed in title page'), 
  query('limit').optional().isNumeric().withMessage('Only digits allowed in title limit') 
  ]; 
