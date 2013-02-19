var _ = require('lodash');
var GeoBase = require('./geobase').GeoBase;
var GeoCollectionBase = require('./geobase').GeoCollectionBase;
var makeAPI = require('./geobase').makeAPI;

var Points = require('./point').Points;
var PointGroups = GeoCollectionBase.extend({
  model : Points
});

var Curves = require('./curve').Curves;
var CurveGroups = GeoCollectionBase.extend({
  model : Curves
});

var Surfaces = require('./surface').Surfaces;
var SurfaceGroups = GeoCollectionBase.extend({
  model : Surfaces
});

var Volumns = require('./volumn').Volumns;
var VolumnGroups = GeoCollectionBase.extend({
  model : Volumns
});

exports.PointGroups = PointGroups;
exports.CurveGroups = CurveGroups;
exports.SurfaceGroups = SurfaceGroups;
exports.VolumnGroups = VolumnGroups;