'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Storages', // table name
        'createdAt', // field name
        {
          type: Sequelize.DATE,
          allowNull: true
        }
      ),
      queryInterface.addColumn(
        'Storages', 
        'updatedAt',
        {
          type: Sequelize.DATE,
          allowNull: true
        }
      ),
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
