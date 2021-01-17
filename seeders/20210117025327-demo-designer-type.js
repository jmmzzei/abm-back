'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'types',
      [
        {
          name: 'web',
        },
        {
          name: 'gráfico',
        },
      ],
      {},
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('types', null, {})
  },
}
