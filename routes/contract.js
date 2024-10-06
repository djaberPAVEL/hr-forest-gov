const express = require('express');
const router = express.Router();
const contractController = require('../controllers/contractController');

router.post('/contract', contractController.createContract);
router.get('/contract', contractController.getAllContracts);
router.get('/contract/:id', contractController.getContractById);
router.put('/contract/:id', contractController.updateContract);
router.delete('/contract/:id', contractController.deleteContract);

module.exports = router;
