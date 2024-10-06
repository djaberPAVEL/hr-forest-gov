const express = require('express');
const router = express.Router();
const employeeQualificationController = require('../controllers/employeeQualificationController');

router.post('/employee-qualification', employeeQualificationController.createEmployeeQualification);
router.get('/employee-qualification', employeeQualificationController.getAllEmployeeQualifications);
router.get('/employee-qualification/:id', employeeQualificationController.getEmployeeQualificationById);
router.put('/employee-qualification/:id', employeeQualificationController.updateEmployeeQualification);
router.delete('/employee-qualification/:id', employeeQualificationController.deleteEmployeeQualification);

module.exports = router;
