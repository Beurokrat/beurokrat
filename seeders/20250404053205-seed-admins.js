'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('admin_details', [
      {
        username: 'admin@beurokrat.com',
        password: '$2a$12$o2mG3wvC./wpcM4UPza29eyx2FuP7OJ3Ovl/1ZcaWHAksn24xkQDC', // hashed password for 'admin'
        created_at: new Date(),
        updated_at: null
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('admin_details', null, {});
  }
};
