var _ = require('lodash');

var GeoBase = require('./geobase').GeoBase;
var GeoCollectionBase = require('./geobase').GeoCollectionBase;
var makeAPI = require('./geobase').makeAPI;

var Point = GeoBase.extend(_.extend({
  defaults : {
    x : 0.0,
    y : 0.0,
    z : 0.0
  },
  validate : function(attrs) {
    var err = [];
    if (_.isUndefined(attrs)) {
      return null;
    }
    _.each(['x', 'y', 'z'], function(key) {
      if (!_.isUndefined(attrs[key]) && !_.isNumber(attrs[key])) {
        err.push('Invalid value ' + attrs[key]  + ' for point coordinate ' + key);
      }
    });
    if (err.length > 0) {
      return err;
    }
    return null;
  }
}, makeAPI(['x', 'y', 'z'])));


var Points = GeoCollectionBase.extend({
  model: Point,
  import : function(arr){
    this.add(_.map(arr, function(val) {
      var p = {};
      if(_.isArray(val) && val.length > 0) {
        p.x = val[0];
        p.y = val[1] || 0.0;
        p.z = val[2] || 0.0;
      } else if (_.isNumber(val)){
        p.x = val;
      }
      return p;
    }));
  },
  toJSON : function() {
    var json = Backbone.Collection.prototype.toJSON.call(this);
    return _.map(json, function(val) {
      var arr = [0.0, 0.0, 0.0];
      arr[0] = val.x;
      arr[1] = val.y;
      arr[2] = val.z;
      return arr; 
    });
  }
});

exports.Point = Point;
exports.Points = Points;