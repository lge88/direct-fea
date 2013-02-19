var fea = require('../index.js');
var model = fea.createModel();

model
  .solver().solve().end()
  .interpreter().exec(['info']);