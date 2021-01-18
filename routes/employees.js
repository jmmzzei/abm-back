const express = require('express')
const router = express.Router()
const employees = require('../controllers/employees')
const mid = require('../middlewares/employees')

router.get('/:role', mid.role, employees.getAll)
router.get('/:role/:id', mid.roleWOAll, mid.id, employees.getById)
router.post('/', mid.roleWOAll, mid.post, employees.create)
router.patch('/:id', mid.roleWOAll, mid.patch, employees.edit)
router.delete('/:role/:id', mid.roleWOAll, mid.id, employees.delete)

module.exports = router
