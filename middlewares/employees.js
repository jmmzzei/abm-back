const APIResponse = require('../services/APIResponse')
const { check } = require('express-validator')

module.exports = employeesMid = {
  role: (req, res, next) => {
    let { role } = req.params
    const response = new APIResponse(res)
    if (role == 'programmer' || role == 'designer' || role == 'all') {
      next()
    } else response.respondWith('fail', 'Role tiene un valor incorrecto')
  },
  roleWOAll: (req, res, next) => {
    let { role } = req.params
    if (!role) role = req.body.role

    const response = new APIResponse(res)
    if (role == 'programmer' || role == 'designer') {
      next()
    } else response.respondWith('fail', 'Role tiene un valor incorrecto')
  },
  id: [
    check('id')
      .exists()
      .withMessage('El parámetro id debe existir')
      .isInt()
      .withMessage('El id debe ser un número'),
  ],
  post: [
    check('first_name')
      .exists()
      .withMessage('first_name debe existir')
      .not()
      .isEmpty()
      .withMessage('first_name no debe estar vacío')
      .trim()
      .escape(),
    check('last_name')
      .exists()
      .withMessage('first_name debe existir')
      .not()
      .isEmpty()
      .withMessage('first_name no debe estar vacío')
      .trim()
      .escape(),
    check('birthdate')
      .exists()
      .withMessage('birthdate debe existir')
      .not()
      .isEmpty()
      .withMessage('birthdate no debe estar vacío')
      .trim()
      .escape(),
    check('role')
      .exists()
      .withMessage('role debe existir')
      .not()
      .isEmpty()
      .withMessage('role no debe estar vacío')
      .trim()
      .escape(),
    check('id')
      .exists()
      .withMessage('id debe existir')
      .isInt()
      .withMessage('El id debe ser un número'),
  ],
  patch: [check('role').trim().escape(), check('companyId').isInt()],
}
