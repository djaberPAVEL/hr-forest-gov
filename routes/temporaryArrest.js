const express = require('express');
const { body } = require('express-validator');
const temporaryArrestController = require('../controllers/temporaryArrestController');
const router = express.Router();

router.post(
  '/',
  [
    body('employee_id').isInt().withMessage('Employee ID must be an integer'),
    body('arrest_date').isDate().withMessage('Arrest date must be a valid date'),
    body('reason').not().isEmpty().withMessage('Reason is required'),
    body('duration').isInt().withMessage('Duration must be an integer'),
  ],
  temporaryArrestController.createTemporaryArrest
);

router.get('/', temporaryArrestController.getAllTemporaryArrests);
router.get('/:id', temporaryArrestController.getTemporaryArrestById);
router.put('/:id', temporaryArrestController.updateTemporaryArrest);
router.delete('/:id', temporaryArrestController.deleteTemporaryArrest);

module.exports = router;
