const express = require('express');
const { body } = require('express-validator');
const vacationController = require('../controllers/vacationController');
const router = express.Router();

router.post(
  '/',
  [
    body('employee_id').isInt().withMessage('Employee ID must be an integer'),
    body('start_date').isDate().withMessage('Start date must be a valid date'),
    body('end_date').isDate().withMessage('End date must be a valid date'),
    body('type').not().isEmpty().withMessage('Type is required'),
  ],
  vacationController.createVacation
);

router.get('/', vacationController.getAllVacations);
router.get('/:id', vacationController.getVacationById);
router.put('/:id', vacationController.updateVacation);
router.delete('/:id', vacationController.deleteVacation);

module.exports = router;
