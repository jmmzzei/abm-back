'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'languages',
      {
      id: {
        type: Sequelize.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
      },
        name: { type: Sequelize.STRING(20), allowNull: false },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date(),
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date(),
        },
        deleted_at: Sequelize.DATE,
      },
      { underscored: true },
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('languages')
  },
}
