const Department = require('../models/department');

exports.createDepartment = async (req, res) => {
  try {
    const department = await Department.create(req.body);
    res.status(201).json(department);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll();
    res.status(200).json(departments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDepartmentById = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);
    if (!department) {
      return res.status(404).json({ error: 'Department not found' });
    }
    res.status(200).json(department);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateDepartment = async (req, res) => {
  try {
    const department = await Department.update(req.params.id, req.body);
    if (!department) {
      return res.status(404).json({ error: 'Department not found' });
    }
    res.status(200).json(department);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteDepartment = async (req, res) => {
  try {
    const department = await Department.delete(req.params.id);
    if (!department) {
      return res.status(404).json({ error: 'Department not found' });
    }
    res.status(200).json({ message: 'Department deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
