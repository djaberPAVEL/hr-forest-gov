const Vacation = require('../models/vacation');

const vacationController = {
  createVacation: async (req, res) => {
    try {
      const newVacation = await Vacation.create(req.body);
      res.json(newVacation);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },

  getAllVacations: async (req, res) => {
    try {
      const vacations = await Vacation.findAll();
      res.json(vacations);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },

  getVacationById: async (req, res) => {
    try {
      const vacation = await Vacation.findById(req.params.id);
      if (!vacation) {
        return res.status(404).json({ msg: 'Vacation not found' });
      }
      res.json(vacation);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },

  updateVacation: async (req, res) => {
    try {
      const updatedVacation = await Vacation.update(req.params.id, req.body);
      if (!updatedVacation) {
        return res.status(404).json({ msg: 'Vacation not found' });
      }
      res.json(updatedVacation);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },

  deleteVacation: async (req, res) => {
    try {
      const deletedVacation = await Vacation.delete(req.params.id);
      if (!deletedVacation) {
        return res.status(404).json({ msg: 'Vacation not found' });
      }
      res.json({ msg: 'Vacation deleted' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
};

module.exports = vacationController;
