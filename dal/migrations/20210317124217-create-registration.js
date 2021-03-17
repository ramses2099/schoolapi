'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Registrations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sectionId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Sections'
          },
          key: 'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
        allowNull: false
      },
      studentId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Students'
          },
          key: 'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
        allowNull: false
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Registrations');
  }
};