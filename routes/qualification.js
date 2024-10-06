const express = require('express');
const router = express.Router();
const qualificationController = require('../controllers/qualificationController');

router.post('/qualification', qualificationController.createQualification);
router.get('/qualification', qualificationController.getAllQualifications);
router.get('/qualification/:id', qualificationController.getQualificationById);
router.put('/qualification/:id', qualificationController.updateQualification);
router.delete('/qualification/:id', qualificationController.deleteQualification);

module.exports = router;
