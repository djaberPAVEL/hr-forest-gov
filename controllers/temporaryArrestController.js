const TemporaryArrest = require('../models/temporaryArrest');

const temporaryArrestController = {
  createTemporaryArrest: async (req, res) => {
    try {
      const newTemporaryArrest = await TemporaryArrest.create(req.body);
      res.json(newTemporaryArrest);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },

  getAllTemporaryArrests: async (req, res) => {
    try {
      const temporaryArrests = await TemporaryArrest.findAll();
      res.json(temporaryArrests);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },

  getTemporaryArrestById: async (req, res) => {
    try {
      const temporaryArrest = await TemporaryArrest.findById(req.params.id);
      if (!temporaryArrest) {
        return res.status(404).json({ msg: 'Temporary arrest not found' });
      }
      res.json(temporaryArrest);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },

  updateTemporaryArrest: async (req, res) => {
    try {
      const updatedTemporaryArrest = await TemporaryArrest.update(req.params.id, req.body);
      if (!updatedTemporaryArrest) {
        return res.status(404).json({ msg: 'Temporary arrest not found' });
      }
      res.json(updatedTemporaryArrest);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },

  deleteTemporaryArrest: async (req, res) => {
    try {
      const deletedTemporaryArrest = await TemporaryArrest.delete(req.params.id);
      if (!deletedTemporaryArrest) {
        return res.status(404).json({ msg: 'Temporary arrest not found' });
      }
      res.json({ msg: 'Temporary arrest deleted' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
};

module.exports = temporaryArrestController;
