const { DataTypes } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    const Course = sequelize.define(
        "courses",
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastname: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            tableName: "courses",
            timestamps: false
        }
    );

    Course.associate = function(models){
        Course.belongsTo(models.classrooms,{
            foreignKey: "classrroomId",
            as: "classrooms"
        });

        Course.belongsToMany(models.courses,{
            through:"usercourses",
            foreignKey: "id",
            as: "courses"
        })

    }

    return Course;
}