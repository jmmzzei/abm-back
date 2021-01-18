const designerModel = require('../models/index')['designer']
const programmerModel = require('../models/index')['programmer']
const typeModel = require('../models/index')['type']
const languageModel = require('../models/index')['language']
const { getAge, getAverage } = require('../helpers/getAgeAverage')

const APIResponse = require('../services/APIResponse')
const QueryConfig = require('../helpers/QueryConfig')

const models = {
  programmer: programmerModel,
  designer: designerModel,
}

exports.getAll = async (req, res) => {
  const response = new APIResponse(res)
  try {
    let { role } = req.params
    let employees

    if (role != 'all') {
      let query = new QueryConfig(role, req.query)
      let config = query.getConfig()
      employees = await models[role].findAll(config)
    } else {
      let programmerQuery = new QueryConfig('programmer', req.query)
      let programmerConfig = programmerQuery.getConfig()
      let programmers = await programmerModel.findAll(programmerConfig)

      let designerQuery = new QueryConfig('designer', req.query)
      let designerConfig = designerQuery.getConfig()
      let designers = await designerModel.findAll(designerConfig)

      employees = designers.concat(programmers)
    }

    let ages = employees.map(el => getAge(el.birthdate))
    let average = getAverage(ages)

    let employeeAndAverage = { employees, average }
    response.respondWith('success', employeeAndAverage)
  } catch (error) {
    response.respondWith('error', error)
  }
}

exports.getById = async (req, res) => {
  const response = new APIResponse(res)
  try {
    let { role, id } = req.params

    let query = new QueryConfig(role)
    let config = query.getConfig()
    let employee = await models[role].findByPk(id, config)

    response.respondWith('success', employee)
  } catch (error) {
    response.respondWith('error', error)
  }
}

exports.create = async (req, res) => {
  const response = new APIResponse(res)
  try {
    let {
      first_name,
      last_name,
      birthdate,
      role,
      typeId,
      languageId,
      companyId,
    } = req.body

    let query = new QueryConfig(role)
    let config = query.getPostConfig({
      first_name,
      last_name,
      birthdate,
      type_id: typeId,
      language_id: languageId,
      company_id: companyId,
    })
    let employee = await models[role].create(config)

    response.respondWith('success', employee)
  } catch (error) {
    response.respondWith('error', error)
  }
}

exports.delete = async (req, res) => {
  const response = new APIResponse(res)
  try {
    let { role, id } = req.params

    let deleted = await models[role].destroy({ where: { id } })
    response.respondWith('success', deleted)
  } catch (error) {
    response.respondWith('error')
  }
}

exports.edit = async (req, res) => {
  const response = new APIResponse(res)
  try {
    let {
      first_name,
      last_name,
      birthdate,
      typeId,
      languageId,
      companyId,
      role,
    } = req.body
    let { id } = req.params

    let query = new QueryConfig(role)
    let config = query.getPostConfig({
      first_name,
      last_name,
      birthdate,
      type_id: typeId,
      language_id: languageId,
      company_id: companyId,
    })
    let updated = await models[role].update(config, { where: { id } })
    response.respondWith('success', updated)
  } catch (error) {
    response.respondWith('error', error)
  }
}
