const faker = require('faker');

var randomizer = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}
                

var adj = ['really', 'absolutely', 'slightly', 'kinda', 'do not'];
var verb = ['hate', 'love', 'like', 'detest']
var product = ['this product', 'adidas'];
var person = ['Mom', 'Dad', 'Grandma', 'Bae', 'Santa']
var sentances = ['It was a gift.', 'I will be returning it.', 'LOVE LOVE LOVE LOVE.',
                 `${person[randomizer(person.length)]} was on point with this one. Thanks!`, 'It runs big', 'It runs small',
                  "I'm getting another one", 'This product was used. Disgusting.', 
                  'This is the worst thing I have ever bought.', 'Not true to size',
                ];
var titles = ['Love it', 'Hate it', 'Disappointed', 'Not true to fit', 'Happy with this purchase', 'Too big', 'Too small', 'Came used', 'Decent product', 'Bad quality', 'Great quality', `Only lasted ${randomizer(10)} weeks`, `Will buy ${randomizer(4)} more of these`, 'Excellent!!!!', 'Soooo happy', 'Adidas really let me down', 'Nice', 'Not perfect', 'Too expensive', 'I enjoy this product']

var body = () => `I ${adj[randomizer(adj.length)]} ${verb[randomizer(verb.length)]} ${product[randomizer(product.length)]}. ${sentances[randomizer(sentances.length)]}`;

var generateReview = (id) => {
  return {
    productId: id,
    rating: randomizer(5),
    title: titles[randomizer(titles.length)],
    body: body(),
    helpful: randomizer(200),
    notHelpful: randomizer(200),
    recommend: randomizer(1),
    userName: faker.internet.userName(),
    verified: randomizer(1)
  }
}

var generateManyReviews = () => {
  results = [];
  for(var i = 0; i < 100; i++){
    for(var j = 0; j < randomizer(15); j++){
      results.push(generateReview(i));
    }
  }
  return results;
}