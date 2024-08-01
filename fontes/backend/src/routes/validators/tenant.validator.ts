import { check, query } from 'express-validator';
/**
 * Validador de campos
 */
export const createNewTenantValidator = [
  //TODO serão gerados com base no mapa mental
  check('name').notEmpty().withMessage('Name is required'),
]

export const findAllTenantValidator = [
  query('page').notEmpty().isNumeric().withMessage('Only digits allowed in title page'),
  query('limit').optional().isNumeric().withMessage('Only digits allowed in title limit')
]