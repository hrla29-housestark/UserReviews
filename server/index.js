const express = require('express');
const path = require('path');
const parser = require('body-parser');
const router = require('./router');

const app = express();
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(parser.urlencoded());
app.use(parser.json());
//app.use('/product', router);

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
