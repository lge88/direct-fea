var _ = require('lodash');
var Backbone = require('backbone');

var geobase = require('./geobase');
var point = require('./point');
var curve = require('./curve');
var surface = require('./surface');
var volumn = require('./volumn');
var group = require('./group');

var Geo = geobase.GeoBase.extend(_.extend({
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

}, geobase.makeAPI(['points', 'curves', 'surfaces', 'volumns'])));

module.exports = exports = function(proto) {  
  proto.geo = function() {
    if (!this._geo) {
      this._geo = new Geo(this);
    }
    debugger;
    return this._geo;
  };
};