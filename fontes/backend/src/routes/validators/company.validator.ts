import { check, query } from 'express-validator'; 

export const createNewCompanyValidator = [ 
  ]; 

export const findAllCompanyValidator = [ 
  query('page').notEmpty().isNumeric().withMessage('Only digits allowed in title page'), 
  query('limit').optional().isNumeric().withMessage('Only digits allowed in title limit') 
  ]; 
