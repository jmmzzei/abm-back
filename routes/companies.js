const express = require('express')
const router = express.Router()
const companies = require('../controllers/companies')
const companiesMid = require('../middlewares/companies')

router.get('/:id', companiesMid.getId, companies.getById)
router.patch('/:id', companiesMid.patch, companies.edit)

module.exports = router
