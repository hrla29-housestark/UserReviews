const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/adidasrr', {useNewUrlParser: true});

var db = mongoose.connection;

module.exports = db;