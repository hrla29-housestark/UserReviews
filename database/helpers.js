const db = require('./index');
const model = require('./schemas');
const mongoose = require('mongoose');

module.exports = {
  findByMostRelevant: (param, callback) => {
    model.Review.find(param)
    .then(data => {
      callback(null, data)
    })
    .catch(err => callback(err));
  },
  insertReviews: (data, callback) => {
    model.Review.insertMany(data)
    .then(() => callback(null))
    .catch(err => callback(err))
  },
  insertRatings: (data, callback) => {
    model.Aggregate.insertMany(data)
    .then(() => callback(null))
    .catch(err => callback(err))
  },
  getRatings: (param, callback) => {
    model.Aggregate.find(param)
    .then(data => {
      callback(null, data)
    })
    .catch(err => callback(err))
  },
  getAllRatings: (callback) => {
    model.Aggregate.find()
    .then(data => {
      callback(null, data)
    })
    .catch(err => callback(err))
  },
  deleteAll: (callback) => {
    model.Review.deleteMany()
    .then(() => callback(null))
    .catch(err => callback(err))
  },
  deleteRatings: (callback) => {
    model.Aggregate.deleteMany()
    .then(() => callback(null))
    .catch(err => callback(err))
  }
}