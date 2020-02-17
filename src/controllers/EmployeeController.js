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

    res.json({sucess: true, data : response});
}

controllers.list = async ( req, res ) => {
    const data = await Employee.findAll
    res.json(data)
}

Role.create({
    role: 'Admin'
})

Employee.create({
    name: 'Malena Morgan',
    email: 'malena@gmail.com',
    address: ' California Cll 108',
    phone: '123456789',
    roleId: 15
})


module.exports = controllers;