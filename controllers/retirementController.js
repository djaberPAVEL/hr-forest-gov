const Retirement = require('../models/retirement');

const retirementController = {
  createRetirement: async (req, res) => {
    try {
      const newRetirement = await Retirement.create(req.body);
      res.json(newRetirement);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },

  getAllRetirements: async (req, res) => {
    try {
      const retirements = await Retirement.findAll();
      res.json(retirements);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },

  getRetirementById: async (req, res) => {
    try {
      const retirement = await Retirement.findById(req.params.id);
      if (!retirement) {
        return res.status(404).json({ msg: 'Retirement not found' });
      }
      res.json(retirement);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },

  updateRetirement: async (req, res) => {
    try {
      const updatedRetirement = await Retirement.update(req.params.id, req.body);
      if (!updatedRetirement) {
        return res.status(404).json({ msg: 'Retirement not found' });
      }
      res.json(updatedRetirement);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },

  deleteRetirement: async (req, res) => {
    try {
      const deletedRetirement = await Retirement.delete(req.params.id);
      if (!deletedRetirement) {
        return res.status(404).json({ msg: 'Retirement not found' });
      }
      res.json({ msg: 'Retirement deleted' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
};

module.exports = retirementController;
