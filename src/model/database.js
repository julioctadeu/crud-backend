var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME || 'node',//database
    process.env.DB_USER || 'root', // user
    process.env.DB_PASS || '', // password
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = sequelize;