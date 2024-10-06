const Qualification = require('../models/qualification');

exports.createQualification = async (req, res) => {
  try {
    const qualification = await Qualification.create(req.body);
    res.status(201).json(qualification);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllQualifications = async (req, res) => {
  try {
    const qualifications = await Qualification.findAll();
    res.status(200).json(qualifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getQualificationById = async (req, res) => {
  try {
    const qualification = await Qualification.findById(req.params.id);
    if (!qualification) {
      return res.status(404).json({ error: 'Qualification not found' });
    }
    res.status(200).json(qualification);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateQualification = async (req, res) => {
  try {
    const qualification = await Qualification.update(req.params.id, req.body);
    if (!qualification) {
      return res.status(404).json({ error: 'Qualification not found' });
    }
    res.status(200).json(qualification);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteQualification = async (req, res) => {
  try {
    const qualification = await Qualification.delete(req.params.id);
    if (!qualification) {
      return res.status(404).json({ error: 'Qualification not found' });
    }
    res.status(200).json({ message: 'Qualification deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
