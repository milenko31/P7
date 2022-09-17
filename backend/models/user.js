'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {}
    };
    User.init({
        name: DataTypes.STRING,
        firstname: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        isAdmin: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;

};