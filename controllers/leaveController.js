const Leave = require('../models/leave');

exports.createLeave = async (req, res) => {
  try {
    const leave = await Leave.create(req.body);
    res.status(201).json(leave);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllLeaves = async (req, res) => {
  try {
    const leaves = await Leave.findAll();
    res.status(200).json(leaves);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getLeaveById = async (req, res) => {
  try {
    const leave = await Leave.findById(req.params.id);
    if (!leave) {
      return res.status(404).json({ error: 'Leave not found' });
    }
    res.status(200).json(leave);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateLeave = async (req, res) => {
  try {
    const leave = await Leave.update(req.params.id, req.body);
    if (!leave) {
      return res.status(404).json({ error: 'Leave not found' });
    }
    res.status(200).json(leave);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteLeave = async (req, res) => {
  try {
    const leave = await Leave.delete(req.params.id);
    if (!leave) {
      return res.status(404).json({ error: 'Leave not found' });
    }
    res.status(200).json({ message: 'Leave deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
