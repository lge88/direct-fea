var _ = require('lodash');
module.exports = exports = function(base) {
  var Base = base.Base;
  var makeAPI = base.makeAPI;
  var point = require('./point')(base);
  var curve = require('./curve')(base);
  var surface = require('./surface')(base);
  var volumn = require('./volumn')(base);
  var group = require('./group')(base);

  var Geo = Base.extend(_.extend({
    defaults : {
      points : new point.Points(),
      curves : new curve.Curves(),
      surfaces : new surface.Surfaces(),
      volumns : new volumn.Volumns()
    },
    initialize : function(feModel) {
      this._model = feModel;
      var _this = this;
      this.end = this.model = function() {
            return _this._model;
      };
      
      var back = function() {
        return _this;
      };
      
      this.points().end = back;
      this.curves().end = back;
      this.surfaces().end = back;
      this.volumns().end = back;
    }

  }, makeAPI(['points', 'curves', 'surfaces', 'volumns'])));
  
  return Geo;
};