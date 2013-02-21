var Backbone = require('backbone');
var _ = require('lodash');

module.exports = exports = function(base) {

  var Base = base.Base;
  var CollectionBase = base.CollectionBase;
  var makeAPI = base.makeAPI;
  var point = require('./point')(base);

  var Point = point.Point;
  var Points = point.Points;

  var Curve = Base.extend(_.extend({
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

      var Curves =  CollectionBase.extend({
        model : Curve
      });

  var CurveWithSign = Base.extend({
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

  var CurveLoop = CollectionBase.extend({
    model : CurveWithSign
  });

  var CurveLoops = CollectionBase.extend({
    model : CurveLoop
  });

  return {
    Curve : Curve,
    Line : Line,
    Arc : Arc,
    Curves : Curves,
    CurveWithSign : CurveWithSign,
    CurveLoop : CurveLoop,
    CurveLoops : CurveLoops
  };
};
