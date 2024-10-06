const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.post('/job', jobController.createJob);
router.get('/job', jobController.getAllJobs);
router.get('/job/:id', jobController.getJobById);
router.put('/job/:id', jobController.updateJob);
router.delete('/job/:id', jobController.deleteJob);

module.exports = router;
