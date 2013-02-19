var point = require('./point');
var curve = require('./curve');

// Test validate:
var p1 = new point.Point({
  x : 1,
  y : 'asdf',
  z : 1
});
console.log('p1.validationError', p1.validationError);

// Test fluent api
var p2 = new point.Point();
p2
  .x(12)
  .y(234)
  .z(10);

console.log('p2 x', p2.x());
console.log('p2 y', p2.y());
console.log('p2 z', p2.z());

p2.on('invalid', function(err) {
  console.log('invalid point:', p2.validationError);
});

p2.x('asdfsda');

// nthPoint
var c1 = new curve.CurveWithSign({
  curve : new curve.Line()
});

c1.on('invalid', function(err) {
  console.log('Invalid: ', err);
});

console.log('c1: ', c1);

c1.set({
  sign : 5
});
console.log('c1: ', c1);

// c1.save();

