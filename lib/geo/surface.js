var _ = require('lodash');
var GeoBase = require('./geobase').GeoBase;
var GeoCollectionBase = require('./geobase').GeoCollectionBase;
var makeAPI = require('./geobase').makeAPI;

var CurveLoops = require('./curve').CurveLoops;

var Surface = GeoBase.extend(_.extend({
  defaults : {
    curveLoops : new CurveLoops()
  }
}, makeAPI('curveLoops')));

var Surfaces = GeoCollectionBase.extend({
  model : Surface
});

var SurfaceWithSign = GeoBase.extend({
  defaults : {
    sign : 1
  },
  validate : function(attrs) {
    if (attrs.sign != 1 && attrs.sign != -1) {
      return 'sign of the curve can only be 1 or -1';
    }
    if (!(attrs.surface instanceof Surface)) {
      return 'surface must be an instance of Surface';
    }
    return null;
  }
});

var SurfaceLoop = GeoCollectionBase.extend({
  model : SurfaceWithSign
});

var SurfaceLoops = GeoCollectionBase.extend({
  model : SurfaceLoop
});

exports.Surface = Surface;
exports.Surfaces = Surfaces;
exports.SurfaceWithSign = SurfaceWithSign;
exports.SurfaceLoop = SurfaceLoop;
exports.SurfaceLoops = SurfaceLoops;