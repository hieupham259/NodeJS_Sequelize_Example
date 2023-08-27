'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Storages', [{
      name: 'Storage Seed 1',
      private: 0
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Storages', null, {});
  }
};
