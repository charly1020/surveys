//keys.js - figure out what set of credential to return.
if( process.env.NODE_ENV === 'production') {
  //whe are in production - return the prod set of keys;
  module.exports = require('./prod');
}else {
  //whe are in production - return the prod set of keys;
  module.exports = require('./dev');
}
