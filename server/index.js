const express = require('express');
const path = require('path');
const parser = require('body-parser');
const router = require('./router');
const helpers = require('../database/helpers');
const seedReviews = require('../seedReviews');

const app = express();
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(parser.urlencoded());
app.use(parser.json());
//app.use('/product', router);

app.listen(PORT, () => console.log(`listening on port ${PORT}`))

app.get('/reviews', (req, res) => {
  helpers.findByMostRelevant(req.query, (err, data) => {
    if(err){
      res.status(404).send(err)
    } else{
      res.status(200).send(data)
    }
  })
})

app.post('/reviews', (req, res) => {
  var reviews = seedReviews();
  helpers.insert(reviews, err => {
    if(err){
      res.status(404).send(err)
    } else{
      res.status(200).send('successfully posted to database');
    }
  })
})

app.delete('/reviews', (req, res) => {
  helpers.deleteAll(err => {
    if(err){
      res.status(404).send(err)
    } else{
      res.status(200).send('successfully deleted all reviews')
    }
  })
})