const express = require('express')
const router = express.Router()
const employees = require('../controllers/employees')

router.get('/', employees.getAll)
router.get('/:id', employees.getById)
router.post('/', employees.create)
router.patch('/:id', employees.edit)
router.delete('/:id', employees.delete)

module.exports = router
