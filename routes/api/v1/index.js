var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({status: false})
});
const AdminController = require('../../../Controller/Auth/Admin');
const PatientController = require('../../../Controller/Admin/Patient');
router.post('/admin/login', AdminController.login);
router.post('/admin/register', AdminController.register);
router.get('/admin/patient', PatientController.viewAll);
module.exports = router;