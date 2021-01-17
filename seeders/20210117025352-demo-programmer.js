'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'programmers',
      [
        {
          first_name: 'Ramón',
          last_name: 'Arcun',
          birthdate: '1989-09-10',
          language_id: 1,
          company_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: 'Mario',
          last_name: 'Perez',
          birthdate: '1960-02-03',
          language_id: 2,
          company_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: 'Pedro',
          last_name: 'Ricardo',
          birthdate: '1985-01-02',
          language_id: 3,
          company_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: 'Juan',
          last_name: 'Mario',
          birthdate: '1994-04-01',
          language_id: 2,
          company_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
