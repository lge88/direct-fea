var _ = require('lodash');

module.exports = exports = function(base) {  
  var Base = base.Base;
  var CollectionBase = base.CollectionBase;
  var makeAPI = base.makeAPI;

  var surface = require('./surface')(base);
  var SurfaceLoops = surface.SurfaceLoops;

  var Volumn = Base.extend(_.extend({
    defaults : {
      surfaceLoops : new SurfaceLoops()
    }
  }, makeAPI('surfaceLoops')));

  var Volumns = CollectionBase.extend({
    model : Volumn
  });
  return {
    Volumn : Volumn,
    Volumns : Volumns
  };
};
