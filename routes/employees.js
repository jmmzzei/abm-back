const express = require('express')
const router = express.Router()
const employees = require('../controllers/employees')
const mid = require('../middlewares/employees')

router.get('/:role', mid.role, employees.getAll)
router.get('/:role/:id', mid.role, mid.id, employees.getById)
router.post('/', mid.post, employees.create)
router.patch('/:id', mid.patch, employees.edit)
router.delete('/:role/:id', mid.role, mid.id, employees.delete)

module.exports = router
