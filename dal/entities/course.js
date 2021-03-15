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
            courseName: {
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
        Course.belongsToMany(models.users,{
            through:"userCourses",
            foreignKey: "courseId",
            as: "users"
        });

        Course.belongsTo(models.lecturers,{            
            foreignKey: "lecturerid",
            as: "lecturers"
        });

    }

    return Course;
}