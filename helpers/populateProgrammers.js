const { programmer } = require('../models/index')

async function populateProgrammer() {
  try {
    const response = await programmer.bulkCreate([
      {
        first_name: 'Enrique',
        last_name: 'Perez',
        birthdate: '10-11-1990',
        language_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: 'María',
        last_name: 'Fernandez',
        birthdate: '10-11-1990',
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

module.exports = populateProgrammer
