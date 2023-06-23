var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({status: false})
});

const PatientController = require('../../../Controller/Admin/Patient');
router.get('/admin/patient', PatientController.viewAll);
module.exports = router;