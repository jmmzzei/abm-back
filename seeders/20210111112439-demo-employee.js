'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'employees',
      [
        {
          first_name: 'Juan',
          last_name: 'Perez',
          age: 50,
          type: 'diseñador',
          role: 'gráfico',
          company_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: 'María',
          last_name: 'Fernandez',
          age: 54,
          type: 'programador',
          language: 'php',
          company_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: 'Milagros',
          last_name: 'Alsina',
          age: 20,
          type: 'programador',
          language: 'net',
          company_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: 'Jose',
          last_name: 'Gonzalez',
          age: 54,
          type: 'diseñador',
          role: 'web',
          company_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: 'Pedro',
          last_name: 'Ricardo',
          age: 32,
          type: 'programador',
          language: 'python',
          company_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: 'Juan',
          last_name: 'Mario',
          age: 39,
          type: 'programador',
          language: 'net',
          company_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('employees', null, {})
  },
}
