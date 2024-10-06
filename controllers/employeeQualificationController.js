const EmployeeQualification = require('../models/employeeQualification');

exports.createEmployeeQualification = async (req, res) => {
  try {
    const employeeQualification = await EmployeeQualification.create(req.body);
    res.status(201).json(employeeQualification);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllEmployeeQualifications = async (req, res) => {
  try {
    const employeeQualifications = await EmployeeQualification.findAll();
    res.status(200).json(employeeQualifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEmployeeQualificationById = async (req, res) => {
  try {
    const employeeQualification = await EmployeeQualification.findById(req.params.id);
    if (!employeeQualification) {
      return res.status(404).json({ error: 'Employee Qualification not found' });
    }
    res.status(200).json(employeeQualification);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateEmployeeQualification = async (req, res) => {
  try {
    const employeeQualification = await EmployeeQualification.update(req.params.id, req.body);
    if (!employeeQualification) {
      return res.status(404).json({ error: 'Employee Qualification not found' });
    }
    res.status(200).json(employeeQualification);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteEmployeeQualification = async (req, res) => {
  try {
    const employeeQualification = await EmployeeQualification.delete(req.params.id);
    if (!employeeQualification) {
      return res.status(404).json({ error: 'Employee Qualification not found' });
    }
    res.status(200).json({ message: 'Employee Qualification deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
