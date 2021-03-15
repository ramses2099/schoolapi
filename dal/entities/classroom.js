const { DataTypes } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    const ClassRoom = sequelize.define(
        "classrooms",
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            className: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            tableName: "classrooms",
            timestamps: false
        }
    );

    ClassRoom.associate = function(models){
        ClassRoom.hasMany(models.users,{
            foreignKey: "classroomId",
            as: "users"
        });      

    }

    return ClassRoom;
}