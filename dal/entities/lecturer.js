const { DataTypes } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    const Lecturer = sequelize.define(
        "lecturers",
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            lectureName: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            tableName: "lecturers",
            timestamps: false
        }
    );

    Lecturer.associate = function(models){
        Lecturer.hasOne(models.courses,{  
            foreignKey: "lecturerId",
            as: "courses"
        });
    }

    return Lecturer;
}