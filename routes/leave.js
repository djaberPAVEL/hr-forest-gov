const express = require('express');
const router = express.Router();
const leaveController = require('../controllers/leaveController');

router.post('/leave', leaveController.createLeave);
router.get('/leave', leaveController.getAllLeaves);
router.get('/leave/:id', leaveController.getLeaveById);
router.put('/leave/:id', leaveController.updateLeave);
router.delete('/leave/:id', leaveController.deleteLeave);

module.exports = router;
