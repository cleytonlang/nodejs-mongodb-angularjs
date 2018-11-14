var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/'));
app.use(bodyParser());

var porta = 80;

app.listen(process.env.PORT || porta, function() {
    console.log('Servidor online porta ' + porta);
});