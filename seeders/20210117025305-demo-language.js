'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'languages',
      [
        {
          name: 'php',
        },
        {
          name: 'net',
        },
        {
          name: 'python',
        },
      ],
      {},
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('languages', null, {})
  },
}
