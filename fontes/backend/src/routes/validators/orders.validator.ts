import { check, query } from 'express-validator'; 

export const createNewOrdersValidator = [ 
  ]; 

export const createNewOrdersValidator = [ 
  query('page').notEmpty().isNumeric().withMessage('Only digits allowed in title page'), 
  query('limit').optional().isNumeric().withMessage('Only digits allowed in title limit') 
  ]; 
