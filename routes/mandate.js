const express = require('express');
const { body } = require('express-validator');
const mandateController = require('../controllers/mandateController');
const router = express.Router();

router.post(
  '/',
  [
    body('employee_id').isInt().withMessage('Employee ID must be an integer'),
    body('start_date').isDate().withMessage('Start date must be a valid date'),
    body('end_date').isDate().withMessage('End date must be a valid date'),
    body('task_description').not().isEmpty().withMessage('Task description is required'),
  ],
  mandateController.createMandate
);

router.get('/', mandateController.getAllMandates);
router.get('/:id', mandateController.getMandateById);
router.put('/:id', mandateController.updateMandate);
router.delete('/:id', mandateController.deleteMandate);

module.exports = router;
