var Backbone = require('backbone');
var _ = require('lodash');
var Points = require('./points').Points;

var Curve = Backbone.Model.extend({
  model : Points
});

exports.Curve = Curve;