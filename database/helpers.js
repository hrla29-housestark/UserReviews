const db = require('./index');
const model = require('./schemas');
const mongoose = require('mongoose');

//make shit
  //do shit inside 
  //do other shit inside
  //do the last shit inside

module.exports = {
  findByNewest: (callback) => {
    model.Review.find()
    .then(data => {
      callback(null, data)
    })
    .catch(err => callback(err));
  },
  findByMostHelpful: () => {

  },
  findByMostRelevant: () => {

  }
}