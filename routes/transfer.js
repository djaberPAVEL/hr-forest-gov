const express = require('express');
const router = express.Router();
const transferController = require('../controllers/transferController');

router.post('/transfer', transferController.createTransfer);
router.get('/transfer', transferController.getAllTransfers);
router.get('/transfer/:id', transferController.getTransferById);
router.put('/transfer/:id', transferController.updateTransfer);
router.delete('/transfer/:id', transferController.deleteTransfer);

module.exports = router;
