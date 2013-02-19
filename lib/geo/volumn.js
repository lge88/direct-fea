var _ = require('lodash');
var GeoBase = require('./geobase').GeoBase;
var GeoCollectionBase = require('./geobase').GeoCollectionBase;
var makeAPI = require('./geobase').makeAPI;

var SurfaceLoops = require('./surface').SurfaceLoops;

var Volumn = GeoBase.extend(_.extend({
  defaults : {
    surfaceLoops : new SurfaceLoops()
  }
}, makeAPI('surfaceLoops')));

var Volumns = GeoCollectionBase.extend({
  model : Volumn
});

exports.Volumn = Volumn;
exports.Volumns = Volumns;