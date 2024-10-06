const Mandate = require('../models/mandate');

const mandateController = {
  createMandate: async (req, res) => {
    try {
      const newMandate = await Mandate.create(req.body);
      res.json(newMandate);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },

  getAllMandates: async (req, res) => {
    try {
      const mandates = await Mandate.findAll();
      res.json(mandates);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },

  getMandateById: async (req, res) => {
    try {
      const mandate = await Mandate.findById(req.params.id);
      if (!mandate) {
        return res.status(404).json({ msg: 'Mandate not found' });
      }
      res.json(mandate);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },

  updateMandate: async (req, res) => {
    try {
      const updatedMandate = await Mandate.update(req.params.id, req.body);
      if (!updatedMandate) {
        return res.status(404).json({ msg: 'Mandate not found' });
      }
      res.json(updatedMandate);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },

  deleteMandate: async (req, res) => {
    try {
      const deletedMandate = await Mandate.delete(req.params.id);
      if (!deletedMandate) {
        return res.status(404).json({ msg: 'Mandate not found' });
      }
      res.json({ msg: 'Mandate deleted' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
};

module.exports = mandateController;
