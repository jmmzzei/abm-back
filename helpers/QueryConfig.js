const typeModel = require('../models/index')['type']
const languageModel = require('../models/index')['language']

const camelToSnakeCase = str =>
  str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)

function QueryConfig(role, query = {}) {
  let models = {
    programmer: languageModel,
    designer: typeModel,
  }
  let property = {
    programmer: 'languageId',
    designer: 'typeId',
  }
  let queries = {}
  for (let prop in query) queries[prop] = query[prop]
  this.role = role
  this.config = {}
  this.config.where = queries
  this.config.order = [['id', 'DESC']]
  this.config.include = { model: models[role], attributes: ['name'] }
  this.config.attributes = [
    'id',
    'first_name',
    'last_name',
    'birthdate',
    'companyId',
    'createdAt',
    'updatedAt',
    property[role],
  ]
}

QueryConfig.prototype.getConfig = function () {
  return this.config
}

QueryConfig.prototype.getPostConfig = function (obj) {
  delete obj[camelToSnakeCase(this.role)]
  return obj
}

module.exports = QueryConfig
