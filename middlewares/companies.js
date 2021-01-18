const { check } = require('express-validator')

module.exports = companiesMid = {
  patch: [
    check('name')
      .exists()
      .withMessage('El campo nombre debe existir')
      .not()
      .isEmpty()
      .withMessage('El campo nombre debe tener un valor')
      .escape(),
    check('id')
      .exists()
      .withMessage('El parámetro id debe existir')
      .isInt()
      .withMessage('El id debe ser un número'),
  ],
  getId: [
    check('id')
      .exists()
      .withMessage('El parámetro id debe existir')
      .isInt()
      .withMessage('El id debe ser un número'),
  ],
}

