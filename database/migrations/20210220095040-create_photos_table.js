'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('photos', {
            id: {
                type: Sequelize.DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            advert_id: {
                type: Sequelize.DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'adverts',
                    key: 'id'
                },
                onDelete: 'CASCADE'
            },
            is_main: {
                type: Sequelize.DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            path: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            created_at: {
                type: Sequelize.DataTypes.DATE
            }
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('photos');
    }
};