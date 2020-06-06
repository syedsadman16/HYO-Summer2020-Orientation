const express = require('express');

var app = express();

app.use(express.static(__dirname + '/static/html/'));

app.listen(process.env.PORT || 1337);
