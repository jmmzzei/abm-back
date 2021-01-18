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

  describe('GET /employees ', () => {
    test('It should respond with all the employees', async () => {
      const response = await request(app).get('/employees/all')
      expect(response.statusCode).toBe(200)
      expect(response.body.data.employees.length).toBeGreaterThanOrEqual(1)
      expect(response.body.data.employees[0]).toHaveProperty('first_name')
      expect(
        response.body.data.employees[0].id > response.body.data.employees[1].id,
      ).toBe(true)
    })
  })

  test('It should respond with the age average of employees with type programmer', async () => {
    const response = await request(app).get('/employees/programmer')
    expect(response.statusCode).toBe(200)
    expect(response.body.data.employees[0]).toHaveProperty('first_name')

    let age_avg = response.body.data.average
    expect(age_avg).toBe('30.00')
  })
})

describe('GET /employees/:role/:id ', () => {
  test('It should respond with a single designer', async () => {
    const response = await request(app).get('/employees/designer/1')
    expect(response.statusCode).toBe(200)
    expect(typeof response.body.data).toBe('object')
    expect(response.body.data).toHaveProperty('id')
    expect(response.body.data).toHaveProperty('first_name')
  })
})

describe('POST /employees', () => {
  test('It should save a new post', async () => {
    const response = await request(app).post('/employees/').send({
      first_name: 'Posted Name',
      last_name: 'Apellido',
      birthdate: '10-11-1995',
      languageId: 1,
      companyId: 1,
      role: 'programmer',
    })
    expect(response.statusCode).toBe(200)
    expect(response.body.status).toBe('success')
    expect(response.body.data.errors).toBe(undefined)
  })
})

describe('PATCH /employees/:id ', () => {
  test('It should update an existing employee', async () => {
    const response = await request(app).patch('/employees/1').send({
      first_name: 'Patched Name',
      last_name: 'contenido',
      role: 'programmer',
      birthdate: '02-02-1995',
      languageId: 1,
      companyId: 1,
    })
    expect(response.body.data[0]).toEqual(1)
  })

  test('Id should retrieve an error ', async () => {
    const response = await request(app).patch('/employees/2').send({
      first_name: 'Patched Name',
      last_name: 'contenido',
      no_role: 'programmer',
      birthdate: '02-02-1995',
      languageId: 1,
      companyId: 1,
    })
    expect(response.body.status).toEqual('fail')
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
