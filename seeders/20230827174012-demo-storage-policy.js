'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let expiredTime = new Date(Date.UTC(2024, 12, 31))
    return queryInterface.bulkInsert('StoragePolicies', [{
      token: JSON.stringify({
        "Effect": "Allow",
        "Resource": 1,
        "Action": ["Read", "Write"],
        "ExpiredTime": expiredTime.toLocaleString()
      }),
      storage: 2
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
