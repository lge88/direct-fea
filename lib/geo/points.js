var Backbone = require('backbone');
var _ = require('lodash');

var Point = Backbone.Model.extend({
  defaults : {
    x : 0.0,
    y : 0.0,
    z : 0.0
  }
});

var Points = Backbone.Collection.extend({
  model: Point,
  initialize : function() {
    _.bindAll();
  },
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
exports.points = function(arg){
  return new Points(arg);
};
