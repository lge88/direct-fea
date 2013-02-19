var events = require('events');
var util = require('util');
util.inherits(Solver, events.EventEmitter);

function Solver(feModel) {
  events.EventEmitter.call(this);
  this._model = feModel;
};

Solver.prototype.model = function() {
  return this._model;
};

Solver.prototype.end = Solver.prototype.model;

Solver.prototype.solve = function() {
  throw "Solver::solve is not implemented!";
};

module.exports = exports = Solver;