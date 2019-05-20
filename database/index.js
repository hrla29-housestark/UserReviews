const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/adidas', {useNewUrlParser: true});

var db = mongoose.connection;

module.exports = db;