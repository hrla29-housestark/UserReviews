const faker = require('faker');
const helpers = require('./helpers')

var randomizer = (min, max) => {
  return Math.floor(Math.random() * (max - min) ) + min;
}
                

var adj = ['really', 'absolutely', 'slightly', 'kinda', 'do not'];
var verb = ['hate', 'love', 'like', 'detest']
var product = ['this product', 'adidas'];
var person = ['Mom', 'Dad', 'Grandma', 'Bae', 'Santa']
var sentances = ['It was a gift.', 'I will be returning it.', 'LOVE LOVE LOVE LOVE.',
                 `${person[randomizer(0, person.length)]} was on point with this one. Thanks!`, 'It runs big', 'It runs small',
                  "I'm getting another one", 'This product was used. Disgusting.', 
                  'This is the worst thing I have ever bought.', 'Not true to size',
                ];
var titles = ['Absolute bobby dazzlers','Love it', 'Hate it', 'Disappointed', 'Not true to fit', 'Happy with this purchase', 'Too big', 'Too small', 'Came used', 'Decent product', 'Bad quality', 'Great quality', `Only lasted ${randomizer(1, 10)} weeks`, `Will buy ${randomizer(1, 4)} more of these`, 'Excellent!!!!', 'Soooo happy', 'Adidas really let me down', 'Nice', 'Not perfect', 'Too expensive', 'I enjoy this product']

var body = () => `I ${adj[randomizer(0, adj.length)]} ${verb[randomizer(0, verb.length)]} ${product[randomizer(0, product.length)]}. ${sentances[randomizer(0, sentances.length)]}`;

var generateReview = (id) => {
  return {
    productId: id,
    rating: randomizer(1, 6),
    title: titles[randomizer(0, titles.length)],
    body: body(),
    helpful: randomizer(0, 200),
    notHelpful: randomizer(0, 200),
    recommend: randomizer(0, 2),
    userName: faker.internet.userName(),
    date: faker.date.recent(),
    verified: randomizer(0, 2),
    relevant: randomizer(0, 100)
  }
}

var generateManyReviews = () => {
  results = [];
  for(var i = 0; i < 100; i++){
    for(var j = 0; j < randomizer(0, 30); j++){
      results.push(generateReview(i));
    }
  }
  return results;
}

var reviews = generateManyReviews();

//module.exports = generateManyReviews;

helpers.insertReviews(reviews, (err) => {
  if(err){
    console.log('error in insertReviews')
  } else{
    console.log('successful insert')
  }
})
