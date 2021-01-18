const { type } = require('../models/index')

async function populateTypes() {
  try {
    const response = await type.bulkCreate([
      {
        name: 'web',
      },
      {
        name: 'gráfico',
      },
    ])
    if (response.length == 2)
      return new Promise((resolve, reject) => {
        resolve(true)
      })
  } catch (e) {
    return new Promise((resolve, reject) => {
      reject(new Error(e))
    })
  }
}

module.exports = populateTypes
