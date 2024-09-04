import { check, query } from 'express-validator'; 

export const createNewStringsValidator = [ 
  ]; 

export const findAllStringsValidator = [ 
  query('page').notEmpty().isNumeric().withMessage('Only digits allowed in title page'), 
  query('limit').optional().isNumeric().withMessage('Only digits allowed in title limit') 
  ]; 
