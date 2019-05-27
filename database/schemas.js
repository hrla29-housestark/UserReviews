const mongoose = require('mongoose');
const db = require('./index');

let aggregateSchema = mongoose.Schema({
  productId: String,
  oneStar: Number,
  twoStars: Number,
  threeStars: Number,
  fourStars: Number,
  fiveStars: Number,
  averageRating: Number,
  recommended: Number,
  size: Number,
  width: Number,
  comfort: Number,
  quality: Number,
  total: Number
});

let reviewSchema = mongoose.Schema({
  productId: String,
  rating: Number,
  title: String,
  body: String,
  helpful: Number,
  notHelpful: Number,
  recommend: Boolean,
  verified: Boolean,
  adidasResponse: String,
  userName: String,
  date: String,
  relevant: Number
})

let Aggregate = mongoose.model('Aggregate', aggregateSchema);
let Review = mongoose.model('Review', reviewSchema);

module.exports = {
  Review,
  Aggregate
}
