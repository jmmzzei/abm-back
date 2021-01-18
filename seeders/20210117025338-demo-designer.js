'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'designers',
      [
        {
          first_name: 'Juan',
          last_name: 'Perez',
          birthdate: '1985-06-02',
          type_id: 1,
          company_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: 'María',
          last_name: 'Fernandez',
          birthdate: '1980-06-06',
          type_id: 2,
          company_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: 'Milagros',
          last_name: 'Alsina',
          birthdate: '1994-01-01',
          type_id: 2,
          company_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: 'Jose',
          last_name: 'Gonzalez',
          birthdate: '1971-06-01',
          type_id: 1,
          company_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('designers', null, {})
  },
}
