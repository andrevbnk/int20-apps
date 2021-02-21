'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('adverts', {
            id: {
                type: Sequelize.DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            user_id: {
                type: Sequelize.DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                },
                onDelete: 'CASCADE'
            },
            type: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            title: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: false
            },
            animalType: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            animalSize: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            status: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                defaultValue: 'active'
            },
            lostDate: {
                type: Sequelize.DataTypes.DATE,
                allowNull: true
            },
            animalColor: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            location: {
                type: Sequelize.DataTypes.STRING,
                allowNull: true
            },
            created_at: {
                type: Sequelize.DataTypes.DATE
            }
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('adverts');
    }
};