const Contract = require('../models/contract');

exports.createContract = async (req, res) => {
  try {
    const contract = await Contract.create(req.body);
    res.status(201).json(contract);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllContracts = async (req, res) => {
  try {
    const contracts = await Contract.findAll();
    res.status(200).json(contracts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getContractById = async (req, res) => {
  try {
    const contract = await Contract.findById(req.params.id);
    if (!contract) {
      return res.status(404).json({ error: 'Contract not found' });
    }
    res.status(200).json(contract);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateContract = async (req, res) => {
  try {
    const contract = await Contract.update(req.params.id, req.body);
    if (!contract) {
      return res.status(404).json({ error: 'Contract not found' });
    }
    res.status(200).json(contract);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteContract = async (req, res) => {
  try {
    const contract = await Contract.delete(req.params.id);
    if (!contract) {
      return res.status(404).json({ error: 'Contract not found' });
    }
    res.status(200).json({ message: 'Contract deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
