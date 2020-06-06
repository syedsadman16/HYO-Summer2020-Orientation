const express = require('express');

var app = express();

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/static'));

app.listen(process.env.PORT || 1337);
