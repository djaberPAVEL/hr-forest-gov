const Transfer = require('../models/transfer');

exports.createTransfer = async (req, res) => {
  try {
    const transfer = await Transfer.create(req.body);
    res.status(201).json(transfer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllTransfers = async (req, res) => {
  try {
    const transfers = await Transfer.findAll();
    res.status(200).json(transfers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTransferById = async (req, res) => {
  try {
    const transfer = await Transfer.findById(req.params.id);
    if (!transfer) {
      return res.status(404).json({ error: 'Transfer not found' });
    }
    res.status(200).json(transfer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTransfer = async (req, res) => {
  try {
    const transfer = await Transfer.update(req.params.id, req.body);
    if (!transfer) {
      return res.status(404).json({ error: 'Transfer not found' });
    }
    res.status(200).json(transfer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTransfer = async (req, res) => {
  try {
    const transfer = await Transfer.delete(req.params.id);
    if (!transfer) {
      return res.status(404).json({ error: 'Transfer not found' });
    }
    res.status(200).json({ message: 'Transfer deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
