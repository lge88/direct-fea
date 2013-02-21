var _ = require('lodash');

module.exports = exports = function(base) {

  var Base = base.Base;
  var CollectionBase = base.CollectionBase;
  var makeAPI = base.makeAPI;
  var point = require('./point')(base);
  var curve = require('./curve')(base);
  var surface = require('./surface')(base);
  var volumn = require('./volumn')(base);

  var Points = point.Points;
  var PointGroups = CollectionBase.extend({
    model : Points
  });

  var Curves = curve.Curves;
  var CurveGroups = CollectionBase.extend({
    model : Curves
  });

  var Surfaces = surface.Surfaces;
  var SurfaceGroups = CollectionBase.extend({
    model : Surfaces
  });

  var Volumns = volumn.Volumns;
  var VolumnGroups = CollectionBase.extend({
    model : Volumns
  });
  
  return {
    PointGroups : PointGroups,
    CurveGroups : CurveGroups,
    SurfaceGroups : SurfaceGroups,
    VolumnGroups : VolumnGroups
  };
};
