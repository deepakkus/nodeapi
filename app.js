var express = require('express');

var cors = require('cors');
var app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(8090, () => {
  console.log("Server is running on port 8090.");
});

module.exports = app;
