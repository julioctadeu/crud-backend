var Employee = require('../model/Employee');
var Role = require('../model/Role');
var sequelize = require('../model/database')

const controllers = {}


controllers.test = (req, res) => {
    const data = {
        name : 'Jhon Smith',
        age : 20,
        city : 'London'
    }

    console.log("Send data from controllers employee.");
    res.json(data);

}

controllers.testdata = async ( req, res )=>{
    const response = await sequelize.sync().then(function(){
        const data = Employee.findAll
        return data;
    })

    .catch(err => {
        return err;
    });

    res.json(response);
}

controllers.list = async ( req, res ) => {
    const data = await Employee.findAll
    res.json(data)
}



module.exports = controllers;