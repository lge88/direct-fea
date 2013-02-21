var _ = require('lodash');

module.exports = exports = function(base) {

  var Base = base.Base;
  var CollectionBase = base.CollectionBase;
  var makeAPI = base.makeAPI;

  var curve = require('./curve')(base);
  var CurveLoops = curve.CurveLoops;

  var Surface = Base.extend(_.extend({
    defaults : {
      curveLoops : new CurveLoops()
    }
  }, makeAPI('curveLoops')));

  var Surfaces = CollectionBase.extend({
    model : Surface
  });

  var SurfaceWithSign = Base.extend({
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

  var SurfaceLoop = CollectionBase.extend({
    model : SurfaceWithSign
  });

  var SurfaceLoops = CollectionBase.extend({
    model : SurfaceLoop
  });

  return {
    Surface : Surface,
    Surfaces : Surfaces,
    SurfaceWithSign : SurfaceWithSign,
    SurfaceLoop : SurfaceLoop,
    SurfaceLoops : SurfaceLoops
  };
};
