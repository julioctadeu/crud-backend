const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/EmployeeController')

router.get('/save', (req,res) => {
    res.json({status:'Employeed Saved'});
});

router.get('/testdata', EmployeeController.testdata);
router.get('/test', EmployeeController.test);
router.get('/list', EmployeeController.list);


module.exports = router; 