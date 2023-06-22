var express = require('express');
var mongoose = require("mongoose");
var cors = require('cors');
var app = express();
var logger = require('morgan');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));

app.listen(8090, () => {
  console.log("Server is running on port 8090.");
});

module.exports = app;
