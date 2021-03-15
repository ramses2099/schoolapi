const { DataTypes } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    const UserCourse = sequelize.define(
        "userCourses",
        {
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            courseId: {
                type: DataTypes.INTEGER,
                allowNull: false
            }           
        },
        {
            tableName: "userCourses",
            timestamps: false
        }
    );

    UserCourse.associate = function(models){        

    }

    return UserCourse;
}