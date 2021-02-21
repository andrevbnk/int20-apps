const Sequilize = require('sequelize');

const Model = Sequilize.Model;
class Advert extends Model {}
Advert.init(
    {
        id: {
            type: Sequilize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: Sequilize.DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            field: 'user_id',
            references: {
                model: 'users',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        title: {
            type: Sequilize.STRING,
            allowNull: false
        },
        description: {
            type: Sequilize.TEXT,
            allowNull: false
        },
        type: {
            type: Sequilize.STRING,
            allowNull: false
        },
        animalType: {
            type: Sequilize.STRING,
            allowNull: false
        },
        animalSize: {
            type: Sequilize.STRING,
            allowNull: false
        },
        animalColor: {
            type: Sequilize.STRING,
            allowNull: false
        },
        location: {
            type: Sequilize.STRING,
            allowNull: false
        },
        status: {
            type: Sequilize.BOOLEAN,
            allowNull: false,
            defaultValue: 'active'
        },
        createdAt: {
            type: Sequilize.DATE,
            allowNull: false,
            defaultValue: Date.now(),
            field: 'created_at'
        }
    },
    {
        sequelize: require('../database/connection'),
        modelName: 'advert',
        tableName: 'adverts',
        timestamps: false
    }
);

module.exports = Advert;