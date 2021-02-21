'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            access_token: {
                type: Sequelize.DataTypes.TEXT,
                unique: false,
                allowNull: true,
            },
            email_verified_at: {
                type: Sequelize.DataTypes.DATE,
                allowNull: true
            },
            password: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            avatar: {
                type: Sequelize.DataTypes.STRING,
                allowNull: true
            },
            created_at: {
                type: Sequelize.DataTypes.DATE
            },
            updated_at: {
                type: Sequelize.DataTypes.DATE
            },
            phone: {
                type: Sequelize.DataTypes.STRING
            }
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('users');
    }
};