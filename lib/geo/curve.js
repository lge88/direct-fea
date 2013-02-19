var Backbone = require('backbone');
var _ = require('lodash');

var GeoBase = require('./geobase').GeoBase;
var GeoCollectionBase = require('./geobase').GeoCollectionBase;
var makeAPI = require('./geobase').makeAPI;

var Point = require('./point').Point;
var Points = require('./point').Points;

;
var Curve = GeoBase.extend(_.extend({
  defaults : {
    points : new Points()
  }
}, makeAPI('points')));

var Line = Curve.extend({
  start : function(pt) {
    return this.points().nth(0, pt);
  },
  end : function(pt) {
    return this.points().nth(1, pt);
  }
});

var Arc = Curve.extend({
  start : function(pt) {
    return this.points().nth(0, pt);
  },
  center : function(pt) {
    return this.points().nth(1, pt);
  },
  end : function(pt) {
    return this.points().nth(2, pt);
  }
});

var Curves =  GeoCollectionBase.extend({
  model : Curve
});

var CurveWithSign = GeoBase.extend({
  defaults : {
    sign : 1
  },
  validate : function(attrs) {
    if (attrs.sign != 1 && attrs.sign != -1) {
      return 'sign of the curve can only be 1 or -1';
    }
    if (!(attrs.curve instanceof Curve)) {
      return 'curve must be an instance of Curve';
    }
    return null;
  }
});

var CurveLoop = GeoCollectionBase.extend({
  model : CurveWithSign
});

var CurveLoops = GeoCollectionBase.extend({
  model : CurveLoop
});



exports.Curve = Curve;
exports.Line = Line;
exports.Arc = Arc;
exports.Curves = Curves;
exports.CurveWithSign = CurveWithSign;
exports.CurveLoop = CurveLoop;
exports.CurveLoops = CurveLoops;