const companyModel = require('../models/index')['company']
const APIResponse = require('../services/APIResponse')
const { validationResult } = require('express-validator')

exports.getById = async (req, res) => {
  let response = new APIResponse(res)
  try {
    let err = validationResult(req)
    if (!err.isEmpty()) response.respondWith('fail', err.errors[0])

    let company = await companyModel.findByPk(req.params.id)
    response.respondWith('success', company)
  } catch (error) {
    response.respondWith('error')
  }
}

exports.edit = async (req, res) => {
  let response = new APIResponse(res)
  try {
    let err = validationResult(req)
    if (!err.isEmpty()) response.respondWith('fail', err.errors[0])

    let { name } = req.body
    let { id } = req.params
    let putResponse = await companyModel.update({ name }, { where: { id } })

    response.respondWith('success', putResponse)
  } catch (error) {
    response.respondWith('error')
  }
}
