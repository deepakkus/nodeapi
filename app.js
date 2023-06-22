var express = require('express');
var mongoose = require("mongoose");
var cors = require('cors');
var app = express();
var logger = require('morgan');
var path = require('path');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(8095, () => {
  console.log("Server is running on port 8095.");
});

module.exports = app;
