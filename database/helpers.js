const db = require('./index');
const model = require('./schemas');
const mongoose = require('mongoose');

module.exports = {
  findByNewest: (callback) => {
    model.Review.find().sort({ timestamp: -1 })
    .then(data => {
      callback(null, data)
    })
    .catch(err => callback(err));
  },
  findByMostHelpful: (callback) => {
    model.Review.find().sort({ helpful: -1 })
    .then(data => {
      callback(null, data)
    })
    .catch(err => callback(err));
  },
  findByMostRelevant: (param, callback) => {
    model.Review.find(param)
    .then(data => {
      callback(null, data)
    })
    .catch(err => callback(err));
  },
  insert: (data, callback) => {
    model.Review.insertMany(data)
    .then(() => callback(null))
    .catch(err => callback(err))
  },
  deleteAll: (callback) => {
    model.Review.deleteMany()
    .then(() => callback(null))
    .catch(err => callback(err))
  }
}