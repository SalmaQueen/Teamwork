const express = require('express');
const router = express.Router();

const employeeCtrl = require('../controllers/employees');

router.post('/signup', employeeCtrl.signup);
router.post('/login', employee.login);

router.get('/', auth, employeeCtrl.getAllEmployees);
router.post('/', auth, employeeCtrl.createEmployee);
router.get('/:id', auth, employeeCtrl.getOneEmployee);
router.put('/:id', auth, employeeCtrl.modifyEmployee);
router.delete('/:id', auth, employeeCtrl.deleteEmployee);

module.exports = router;

module.exports = router;