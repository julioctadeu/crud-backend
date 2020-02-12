// import sequelize
var Sequelize = require('sequelize');

// importing connection database
var sequelize = require('./database');

//import model for FK roleID
var Role = require('./Role');

var nametable = 'employee';

var Employee = sequelize.define(nametable, {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name: Sequelize.STRING,
    email: Sequelize.STRING,
    adress: Sequelize.STRING,
    phone: Sequelize.BIGINT,
    roleId: {
        // reference to another model
        type: Sequelize.INTEGER,
        reference: {
            model: Role,
            key: 'id'
        }
    }

})


Employee.belongsTo(Role)

module.exports = Employee