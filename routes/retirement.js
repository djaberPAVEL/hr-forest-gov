const express = require('express');
const { body } = require('express-validator');
const retirementController = require('../controllers/retirementController');
const router = express.Router();

router.post(
  '/',
  [
    body('employee_id').isInt().withMessage('Employee ID must be an integer'),
    body('retirement_date').isDate().withMessage('Retirement date must be a valid date'),
  ],
  retirementController.createRetirement
);

router.get('/', retirementController.getAllRetirements);
router.get('/:id', retirementController.getRetirementById);
router.put('/:id', retirementController.updateRetirement);
router.delete('/:id', retirementController.deleteRetirement);

module.exports = router;
