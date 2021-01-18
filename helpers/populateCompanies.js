const { company } = require('../models/index')

async function populateCompanies() {
  try {
    const response = await company.create({
      name: 'Organization One Test',
    })
    if (response.length == 1)
      return new Promise((resolve, reject) => {
        resolve(true)
      })
  } catch (e) {
    return new Promise((resolve, reject) => {
      reject(new Error(e))
    })
  }
}

module.exports = populateCompanies
