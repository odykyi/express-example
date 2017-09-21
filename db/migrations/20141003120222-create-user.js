"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        username: {
          type: Sequelize.STRING,
        },
        createdAt: {
          type: Sequelize.DATE,
        },
        updatedAt: {
          type: Sequelize.DATE,
        },
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .dropTable('Users');
  }
};
