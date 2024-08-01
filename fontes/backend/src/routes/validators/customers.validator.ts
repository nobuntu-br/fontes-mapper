import { check, query } from 'express-validator'; 

export const createNewCustomersValidator = [ 
    check('company').notEmpty().withMessage('company is required'), 
  ]; 

export const createNewCustomersValidator = [ 
  query('page').notEmpty().isNumeric().withMessage('Only digits allowed in title page'), 
  query('limit').optional().isNumeric().withMessage('Only digits allowed in title limit') 
  ]; 
