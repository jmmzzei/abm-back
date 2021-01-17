'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'designers',
      {
      id: {
        type: Sequelize.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
      },
        first_name: { type: Sequelize.STRING(60), allowNull: false },
        last_name: {
          type: Sequelize.STRING(60),
          allowNull: false,
        },
        birthdate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        type_id: {
          type: Sequelize.SMALLINT,
          allowNull: false,
          references: {
            model: 'types',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },
        company_id: {
          type: Sequelize.SMALLINT,
          allowNull: false,
          references: {
            model: 'companies',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
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
      await queryInterface.dropTable('designers');
  }
};
