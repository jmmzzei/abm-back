'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'companies',
      [
        {
          name: 'Company One',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('companies', null, {})
  },
}
