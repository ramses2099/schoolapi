'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Teacher.hasMany(models.Section, {
        foreignKey: 'teacherId',
        as: 'sections'
      });
    }
  };
  Teacher.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    biography: DataTypes.STRING,
    birthdate: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
      sequelize,
      modelName: 'Teacher',
    });
  return Teacher;
};