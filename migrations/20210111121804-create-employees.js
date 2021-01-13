'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'employees',
      {
        id: {
          type: Sequelize.SMALLINT(),
          primaryKey: true,
          autoIncrement: true,
        },
        first_name: {
          type: Sequelize.STRING(60),
          allowNull: false,
        },
        last_name: {
          type: Sequelize.STRING(60),
          allowNull: false,
        },
        age: {
          type: Sequelize.SMALLINT(),
          allowNull: false,
        },
        type: {
          type: Sequelize.ENUM('programador', 'diseñador'),
          allowNull: false,
        },
        language: {
          type: Sequelize.ENUM('python', 'php', 'net'),
        },
        role: {
          type: Sequelize.ENUM('gráfico', 'web'),
        },
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
    await queryInterface.dropTable('employees')
  },
}
