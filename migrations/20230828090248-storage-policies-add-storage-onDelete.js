'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'StoragePolicies',
        'storage',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Storages', 
            key: 'id',
          },
          onDelete: 'CASCADE',
        }
      )
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
