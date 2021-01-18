process.env.NODE_ENV = 'test'
const app = require('../index')
const request = require('supertest')
const db = require('../models/index')
const populateProgrammers = require('../helpers/populateProgrammers')
const populateDesigners = require('../helpers/populateDesigners')
const populateTypes = require('../helpers/populateTypes')
const populateLanguages = require('../helpers/populateLanguages')
const populateCompanies = require('../helpers/populateCompanies')

describe('/companies', () => {
  beforeAll(async () => {
    try {
      await db.sequelize
        .sync({ force: true })
        .then(() => {
          console.log(
            'Connection succesfully established with: ' +
              db.sequelize.getDatabaseName(),
          )
        })
        .then(() => {
          populateCompanies()
        })
        .then(() => {
          populateTypes()
        })
        .then(() => {
          populateLanguages()
        })
        .then(() => {
          populateProgrammers()
        })
        .then(() => {
          populateDesigners()
        })
        .catch(e => {
          throw new Error(e)
        })
    } catch (e) {
      throw new Error(e)
    }
  })

  describe('GET /companies/:id ', () => {
    test('It should respond with a company with id = 1', async () => {
      const response = await request(app).get('/companies/1')
      expect(response.statusCode).toBe(200)
      expect(typeof response.body.data).toBe('object')
      expect(response.body.data).toHaveProperty('id')
      expect(response.body.data.id).toBe(1)
      expect(response.body.data).toHaveProperty('name')
    })
  })

  describe('PATCH /companies/:id ', () => {
    test('It should update an existing company', async () => {
      const response = await request(app).patch('/companies/1').send({
        name: 'Organization Test Patched',
      })
      expect(response.body.data).toEqual([1])
    })
  })

  afterAll(async () => {
    try {
      await db.sequelize.close().then(async () => {
        console.log('Connection closed.')
      })
    } catch (e) {
      throw new Error(e)
    }
  })
})
