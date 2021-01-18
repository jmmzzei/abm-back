const { designer } = require('../models/index')

async function populateDesigners() {
  try {
    const response = await designer.bulkCreate([
      {
        first_name: 'Jose',
        last_name: 'Ramon',
        birthdate: '10-03-2000',
        language_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: 'María',
        last_name: 'Fernandez',
        birthdate: '08-09-1960',
        language_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: 'Milagros',
        last_name: 'Alsina',
        birthdate: '10-11-1990',
        language_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])
    if (response.length == 3)
      return new Promise((resolve, reject) => {
        resolve(true)
      })
  } catch (e) {
    return new Promise((resolve, reject) => {
      reject(new Error(e))
    })
  }
}

module.exports = populateDesigners
