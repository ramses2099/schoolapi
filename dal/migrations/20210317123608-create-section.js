'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      teacherId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Teachers'
          },
          key: 'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
        allowNull: false
      },
      subjectId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Subjects'
          },
          key: 'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
        allowNull: false
      },
      courseId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Courses'
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
    await queryInterface.dropTable('Sections');
  }
};