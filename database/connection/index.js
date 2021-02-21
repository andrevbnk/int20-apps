const Sequelize = require('sequelize');
const env = process.env.PROCESS_ENV || 'development';
const config = require('../../config/database')[env];

module.exports = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        logging: false,
    }
);