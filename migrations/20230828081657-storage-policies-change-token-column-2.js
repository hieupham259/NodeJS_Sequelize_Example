'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all(
      [
        queryInterface.addColumn(
          'StoragePolicies', // table name
          'token', // field name
          {
            type: Sequelize.STRING,
            allowNull: false
          }
        ),
      ]
    ) 
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
