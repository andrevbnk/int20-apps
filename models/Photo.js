const Sequilize = require('sequelize');

const Model = Sequilize.Model;
class Photo extends Model {}
Photo.init(
    {
        id: {
            type: Sequilize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        advertId: {
            type: Sequilize.DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            field: 'advert_id',
            references: {
                model: 'adverts',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        path: {
            type: Sequilize.DataTypes.STRING,
            allowNull: false
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
        modelName: 'photo',
        tableName: 'photos',
        timestamps: false
    }
);

module.exports = Photo;