const helpers = require('./database/helpers')

var randomizer = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

var seedData = (id) => {
  var oneStar = randomizer(1000);
  var twoStars = randomizer(1000);
  var threeStars = randomizer(1000);
  var fourStars = randomizer(1000);
  var fiveStars = randomizer(1000);
  var size = randomizer(100);
  var width = randomizer(100);
  var comfort = randomizer(100);
  var quality = randomizer(100);
  var recommended = randomizer(100);
  var bigNumber = (oneStar * 1) + (twoStars * 2) + (threeStars * 3) + (fourStars * 4) + (fiveStars * 5);
  var totalReviews = oneStar + twoStars + threeStars + fourStars + fiveStars;
  var average = (bigNumber/totalReviews).toPrecision(2);
  obj = {
    productId: id,
    oneStar: oneStar,
    twoStars: twoStars,
    threeStars: threeStars,
    fourStars: fourStars,
    fiveStars: fiveStars,
    averageRating: average,
    recommended: recommended,
    size: size,
    width: width,
    comfort: comfort,
    quality: quality ,
    total: totalReviews
  }
  return obj;
}

var runSeed = () => {
  results = [];
  for(var i = 0; i < 100; i++){
    results.push(seedData(i));
  }
  return results;
}

var ratings = runSeed();

helpers.insertRatings(ratings, (err) => {
  if(err){
    console.log('error in insertRatings')
  } else{
    console.log('successful insert')
  }
})
