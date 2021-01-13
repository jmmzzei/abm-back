'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('employees', 'company_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'companies',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('employees', 'company_id')
  },
}
