_ = require("underscore");
require("underscore-query")(_);

var filter = (collection, array) => {
  return _.query(collection, {rating: {$in: array}})
}

module.exports = filter;