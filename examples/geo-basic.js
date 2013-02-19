var fea = require('../index.js');
var model = fea.createModel();

var m = model
  .geo().points()
    .add({
      x : 2,
      y : 5,
      z : 4
    })
    .add().last().x(1).y(2).z(3).end()
  .end()
  .end();

console.log('m:', m);
console.log('points:', model.geo().points());
console.log('geo:', m.geo().toJSON());
