const { language } = require('../models/index')

async function populateLanguages() {
  try {
    const response = await language.bulkCreate([
      {
        name: 'php',
      },
      {
        name: 'net',
      },
      {
        name: 'python',
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

module.exports = populateLanguages
